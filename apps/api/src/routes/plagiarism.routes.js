import express from 'express';
import * as plagiarismController from '../controllers/plagiarism.controller.js';
import { validateTextInput } from '../middleware/validateText.js';

const router = express.Router();

router.post(
  '/check',
  validateTextInput,
  plagiarismController.checkPlagiarism
);

router.post('/add-text', validateTextInput, plagiarismController.addText);

router.get('/sources', plagiarismController.getSources);

export default router;
