import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div>
      <form className="request-form">
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label> 
        <input type="text" id="lastName" name="lastName" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="department">Division/Unit/Department</label>
        <input type="text" id="department" name="department" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="manager">Director Head</label>
        <input type="text" id="manager" name="manager" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="employeeFloor">Employee Floor</label>
        <input type="text" id="employeeFloor" name="employeeFloor" required />
      </div>

      <div className="form-group">
        <label htmlFor="desiredDate">Purpose</label>
        <input type="text" id="desiredDate" name="desiredDate" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="desiredDate">Desired Date</label>
        <input type="date" id="desiredDate" name="desiredDate" required />
      </div>

      
      <button type="submit">Submit Request</button>

      </form>
    </div>
  )
}

export default Form
