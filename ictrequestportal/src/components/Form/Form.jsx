import React from 'react';
import './Form.css';

const Form = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear + i);

  return (
    <form className="request-form">
      <div className="form-group form-group-horizontal">
        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" required />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" required />
        </div>
      </div>

      <div className="form-group form-group-horizontal">
        <div className="form-field">
          <label htmlFor="department">Department</label>
          <input type="text" id="department" name="department" placeholder="Enter Department" required />
        </div>
        <div className="form-field">
          <label htmlFor="manager">Manager</label>
          <input type="text" id="manager" name="manager" placeholder="Enter Manager Name" required />
        </div>
      </div>

      <div className="form-group form-group-horizontal">
        <div className="form-field">
          <label htmlFor="employeeFloor">Employee Floor</label>
          <input type="text" id="employeeFloor" name="employeeFloor" placeholder="Enter Employee Floor" required />
        </div>
        <div className="form-field">
          <label htmlFor="unit">Unit</label>
          <input type="text" id="unit" name="unit" placeholder="Enter Unit" required />
        </div>
      </div>

      <div className="form-group form-group-horizontal">
        <div className="form-field">
          <label htmlFor="day">Day</label>
          <select id="day" name="day" required>
            <option value="" disabled selected>Select Day</option>
            {days.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="month">Month</label>
          <select id="month" name="month" required>
            <option value="" disabled selected>Select Month</option>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="year">Year</label>
          <select id="year" name="year" required>
            <option value="" disabled selected>Select Year</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit">Submit Request</button>
    </form>
  );
};

export default Form;
