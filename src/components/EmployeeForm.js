import React, { useState } from 'react';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', { name, designation, location, salary });
  
    alert('Employee added successfully!');
};



  return (
    <div>
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Designation:
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Salary:
          <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
