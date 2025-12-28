import express from 'express';
import { body } from 'express-validator';
import { submitContactForm, getAllContacts } from '../controllers/contactController.js';

const router = express.Router();

// Validation middleware
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ max: 1000 })
    .withMessage('Message cannot exceed 1000 characters')
];

// Routes
router.post('/submit', contactValidation, submitContactForm);
router.get('/all', getAllContacts);

export default router;