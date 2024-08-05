// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './loginpage/LoginPage';
import SignUpPage from './signupPage/SignupPage.jsx';
import StaffRequestPage from './components/StaffRequestForm/StaffRequestForm';
import AdminDashboard from './adminpage/Dashboard/Dashboard.jsx';
import PrivateRoute from './utils/Privaterouter.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/staff-request"
          element={
            <PrivateRoute>
              <StaffRequestPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;