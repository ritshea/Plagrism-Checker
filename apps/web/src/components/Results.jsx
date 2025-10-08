import React from 'react';
import ScoreCard from './ScoreCard';
import StatsGrid from './StatsGrid';
import MatchList from './MatchList';

const Results = ({ result }) => {
  return (
    <div className="space-y-6">
      <ScoreCard
        score={result.overallScore}
        isPlagiarized={result.isPlagiarized}
      />

      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Analysis Details
        </h3>

        <StatsGrid result={result} />

        {result.allMatches && result.allMatches.length > 0 && (
          <MatchList matches={result.allMatches} />
        )}
      </div>
    </div>
  );
};

export default Results;
