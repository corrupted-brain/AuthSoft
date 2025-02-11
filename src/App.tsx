import React, { useState, useMemo } from 'react';
import { Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { SoftwareTable } from './components/SoftwareTable';
import { softwareList } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredSoftware = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return softwareList.filter(
      (software) =>
        software.name.toLowerCase().includes(searchLower) ||
        software.type.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredSoftware.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSoftware = filteredSoftware.slice(startIndex, startIndex + itemsPerPage);

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
            onSearchChange={(value) => {
              setSearchTerm(value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>

        <SoftwareTable software={paginatedSoftware} />
        
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredSoftware.length)} of {filteredSoftware.length} applications
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <span className="text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;