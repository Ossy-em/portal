import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Assuming login is successful
    navigate('/staff-request');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
    hover: { scale: 1.1, backgroundColor: "#4CAF50", transition: { yoyo: Infinity } }
  };

  return (
    <motion.div
      className="login-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <motion.input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.button 
          type="submit" 
          variants={buttonVariants} 
          initial="hidden" 
          animate="visible"
          whileHover="hover"
        >
          Login
        </motion.button>
      </form>
    </motion.div>
  );
};

export default LoginPage;
