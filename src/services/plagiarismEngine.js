import stringSimilarity from 'string-similarity';
import { sampleTexts } from '../data/sampleTexts';

/**
 * Client-side plagiarism detection engine.
 * Uses Dice coefficient (string-similarity) to compare input text
 * against a corpus of known sample texts.
 */
export function checkPlagiarism(text) {
  if (!text || text.trim().length === 0) {
    throw new Error('Text is required');
  }

  const normalizedInput = text.toLowerCase().trim();

  const matches = sampleTexts.map((source) => {
    const similarity = stringSimilarity.compareTwoStrings(
      normalizedInput,
      source.content.toLowerCase()
    );

    const percentage = (similarity * 100).toFixed(2);

    return {
      id: source.id,
      title: source.title,
      similarityPercentage: percentage,
      matched: similarity > 0.15,
      content: source.content.substring(0, 150) + '...',
    };
  });

  // Sort by highest similarity first
  matches.sort((a, b) => b.similarityPercentage - a.similarityPercentage);

  const highestMatch = parseFloat(matches[0]?.similarityPercentage || 0);

  return {
    overallScore: highestMatch.toFixed(2),
    isPlagiarized: highestMatch > 30,
    matches: matches.filter((m) => m.matched),
    allMatches: matches,
    wordCount: text.split(/\s+/).filter((word) => word).length,
    characterCount: text.length,
    sentenceCount: text.split(/[.!?]+/).filter((s) => s.trim()).length,
    checkedAt: new Date().toISOString(),
  };
}

/**
 * Format a number with locale separators (1,234)
 */
export function formatNumber(num) {
  return new Intl.NumberFormat().format(num);
}

/**
 * Format a percentage value
 */
export function formatPercentage(num, decimals = 2) {
  return `${parseFloat(num).toFixed(decimals)}%`;
}

/**
 * Format a date string to human-readable format
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
