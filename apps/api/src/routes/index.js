import express from 'express';
import plagiarismRoutes from './plagiarism.routes.js';

const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
  });
});

// Feature routes
router.use('/plagiarism', plagiarismRoutes);

export default router;
