import React, { useState } from 'react';
import { checkPlagiarism } from './services/plagiarismEngine';
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import Results from './components/Results';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCheck = async () => {
    if (!text.trim()) {
      setError('Please enter some text to check for plagiarism.');
      return;
    }

    if (text.trim().length < 20) {
      setError('Please enter at least 20 characters for accurate results.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    // Small delay for UX (shows the loading animation)
    await new Promise((resolve) => setTimeout(resolve, 800));

    try {
      const response = checkPlagiarism(text);
      setResult(response);
    } catch (err) {
      setError(err.message || 'Failed to check plagiarism. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText('');
    setResult(null);
    setError('');
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).filter((w) => w).length : 0;
  const charCount = text.length;

  return (
    <div className="min-h-screen bg-mesh particles flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-4xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-xs font-medium text-primary-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
            Powered by Advanced Text Analysis
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4 leading-tight">
            Check Your Content for{' '}
            <span className="text-gradient">Plagiarism</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Paste your text below and instantly detect similarities against our database.
            Fast, free, and works right in your browser.
          </p>
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-slide-up">
          {[
            { icon: '⚡', label: 'Instant Analysis' },
            { icon: '🔒', label: 'Privacy First' },
            { icon: '🆓', label: '100% Free' },
            { icon: '🌐', label: 'No Sign-up' },
          ].map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-light text-sm text-slate-300"
            >
              <span>{feature.icon}</span>
              {feature.label}
            </div>
          ))}
        </div>

        {/* Text Input */}
        <TextInput
          text={text}
          setText={setText}
          wordCount={wordCount}
          charCount={charCount}
          loading={loading}
          onCheck={handleCheck}
          onClear={handleClear}
        />

        {/* Error */}
        {error && <ErrorMessage message={error} />}

        {/* Results */}
        {result && <Results result={result} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
