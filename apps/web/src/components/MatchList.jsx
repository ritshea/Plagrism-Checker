import React from 'react';

const MatchList = ({ matches }) => {
  return (
    <div>
      <h4 className="font-semibold text-gray-800 mb-3">
        Source Comparisons
      </h4>
      <div className="space-y-3">
        {matches.map((match, index) => {
          const percentage = parseFloat(match.similarityPercentage);

          return (
            <div
              key={index}
              className={`p-4 rounded-xl border-2 ${
                match.matched
                  ? 'border-yellow-300 bg-yellow-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-semibold text-gray-800">
                  {match.title}
                </h5>
                <span
                  className={`text-lg font-bold ${
                    percentage > 30
                      ? 'text-red-600'
                      : percentage > 15
                      ? 'text-yellow-600'
                      : 'text-green-600'
                  }`}
                >
                  {match.similarityPercentage}%
                </span>
              </div>
              <p className="text-sm text-gray-600">{match.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchList;
