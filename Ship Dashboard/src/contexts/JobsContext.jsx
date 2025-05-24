import React, { createContext, useState, useEffect } from 'react';

export const JobsContext = createContext();

const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('jobs');
    if (stored) {
      setJobs(JSON.parse(stored));
    } else {
      const mock = [
        {
          id: 'j1',
          componentId: 'c1',
          shipId: 's1',
          type: 'Inspection',
          priority: 'High',
          status: 'Open',
          assignedEngineerId: '3',
          scheduledDate: '2025-05-05'
        }
      ];
      setJobs(mock);
      localStorage.setItem('jobs', JSON.stringify(mock));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    const newJob = { id: `j${Date.now()}`, ...job };
    setJobs([...jobs, newJob]);
  };

  const updateJob = (updated) => {
    setJobs(jobs.map(job => job.id === updated.id ? updated : job));
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob, updateJob, deleteJob }}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;
