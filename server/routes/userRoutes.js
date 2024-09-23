const express = require('express');
const router = express.Router();
const {handleRegister,handleLogin} = require('../controllers/userController');
const { getQuestionsWithAnswers } = require('../controllers/quizController');

// Register route
router.post('/register', handleRegister);

// Login route
router.post('/login', handleLogin);

router.get('/questions', getQuestionsWithAnswers);

module.exports = router;
