import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './loginpage/LoginPage';
import StaffRequestForm from './components/StaffRequestForm/StaffRequestForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/staff-request" element={<StaffRequestForm />} />
      </Routes>
    </Router>
  );
};

export default App;
