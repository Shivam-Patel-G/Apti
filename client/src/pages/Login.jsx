import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/test'); // Redirect to home or another page after login
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin} className="w-full max-w-sm">
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
          <div className="mb-6">
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
          <div className="flex justify-between items-center mb-6">
            <Link to="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </Link>
            <Link to="/signup" className="text-blue-500 text-sm hover:underline">
              Create Account
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-300 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-amber-200"
          >
            Login
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

export default Login;
