import React, { useEffect, useState } from 'react';

const ScoreCard = ({ score, isPlagiarized }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const numericScore = parseFloat(score);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = numericScore / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericScore) {
        setAnimatedScore(numericScore);
        clearInterval(timer);
      } else {
        setAnimatedScore(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [numericScore]);

  const getScoreColor = () => {
    if (numericScore < 20) return { text: 'text-emerald-400', ring: '#34d399', glow: 'glow-success' };
    if (numericScore < 40) return { text: 'text-amber-400', ring: '#fbbf24', glow: 'glow-warning' };
    return { text: 'text-red-400', ring: '#f87171', glow: 'glow-danger' };
  };

  const getLabel = () => {
    if (numericScore < 20) return 'Original Content';
    if (numericScore < 40) return 'Some Similarities Found';
    return 'Plagiarism Detected';
  };

  const getIcon = () => {
    if (numericScore < 20) {
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    if (numericScore < 40) {
      return (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      );
    }
    return (
      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  const colors = getScoreColor();

  // SVG ring
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className={`glass rounded-2xl p-6 md:p-8 animate-scale-in ${colors.glow}`} id="score-card">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Info */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
            {getIcon()}
            <h2 className="text-2xl font-bold font-display text-white">
              Plagiarism Score
            </h2>
          </div>
          <p className={`text-lg font-medium ${colors.text}`}>
            {getLabel()}
          </p>
          <p className="text-slate-400 text-sm mt-2 max-w-sm">
            {numericScore < 20
              ? 'Your content appears to be original. Great work!'
              : numericScore < 40
              ? 'Some parts of your text match existing sources. Consider rephrasing.'
              : 'Significant similarity detected with existing sources. Please review and rewrite.'}
          </p>
        </div>

        {/* Right - Circular Score */}
        <div className="relative w-36 h-36 shrink-0">
          <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 120 120">
            {/* Background ring */}
            <circle
              cx="60" cy="60" r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="8"
            />
            {/* Score ring */}
            <circle
              cx="60" cy="60" r={radius}
              fill="none"
              stroke={colors.ring}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="score-ring"
              style={{ filter: `drop-shadow(0 0 6px ${colors.ring}66)` }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold font-display ${colors.text}`}>
              {animatedScore.toFixed(1)}%
            </span>
            <span className="text-xs text-slate-500 mt-0.5">similarity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
