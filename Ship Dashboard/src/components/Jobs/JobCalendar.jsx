import React, { useContext } from 'react';
import { JobsContext } from '../../contexts/JobsContext';


const JobCalendar = () => {
  const { jobs } = useContext(JobsContext);

  const sorted = [...jobs].sort((a, b) =>
    new Date(a.scheduledDate) - new Date(b.scheduledDate)
  );

  return (
    <div className="job-calendar">
      <h4>Upcoming Jobs</h4>
      <ul>
        {sorted.map(job => (
          <li key={job.id}>
            <strong>{job.scheduledDate}</strong> - {job.type} (Priority: {job.priority})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobCalendar;
