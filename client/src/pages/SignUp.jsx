import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/register', { name, email, password });
      console.log(response)
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      alert('Registration failed');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - SignUp Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="relative top-3 left-2 bg-white inline p-2 block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="relative top-3 left-2 bg-white inline p-2 block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="relative top-3 left-2 bg-white inline p-2 block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label className="relative top-3 left-2 bg-white inline p-2 block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mr-2"
              />
              <span className="text-gray-700 text-sm">I accept the terms and conditions</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-300 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-amber-200"
          >
            Register
          </button>
        </form>
      </div>
      {/* Right Side - Image Placeholder */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <div className="bg-[url('/src/assets/login.png')] bg-cover bg-no-repeat w-3/4 h-3/4 bg-gray-300 flex justify-center items-center text-gray-500 text-lg">
        </div>
      </div>
    </div>
  );
};

export default SignUp;
