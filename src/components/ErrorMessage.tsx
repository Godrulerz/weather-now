import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 max-w-md mx-auto">
      <div className="flex items-center justify-center mb-4">
        <AlertCircle className="text-red-500 w-8 h-8" />
      </div>
      <h3 className="text-red-800 font-semibold text-lg text-center mb-2">
        Oops! Something went wrong
      </h3>
      <p className="text-red-700 text-center mb-4">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 
                   focus:outline-none focus:ring-4 focus:ring-red-200
                   transition-all duration-200 font-medium"
        >
          Try Again
        </button>
      )}
    </div>
  );
}