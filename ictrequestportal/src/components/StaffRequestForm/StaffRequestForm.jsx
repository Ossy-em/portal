import React from 'react';
import CompanyName from '../CompanyName/CompanyName';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Devices from '../Devices/Devices';
import './StaffRequestForm.css';


const StaffRequestForm = () => {
  return (
    <div>

      <div className="staff-request-form">
      <CompanyName />
      <Header />
      <Form />
      <Devices />
    </div>
    
    <div className='Login-page'>

    </div>
    </div>
    );
};

export default StaffRequestForm;
