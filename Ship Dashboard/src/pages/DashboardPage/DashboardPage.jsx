import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './DashboardPage.css';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.role}</h1>

      <div className="dashboard-buttons">
        <button onClick={() => navigate('/ships')}>Manage Ships</button>
        <button onClick={() => navigate('/components')}>Manage Components</button>
        <button onClick={() => navigate('/jobs')}>Manage Jobs</button>
        <button onClick={() => navigate('/calendar')}>Maintenance Calendar</button>

        {user?.role === 'Admin' && (
          <button onClick={() => navigate('/kpi-dashboard')}>View KPI Dashboard</button>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
