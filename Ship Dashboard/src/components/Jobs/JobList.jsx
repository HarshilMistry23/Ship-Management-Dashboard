import React, { useContext } from 'react';
import { JobsContext } from '../../contexts/JobsContext';


const JobList = ({ shipId }) => {
  const { jobs, deleteJob } = useContext(JobsContext);

  const shipJobs = shipId ? jobs.filter(job => job.shipId === shipId) : jobs;

  return (
    <div className="job-list">
      <h4>Jobs {shipId && `for Ship ${shipId}`}</h4>
      <ul>
        {shipJobs.map(job => (
          <li key={job.id}>
            <strong>{job.type}</strong> | Priority: {job.priority} | Status: {job.status}<br />
            Scheduled: {job.scheduledDate}
            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
