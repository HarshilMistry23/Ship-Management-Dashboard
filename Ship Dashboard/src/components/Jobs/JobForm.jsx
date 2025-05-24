import React, { useState, useContext } from 'react';
import { JobsContext } from '../../contexts/JobsContext';


const JobForm = ({ shipId, componentId, onClose }) => {
  const { addJob } = useContext(JobsContext);

  const [formData, setFormData] = useState({
    type: '',
    priority: 'Medium',
    status: 'Open',
    scheduledDate: '',
    assignedEngineerId: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addJob({ ...formData, shipId, componentId });
    onClose?.();
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h4>Schedule Job</h4>
      <input name="type" placeholder="Job Type" required onChange={handleChange} />
      <select name="priority" onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input type="date" name="scheduledDate" required onChange={handleChange} />
      <input name="assignedEngineerId" placeholder="Engineer ID" onChange={handleChange} />
      <select name="status" onChange={handleChange}>
        <option>Open</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
