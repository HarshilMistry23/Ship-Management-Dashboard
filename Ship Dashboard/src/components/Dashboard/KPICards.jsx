import React, { useContext } from 'react';
import { ShipsContext } from '../../contexts/ShipsContext';
import { ComponentsContext } from '../../contexts/ComponentsContext';
import { JobsContext } from '../../contexts/JobsContext';
import './KPICards.css';

const KPICards = () => {
  const { ships } = useContext(ShipsContext);
  const { components } = useContext(ComponentsContext);
  const { jobs } = useContext(JobsContext);

  const today = new Date();

  const overdueComponents = components.filter(component => {
    const lastMaintenanceDate = new Date(component.lastMaintenanceDate);
    return lastMaintenanceDate < today;
  });

  const jobsInProgress = jobs.filter(job => job.status === 'In Progress');
  const jobsCompleted = jobs.filter(job => job.status === 'Completed');

  return (
    <div className="kpi-cards-container">
      <div className="kpi-card">
        <h4>Total Ships</h4>
        <p>{ships.length}</p>
      </div>
      <div className="kpi-card">
        <h4>Overdue Maintenance</h4>
        <p>{overdueComponents.length}</p>
      </div>
      <div className="kpi-card">
        <h4>Jobs In Progress</h4>
        <p>{jobsInProgress.length}</p>
      </div>
      <div className="kpi-card">
        <h4>Jobs Completed</h4>
        <p>{jobsCompleted.length}</p>
      </div>
    </div>
  );
};

export default KPICards;
