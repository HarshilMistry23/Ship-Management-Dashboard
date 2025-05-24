import React, { useState, useContext } from 'react';
import { ShipsContext } from '../../contexts/ShipsContext';

const ShipForm = ({ existingShip = null, onSave }) => {
  const { addShip, updateShip } = useContext(ShipsContext);
  const [formData, setFormData] = useState(
    existingShip || { name: '', imo: '', flag: '', status: 'Active' }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    existingShip ? updateShip(formData) : addShip(formData);
    onSave?.();
  };

  return (
    <form className="ship-form" onSubmit={handleSubmit}>
      <h3>{existingShip ? 'Edit Ship' : 'Add Ship'}</h3>
      <input name="name" placeholder="Ship Name" value={formData.name} onChange={handleChange} required />
      <input name="imo" placeholder="IMO Number" value={formData.imo} onChange={handleChange} required />
      <input name="flag" placeholder="Flag" value={formData.flag} onChange={handleChange} required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Active</option>
        <option>Under Maintenance</option>
        <option>Inactive</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default ShipForm;
