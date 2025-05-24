import React from 'react';
import { useParams } from 'react-router-dom';
import ShipDetail from '../../components/Ships/ShipDetail';
import './ShipDetailPage.css';

const ShipDetailPage = () => {
  const { shipId } = useParams();

  return (
    <div className="ship-detail-page">
      <ShipDetail shipId={shipId} />
      {/* You can add component list here too later */}
    </div>
  );
};

export default ShipDetailPage;
