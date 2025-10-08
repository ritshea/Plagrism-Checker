import * as plagiarismService from '../services/plagiarism.service.js';

export const checkPlagiarism = async (req, res, next) => {
  try {
    const { text } = req.body;
    const result = await plagiarismService.checkPlagiarism(text);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const addText = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const newText = await plagiarismService.addText(title, content);

    res.status(201).json({
      success: true,
      message: 'Text added successfully',
      data: newText,
    });
  } catch (error) {
    next(error);
  }
};

export const getSources = async (req, res, next) => {
  try {
    const sources = await plagiarismService.getAllSources();

    res.json({
      success: true,
      data: sources,
    });
  } catch (error) {
    next(error);
  }
};
