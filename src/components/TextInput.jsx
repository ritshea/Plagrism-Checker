import React from 'react';

const TextInput = ({ text, setText, wordCount, charCount, loading, onCheck, onClear }) => {
  return (
    <div className="glass rounded-2xl p-6 md:p-8 animate-slide-up hover-lift" id="text-input-section">
      <label htmlFor="plagiarism-text" className="block text-slate-200 font-semibold mb-3 text-lg font-display">
        Enter or Paste Your Text
      </label>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
        <textarea
          id="plagiarism-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here to check for plagiarism..."
          className="relative w-full h-64 p-4 bg-surface-900/60 border border-white/10 rounded-xl text-slate-200 placeholder-slate-500 resize-none transition-all duration-300 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30"
          disabled={loading}
        />
      </div>

      {/* Stats Bar */}
      <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-400">
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          <span className="font-medium text-slate-300">{wordCount}</span> words
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          <span className="font-medium text-slate-300">{charCount}</span> characters
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button
          onClick={onCheck}
          disabled={loading || !text.trim()}
          className="flex-1 relative group overflow-hidden bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold py-3.5 px-6 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 btn-press shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
          id="check-button"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center justify-center gap-2">
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Analyzing...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Check for Plagiarism
              </>
            )}
          </span>
        </button>

        <button
          onClick={onClear}
          disabled={loading || !text}
          className="sm:w-auto px-6 py-3.5 rounded-xl glass-light text-slate-300 font-semibold hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 btn-press"
          id="clear-button"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default TextInput;
