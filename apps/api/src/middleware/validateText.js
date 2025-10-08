export const validateTextInput = (req, res, next) => {
  const { text, title, content } = req.body;

  // For plagiarism check endpoint
  if (req.path === '/check') {
    if (!text || typeof text !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Text is required and must be a string',
      });
    }

    if (text.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Text cannot be empty',
      });
    }

    if (text.length > 50000) {
      return res.status(400).json({
        success: false,
        message: 'Text exceeds maximum length of 50,000 characters',
      });
    }
  }

  // For add text endpoint
  if (req.path === '/add-text') {
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required',
      });
    }

    if (typeof title !== 'string' || typeof content !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Title and content must be strings',
      });
    }
  }

  next();
};
