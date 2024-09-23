import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

const Test = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState({});
    const [submittedAnswers, setSubmittedAnswers] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Fetch questions from the backend
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:4500/api/questions');
                setQuestions(response.data);
                setSelectedQuestion(response.data[0]); // Show the first question by default
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    }, []);

    const handleQuestionClick = (question) => {
        setSelectedQuestion(question);
    };

    const handleAnswerChange = (event) => {
        setSelectedAnswer({
            ...selectedAnswer,
            [selectedQuestion.id]: event.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:4500/api/submit-answers', {
                userId: 1, // Replace with actual user ID if needed
                answers: selectedAnswer
            });
            setSubmittedAnswers(Object.entries(selectedAnswer).map(([questionId, answerId]) => ({
                questionId,
                answerId,
            })));
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    };
    

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-blue-300">
            <div className="flex flex-row w-[90vw] h-[90vh]">
                <div className="flex-shrink-0 w-1/4 p-4 bg-blue-200 flex flex-col justify-around">
                    <div className="grid grid-cols-4 gap-2">
                        {questions.map((question, index) => (
                            <button
                                key={question.id}
                                className="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400 m-2"
                                onClick={() => handleQuestionClick(question)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <Drawer>
                        <DrawerTrigger className="border-2 border-red-800 bg-red-500 hover:bg-red-700 font-bold text-white transition text-black-500 rounded-xl border p-2">
                            FINAL SUBMIT
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <Button className="bg-red-500 hover:bg-red-700" onClick={handleSubmit}>Submit</Button>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>

                <div className="h-full bg-white w-3/4">
                    <div className="flex flex-col h-[90vh]">
                        <div className="flex-1 p-4">
                            {selectedQuestion ? (
                                <>
                                    <div className="question-number text-3xl font-bold mt-8 mb-8">
                                        Question {questions.indexOf(selectedQuestion) + 1}
                                    </div>
                                    <p className="question-text mb-4 text-2xl">
                                        {selectedQuestion.question_text}
                                    </p>
                                    <RadioGroup 
                                        value={selectedAnswer[selectedQuestion.id] || ''}
                                        onValueChange={handleAnswerChange}
                                        className="text-2xl"
                                    >
                                        {selectedQuestion.answers.map((answer, index) => (
                                            <div key={answer.id} className="flex items-center space-x-2">
                                                <RadioGroupItem 
                                                    value={answer.id} 
                                                    id={`answer-${answer.id}`} 
                                                />
                                                <Label htmlFor={`answer-${answer.id}`} className="text-xl">
                                                    {String.fromCharCode(65 + index)}. {answer.answer_text}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </>
                            ) : (
                                <p className="text-2xl">Loading question...</p>
                            )}
                        </div>

                        <div className="flex justify-center items-center p-4 bg-blue-800">
                            <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Mark for Review</button>
                            <button className="mr-2 ml-2 bg-green-500 text-white px-4 py-2 rounded-md">Submit & Next</button>
                            <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Display submitted answers */}
            {isSubmitted && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Your Answers</h2>
                        <ul>
                            {submittedAnswers.map(({ questionId, answerId }) => (
                                <li key={questionId} className="mb-2">
                                    <span className="font-bold">Question {questionId}: </span>
                                    Answer {answerId}
                                </li>
                            ))}
                        </ul>
                        <Button onClick={() => setIsSubmitted(false)}>Close</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Test;
