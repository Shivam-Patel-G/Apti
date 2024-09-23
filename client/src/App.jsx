// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Test from './components/Test';
import Shivam from './pages/shivam';
import Exam from './pages/exam';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/test'   element = {<Test />} />
        <Route path='/exam'   element = {<Exam />} />

      </Routes>
    </Router>
  );
}

export default App;
