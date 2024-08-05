import React, { useState } from 'react';
import StaffSignUpPage from './StaffSignupPage/StaffSignupPage'; 
import AdminSignUpPage from './AdminSignupPage/AdminSignupPage'; 
import './SignupPage.css';

const SignUpPage = () => {
  const [view, setView] = useState('staff'); 

  const handleStaffClick = () => {
    setView('staff');
  };

  const handleAdminClick = () => {
    setView('admin');
  };

  return (
    <div className="signup-container">
      <div className="staff-admin-con">
        <button
          className={view === 'staff' ? 'active' : ''}
          onClick={handleStaffClick}
        >
          Staff
        </button>
        <button
          className={view === 'admin' ? 'active' : ''}
          onClick={handleAdminClick}
        >
          Admin
        </button>
      </div>
      {view === 'staff' && <StaffSignUpPage />}
      {view === 'admin' && <AdminSignUpPage />}
    </div>
  );
};

export default SignUpPage;