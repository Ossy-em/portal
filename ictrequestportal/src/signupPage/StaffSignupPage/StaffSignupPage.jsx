import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/Firebase'; 
import "../Admin&StaffSignupPage.css"; 

const StaffSignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Sign up successful');
      navigate('/staff-request');
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
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
      className="signup-admin-staff"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <form className='signupForm' onSubmit={handleSubmit}>
        <motion.input
          className='signup-adminStaff'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete='email'
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.input 
          className='signup-adminStaff'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete='current'
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        {error && <p className="error-message">{error}</p>}
        <motion.button 
          className="input-signup"
          type="submit" 
          variants={buttonVariants} 
          initial="hidden" 
          animate="visible"
          whileHover="hover"
        >
          Sign Up
        </motion.button>
      </form>
    </motion.div>
  );
};

export default StaffSignUpPage;