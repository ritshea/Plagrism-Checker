import React, { useState } from 'react';
import { checkPlagiarism } from './services/api';
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import Results from './components/Results';
import ErrorMessage from './components/ErrorMessage';
import { formatNumber } from './utils/formatters';

function App() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCheck = async () => {
    if (!text.trim()) {
      setError('Please enter text to check');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await checkPlagiarism(text);
      setResult(response);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Failed to check plagiarism. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText('');
    setResult(null);
    setError('');
  };

  const wordCount = text.trim().split(/\s+/).filter(w => w).length;
  const charCount = text.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Check Your Content for Plagiarism
          </h2>
          <p className="text-gray-600 text-lg">
            Detect copied content instantly with our advanced plagiarism
            detection tool
          </p>
        </div>

        <TextInput
          text={text}
          setText={setText}
          wordCount={wordCount}
          charCount={charCount}
          loading={loading}
          onCheck={handleCheck}
          onClear={handleClear}
        />

        {error && <ErrorMessage message={error} />}

        {result && <Results result={result} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
