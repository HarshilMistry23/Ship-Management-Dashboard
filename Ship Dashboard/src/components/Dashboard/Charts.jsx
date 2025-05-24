import React, { useContext } from 'react';
import { JobsContext } from '../../contexts/JobsContext';
import { Pie } from 'react-chartjs-2';
import './Charts.css';

const Charts = () => {
  const { jobs } = useContext(JobsContext);

  const jobStatusCount = jobs.reduce(
    (acc, job) => {
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    },
    {}
  );

  const data = {
    labels: Object.keys(jobStatusCount),
    datasets: [
      {
        data: Object.values(jobStatusCount),
        backgroundColor: ['#36A2EB', '#FFCE56', '#4BC0C0', '#FF6384'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h4>Job Status Distribution</h4>
      <Pie data={data} />
    </div>
  );
};

export default Charts;
