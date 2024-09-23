const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const db = require('./config/db'); // Import your MySQL connection
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4500;

// Import routes
app.use('/api', userRoutes);

// CSV to JSON and Insert into Database
const uploadCsvAndStoreInDatabase = (csvFilePath) => {
  const questionsMap = new Map();

  // Read and parse CSV file
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      const questionText = row['question'];
      // Split the options by comma
      const options = row['option'].split(',').map(option => option.trim());

      if (!questionsMap.has(questionText)) {
        questionsMap.set(questionText, options);
      }
    })
    .on('end', async () => {
      console.log('CSV file successfully processed');

      // Insert Questions and Answers into the Database
      try {
        for (let [questionText, options] of questionsMap.entries()) {
          // Insert into 'questions' table
          const [result] = await db.query('INSERT INTO questions (question_text) VALUES (?)', [questionText]);
          const questionId = result.insertId;

          // Insert into 'answers' table
          for (let optionText of options) {
            await db.query('INSERT INTO answers (question_id, answer_text) VALUES (?, ?)', [questionId, optionText]);
          }
        }
        console.log('Questions and Answers have been inserted into the database.');
      } catch (error) {
        console.error('Error inserting data into database:', error);
      }
    });
};

// Endpoint to trigger CSV upload and store process
app.post('/upload-csv', (req, res) => {
  const csvFilePath = path.join(__dirname, 'data', 'questions.csv'); // Assuming you have a 'data' folder in the root directory
  uploadCsvAndStoreInDatabase(csvFilePath);
  res.json({ message: 'CSV processing and database insert initiated.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
