import React from 'react';

const StatsGrid = ({ result }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="text-2xl font-bold text-indigo-600">
          {result.wordCount}
        </div>
        <div className="text-sm text-gray-600">Words</div>
      </div>
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="text-2xl font-bold text-purple-600">
          {result.characterCount}
        </div>
        <div className="text-sm text-gray-600">Characters</div>
      </div>
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="text-2xl font-bold text-blue-600">
          {result.allMatches?.length || 0}
        </div>
        <div className="text-sm text-gray-600">Sources Checked</div>
      </div>
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="text-2xl font-bold text-red-600">
          {result.matches?.length || 0}
        </div>
        <div className="text-sm text-gray-600">Matches Found</div>
      </div>
    </div>
  );
};

export default StatsGrid;
