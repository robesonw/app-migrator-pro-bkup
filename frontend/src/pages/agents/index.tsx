import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Bot, Plus, Settings } from 'lucide-react';
import AgentChatPanel from '@/components/agents/AgentChatPanel';
import AgentConfigPanel from '@/components/agents/AgentConfigPanel';
import ConversationList from '@/components/agents/ConversationList';
import { cn } from '@/lib/utils';

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [activeConversation, setActiveConversation] = useState(null);
  const [view, setView] = useState('conversations'); // 'conversations' | 'chat' | 'config'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    setLoading(true);
    try {
      const configs = await base44.entities.AgentConfig.list();
      setAgents(configs);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const handleSelectAgent = (agent) => {
    setSelectedAgent(agent);
    setActiveConversation(null);
    setView('conversations');
  };

  const handleNewConversation = async () => {
    if (!selectedAgent) return;
    const conv = await base44.agents.createConversation({
      agent_name: selectedAgent.agent_name,
      metadata: { title: `Chat ${new Date().toLocaleString()}` }
    });
    const record = await base44.entities.AgentConversation.create({
      agent_name: selectedAgent.agent_name,
      conversation_id: conv.id,
      title: `Chat ${new Date().toLocaleString()}`,
      message_count: 0,
      last_active: new Date().toISOString()
    });
    setActiveConversation({ ...record, _conv: conv });
    setView('chat');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 leading-none">AI Agents</h1>
            <p className="text-xs text-slate-400 mt-0.5">Chat with your migration agents</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-6 py-6 gap-5">
        <div className="w-56 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Agents</span>
            <Button variant="ghost" size="icon" className="w-6 h-6" onClick={() => { setSelectedAgent(null); setView('config'); }}>
              <Plus className="w-3.5 h-3.5 text-slate-500" />
            </Button>
          </div>
          {loading && <div className="text-xs text-slate-400">Loading...</div>}
          {!loading && agents.length === 0 && (
            <button
              onClick={() => setView('config')}
              className="w-full text-left px-3 py-2.5 rounded-xl border-2 border-dashed border-slate-200 text-xs text-slate-400 hover:border-slate-300 hover:text-slate-500 transition-colors"
            >
              + Add your first agent
            </button>
          )}
          <div className="space-y-1">
            {agents.map(agent => (
              <button
                key={agent.id}
                onClick={() => handleSelectAgent(agent)}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors flex items-center gap-2",
                  selectedAgent?.id === agent.id
                    ? "bg-slate-900 text-white"
                    : "hover:bg-slate-100 text-slate-700"
                )}
              >
                <Bot className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{agent.display_name || agent.agent_name}</span>
              </button>
            ))}
          </div>
        </div>
        {selectedAgent && view !== 'config' && (
          <div className="w-64 flex-shrink-0 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Conversations</span>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="w-6 h-6" onClick={() => setView('config')}>
                  <Settings className="w-3.5 h-3.5 text-slate-400" />
                </Button>
                <Button variant="ghost" size="icon" className="w-6 h-6" onClick={handleNewConversation}>
                  <Plus className="w-3.5 h-3.5 text-slate-500" />
                </Button>
              </div>
            </div>
            <ConversationList
              agentName={selectedAgent.agent_name}
              activeId={activeConversation?.id}
              onSelect={handleSelectConversation}
              onNew={handleNewConversation}
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          {view === 'config' && (
            <AgentConfigPanel
              agent={selectedAgent}
              onSave={(saved) => { loadAgents(); setSelectedAgent(saved); setView('conversations'); }}
              onCancel={() => setView(selectedAgent ? 'conversations' : null)}
            />
          )}
          {view === 'chat' && (
            <AgentChatPanel
              agentConfig={selectedAgent}
              conversationRecord={activeConversation}
              onBack={() => setView('conversations')}
            />
          )}
        </div>
      </div>
    </div>
  );
}