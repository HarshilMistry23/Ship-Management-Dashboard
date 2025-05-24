import React, { useContext } from 'react';
import { ShipsContext } from '../../contexts/ShipsContext';


const ShipList = ({ onSelect }) => {
  const { ships } = useContext(ShipsContext);

  return (
    <div className="ship-list">
      <h3>All Ships</h3>
      <ul>
        {ships.map((ship) => (
          <li key={ship.id} onClick={() => onSelect(ship.id)}>
            <strong>{ship.name}</strong> — {ship.flag} — Status: {ship.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
