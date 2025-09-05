import React from 'react';

export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-teal-400 rounded-full animate-spin"></div>
      </div>
      <p className="mt-6 text-gray-600 font-medium">Fetching weather data...</p>
    </div>
  );
}