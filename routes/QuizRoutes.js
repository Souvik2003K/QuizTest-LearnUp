const express = require('express');
const QuizController = require('../controllers/QuizController');
const router = express.Router();


router.post('/add', QuizController.addQuiz);

router.get('/show', QuizController.showQuiz);

module.exports = router;