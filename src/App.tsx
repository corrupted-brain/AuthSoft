import React, { useState, useMemo } from 'react';
import { Database } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { SoftwareTable } from './components/SoftwareTable';
import { softwareList } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSoftware = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return softwareList.filter(
      (software) =>
        software.name.toLowerCase().includes(searchLower) ||
        software.type.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Database className="h-12 w-12 text-blue-600 mx-auto" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
            Software Directory
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Search through our organization's approved software list
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>

        <SoftwareTable software={filteredSoftware} />
        
        <div className="mt-4 text-center text-sm text-gray-500">
          {filteredSoftware.length} software applications found
        </div>
      </div>
    </div>
  );
}

export default App;