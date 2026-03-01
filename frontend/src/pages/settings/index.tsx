import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { User, Bell, Flag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FeatureFlagsPanel, { useFeatureFlags } from '@/components/migration/FeatureFlagsPanel';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils/createPageUrl';

export default function Settings() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ display_name: '', bio: '', github_username: '', notifications_enabled: true });
  const [profileId, setProfileId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState('profile');
  const { flags, setFlags } = useFeatureFlags();

  useEffect(() => {
    base44.auth.me().then(u => {
      setUser(u);
      return base44.entities.UserProfile.filter({ created_by: u.email }, '-created_date', 1);
    }).then(profiles => {
      if (profiles && profiles[0]) {
        setProfile(profiles[0]);
        setProfileId(profiles[0].id);
      }
    }).catch(() => {});
  }, []);

  const saveProfile = async () => {
    setSaving(true);
    try {
      if (profileId) {
        await base44.entities.UserProfile.update(profileId, profile);
      } else {
        const created = await base44.entities.UserProfile.create(profile);
        setProfileId(created.id);
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (_) {}
    setSaving(false);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'flags', label: 'Feature Flags', icon: Flag },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="border-b border-slate-100 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to={createPageUrl('Migrate')} className="text-slate-400 hover:text-slate-700">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <h1 className="text-base font-bold text-slate-900">Settings</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-1 bg-slate-100 rounded-xl p-1 mb-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setTab(id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-medium rounded-lg transition-colors ${tab === id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}> 
              <Icon className="w-3.5 h-3.5" /> {label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {tab === 'profile' && (
          <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-5">
            <h2 className="text-sm font-bold text-slate-800">Your Profile</h2>
            {user && (
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-sm font-bold text-slate-600">
                  {(user.name || user.email || '?')[0].toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{user.name || 'User'}</p>
                  <p className="text-xs text-slate-400">{user.email}</p>
                </div>
              </div>
            )}
            {[
              { key: 'display_name', label: 'Display Name', placeholder: 'Your name' },
              { key: 'github_username', label: 'GitHub Username', placeholder: 'e.g. octocat' },
              { key: 'bio', label: 'Bio', placeholder: 'Short bio...' },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-1.5">{label}</label>
                <Input className="h-10 rounded-xl border-slate-200" placeholder={placeholder}
                  value={profile[key] || ''}
                  onChange={e => setProfile(p => ({ ...p, [key]: e.target.value }))} />
              </div>
            ))}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-800">Email Notifications</p>
                <p className="text-xs text-slate-400">Receive migration completion alerts</p>
              </div>
              <button onClick={() => setProfile(p => ({ ...p, notifications_enabled: !p.notifications_enabled }))}
                className={`relative w-10 h-5 rounded-full transition-colors ${profile.notifications_enabled ? 'bg-emerald-500' : 'bg-slate-300'}`}> 
                <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${profile.notifications_enabled ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
            <Button onClick={saveProfile} disabled={saving} className="w-full h-10 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold">
              {saving ? 'Saving...' : saved ? '✔ Saved!' : 'Save Profile'}
            </Button>
          </div>
        )}

        {/* Feature Flags Tab */}
        {tab === 'flags' && (
          <FeatureFlagsPanel flags={flags} onFlagsChange={setFlags} />
        )}

        {/* Notifications Tab */}
        {tab === 'notifications' && (
          <NotificationsTab />
        )}
      </div>
    </div>
  );
}

function NotificationsTab() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch notifications
  }, []);

  return <div />; // Placeholder for notifications content
}
