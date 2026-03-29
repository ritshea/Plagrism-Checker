import React from 'react';

const MatchList = ({ matches }) => {
  const getSeverityStyles = (percentage) => {
    const p = parseFloat(percentage);
    if (p > 30) return { border: 'border-red-500/30', bg: 'bg-red-500/5', badge: 'bg-red-500/20 text-red-400', bar: 'bg-red-500' };
    if (p > 15) return { border: 'border-amber-500/30', bg: 'bg-amber-500/5', badge: 'bg-amber-500/20 text-amber-400', bar: 'bg-amber-500' };
    return { border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', badge: 'bg-emerald-500/20 text-emerald-400', bar: 'bg-emerald-500' };
  };

  return (
    <div id="match-list">
      <h4 className="font-semibold text-white font-display mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Source Comparisons
      </h4>

      <div className="space-y-3">
        {matches.map((match, index) => {
          const percentage = parseFloat(match.similarityPercentage);
          const styles = getSeverityStyles(match.similarityPercentage);

          return (
            <div
              key={match.id || index}
              className={`rounded-xl border ${styles.border} ${styles.bg} p-4 transition-all duration-300 hover:border-opacity-60 animate-slide-up`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-mono">#{index + 1}</span>
                  <h5 className="font-semibold text-slate-200 text-sm">
                    {match.title}
                  </h5>
                </div>
                <span className={`text-sm font-bold px-2.5 py-1 rounded-lg ${styles.badge}`}>
                  {match.similarityPercentage}%
                </span>
              </div>

              {/* Similarity bar */}
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
                <div
                  className={`h-full ${styles.bar} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                {match.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchList;
