const db = require('../config/db');

// Fetch questions with their answers
const getQuestionsWithAnswers = async (req, res) => {
  try {
    const [questions] = await db.query('SELECT * FROM questions');
    
    const questionAnswerPromises = questions.map(async (question) => {
      const [answers] = await db.query('SELECT * FROM answers WHERE question_id = ?', [question.id]);
      return { ...question, answers };
    });
    
    const questionsWithAnswers = await Promise.all(questionAnswerPromises);
    res.json(questionsWithAnswers);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Route to handle submitting answers
router.post('/submit-answers', async (req, res) => {
    const userId = req.body.userId || null; // Assuming user ID is optional
    const answers = req.body.answers; // Expected format: { questionId: answerId, ... }

    // Validate input
    if (!answers || typeof answers !== 'object') {
        return res.status(400).json({ message: 'Invalid input' });
    }

    // Insert answers into the database
    try {
        const results = [];
        for (const [questionId, answerId] of Object.entries(answers)) {
            const [result] = await db.query('INSERT INTO results (user_id, question_id, answer_id) VALUES (?, ?, ?)', [userId, questionId, answerId]);
            results.push({
                id: result.insertId,
                userId,
                questionId,
                answerId
            });
        }
        res.status(200).json({ message: 'Answers submitted successfully.', results });
    } catch (error) {
        console.error('Error inserting answers into database:', error);
        res.status(500).json({ message: 'Error submitting answers' });
    }
});

module.exports = { getQuestionsWithAnswers };
