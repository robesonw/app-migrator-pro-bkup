import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import AICodeReviewer from '@/components/migration/AICodeReviewer';
import EnhancedMigrationReport from '@/components/migration/EnhancedMigrationReport';
import { useQuery } from '@tanstack/react-query';

const DEFAULT_FORM = {
  source_repo: '',
  destination_repo: '',
};

export default function Migrate() {
  const [form, setForm] = useState(DEFAULT_FORM);

  const { data, error, isLoading } = useQuery({
    queryKey: ['migration', form.source_repo, form.destination_repo],
    queryFn: () => base44.functions.invoke('migrate', form),
  });

  const handleChange = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Migrate</h1>
      <div className="mt-4">
        <label>Source Repo:</label>
        <Input value={form.source_repo} onValueChange={val => handleChange('source_repo', val)} placeholder="Enter source repo URL" />
        <label>Destination Repo:</label>
        <Input value={form.destination_repo} onValueChange={val => handleChange('destination_repo', val)} placeholder="Enter destination repo URL" />
        <Button onClick={handleSubmit}>Migrate</Button>
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <EnhancedMigrationReport generatedFiles={data.generatedFiles} />}
    </div>
  );
}

// AI Reviewer Fix [Unhandled API Errors]:
if (error) return <div>Error occurred: {error.message}</div>;