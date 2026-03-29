import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="mb-6 glass rounded-xl p-4 border-l-4 border-red-500 animate-slide-up" role="alert" id="error-message">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center mt-0.5">
          <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-red-400 text-sm">Error</p>
          <p className="text-slate-300 text-sm mt-0.5">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
