import React, { useContext } from 'react';
import { ShipsContext } from '../../contexts/ShipsContext';

const ShipDetail = ({ shipId }) => {
  const { ships } = useContext(ShipsContext);
  const ship = ships.find((s) => s.id === shipId);

  if (!ship) return <p>Ship not found.</p>;

  return (
    <div className="ship-detail">
      <h3>{ship.name} Details</h3>
      <p><strong>IMO:</strong> {ship.imo}</p>
      <p><strong>Flag:</strong> {ship.flag}</p>
      <p><strong>Status:</strong> {ship.status}</p>
    </div>
  );
};

export default ShipDetail;
