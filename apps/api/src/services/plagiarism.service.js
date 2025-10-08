import stringSimilarity from 'string-similarity';
import { existingTexts } from '../data/sampleTexts.js';

export const checkPlagiarism = async text => {
  if (!text || text.trim().length === 0) {
    throw new Error('Text is required');
  }

  const matches = existingTexts.map(source => {
    const similarity = stringSimilarity.compareTwoStrings(
      text.toLowerCase(),
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

  matches.sort((a, b) => b.similarityPercentage - a.similarityPercentage);

  const highestMatch = parseFloat(matches[0]?.similarityPercentage || 0);

  return {
    overallScore: highestMatch.toFixed(2),
    isPlagiarized: highestMatch > 30,
    matches: matches.filter(m => m.matched),
    allMatches: matches,
    wordCount: text.split(/\s+/).filter(word => word).length,
    characterCount: text.length,
    checkedAt: new Date().toISOString(),
  };
};

export const addText = async (title, content) => {
  if (!title || !content) {
    throw new Error('Title and content are required');
  }

  const newText = {
    id: existingTexts.length + 1,
    title,
    content,
    addedAt: new Date().toISOString(),
  };

  existingTexts.push(newText);
  return newText;
};

export const getAllSources = async () => {
  return existingTexts.map(source => ({
    id: source.id,
    title: source.title,
    wordCount: source.content.split(/\s+/).length,
  }));
};
