import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exam = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    // Fetch questions and answers from the backend
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:4500/api/questions');
        setQuestions(response.data);
        setSelectedQuestion(response.data[0]); // Show first question by default
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <div className="flex flex-row w-full h-screen">
      {/* Sidebar with question numbers */}
      <div className="w-1/4 bg-red-500">
        <div className="grid grid-cols-3 gap-2">
          {questions.map((question, index) => (
            <button
              key={question.id}
              className="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400"
              onClick={() => handleQuestionClick(question)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main area with selected question and answers */}
      <div className="w-3/4 bg-blue-500">
        {selectedQuestion && (
          <div className="h-full bg-blue-500 w-3/4">
            <div className="flex flex-col h-screen">
              <div className="flex-1 p-4">
                <div className="question-number text-3xl font-bold mt-8 mb-8">
                  Question {questions.indexOf(selectedQuestion) + 1}
                </div>
                <p className="question-text mb-4 text-2xl">{selectedQuestion.question_text}</p>
                
                {/* Display the answer options */}
                {selectedQuestion.answers.map((answer, index) => (
                  <div key={answer.id} className="flex items-center space-x-2 text-2xl">
                    <input type="radio" name="answer" id={`answer-${answer.id}`} value={answer.id} />
                    <label htmlFor={`answer-${answer.id}`} className="text-xl">
                      {String.fromCharCode(65 + index)}. {answer.answer_text}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center p-4 bg-gray-200">
                <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Mark for Review</button>
                <button className="mr-2 ml-2 bg-green-500 text-white px-4 py-2 rounded-md">Submit & Next</button>
                <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exam;
