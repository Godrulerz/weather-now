import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name..."
          className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-2xl 
                   focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:outline-none
                   transition-all duration-200 shadow-sm hover:shadow-md
                   disabled:bg-gray-100 disabled:cursor-not-allowed"
          disabled={isLoading}
        />
        <Search 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" 
        />
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 
                   bg-blue-600 text-white px-6 py-2 rounded-xl
                   hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200
                   disabled:bg-gray-400 disabled:cursor-not-allowed
                   transition-all duration-200 font-medium"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}