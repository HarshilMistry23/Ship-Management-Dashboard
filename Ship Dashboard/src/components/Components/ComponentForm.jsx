import React, { useState, useContext } from 'react';
import { ComponentsContext } from '../../contexts/ComponentsContext';
import './ComponentForm.css';

const ComponentForm = ({ shipId, onClose }) => {
  const { addComponent } = useContext(ComponentsContext);
  const [formData, setFormData] = useState({
    name: '',
    serialNumber: '',
    installDate: '',
    lastMaintenanceDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComponent({ ...formData, shipId });
    onClose?.();
  };

  return (
    <form className="component-form" onSubmit={handleSubmit}>
      <h4>Add Component</h4>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="serialNumber" placeholder="Serial Number" onChange={handleChange} required />
      <input name="installDate" type="date" onChange={handleChange} required />
      <input name="lastMaintenanceDate" type="date" onChange={handleChange} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default ComponentForm;
