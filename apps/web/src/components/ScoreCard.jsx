import React from 'react';

const ScoreCard = ({ score, isPlagiarized }) => {
  const getScoreColor = () => {
    if (score < 20) return 'text-green-600';
    if (score < 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getBgColor = () => {
    if (score < 20) return 'bg-green-100';
    if (score < 40) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className={`${getBgColor()} rounded-2xl shadow-xl p-6 md:p-8`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Plagiarism Score
          </h2>
          <p className="text-gray-600">
            {isPlagiarized
              ? '⚠️ Potential plagiarism detected'
              : '✅ Content appears to be original'}
          </p>
        </div>
        <div className="text-center">
          <div className={`text-6xl font-bold ${getScoreColor()}`}>
            {score}%
          </div>
          <div className="text-sm text-gray-600 mt-2">Similarity</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
