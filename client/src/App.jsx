// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Test from './components/Test';
import Exam from './pages/exam';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/test'   element = {<Test />} />
        <Route path='/exam'   element = {<Exam />} />
        <Route path='/home'   element = {<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
