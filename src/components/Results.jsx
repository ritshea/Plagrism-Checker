import React from 'react';
import ScoreCard from './ScoreCard';
import StatsGrid from './StatsGrid';
import MatchList from './MatchList';

const Results = ({ result }) => {
  return (
    <div className="space-y-6 animate-fade-in" id="results-section">
      <ScoreCard score={result.overallScore} isPlagiarized={result.isPlagiarized} />

      <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Analysis Details
          </h3>
          <span className="text-xs text-slate-500">
            {new Date(result.checkedAt).toLocaleTimeString()}
          </span>
        </div>

        <StatsGrid result={result} />

        {result.allMatches && result.allMatches.length > 0 && (
          <MatchList matches={result.allMatches} />
        )}
      </div>
    </div>
  );
};

export default Results;
