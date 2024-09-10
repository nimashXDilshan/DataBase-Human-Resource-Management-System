import React, { useState } from 'react';
import './loginsignup.css';

function LogInSignUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Sign Up form submitted:', formData);
      // Add your signup logic here
    } else {
      console.log('Sign In form submitted:', formData);
      // Add your signin logic here
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-gradient-to-r from-cyan-600 to-teal-600 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {isSignUp && (
          <div>
            <label htmlFor="username" className="block text-white text-lg font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required={isSignUp}
              className="w-full p-3 bg-offwhite text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="block text-white text-lg font-medium mb-2">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-offwhite text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-white text-lg font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 bg-offwhite text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-cyan-900	 text-white font-bold rounded-lg shadow-md hover:bg-cyan-950 transition duration-300 ease-in-out"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <div className="mt-6 text-center">
        <button
          onClick={toggleForm}
          className="text-cyan-200 hover:text-cyan-100 font-semibold"
        >
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default LogInSignUp;