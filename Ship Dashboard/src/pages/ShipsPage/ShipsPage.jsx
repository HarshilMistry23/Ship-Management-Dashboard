import React, { useState } from 'react';
import ShipList from '../../components/Ships/ShipList';
import ShipDetail from '../../components/Ships/ShipDetail';
import ShipForm from '../../components/Ships/ShipForm';
import './ShipsPage.css';

const ShipsPage = () => {
  const [selectedShipId, setSelectedShipId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="ships-page">
      <div className="ships-list-section">
        <ShipList onSelect={setSelectedShipId} />
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add New Ship'}
        </button>
        {showForm && <ShipForm onSave={() => setShowForm(false)} />}
      </div>

      <div className="ships-detail-section">
        {selectedShipId && <ShipDetail shipId={selectedShipId} />}
      </div>
    </div>
  );
};

export default ShipsPage;
