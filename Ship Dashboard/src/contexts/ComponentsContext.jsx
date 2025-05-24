import React, { createContext, useState, useEffect } from 'react';

export const ComponentsContext = createContext();

const ComponentsProvider = ({ children }) => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('components');
    if (stored) {
      setComponents(JSON.parse(stored));
    } else {
      const mock = [
        { id: 'c1', shipId: 's1', name: 'Main Engine', serialNumber: 'ME-1234', installDate: '2020-01-10', lastMaintenanceDate: '2024-03-12' },
        { id: 'c2', shipId: 's2', name: 'Radar', serialNumber: 'RAD-5678', installDate: '2021-07-18', lastMaintenanceDate: '2023-12-01' }
      ];
      setComponents(mock);
      localStorage.setItem('components', JSON.stringify(mock));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('components', JSON.stringify(components));
  }, [components]);

  const addComponent = (component) => {
    const newComponent = { id: `c${Date.now()}`, ...component };
    setComponents([...components, newComponent]);
  };

  const updateComponent = (updated) => {
    setComponents(components.map(c => c.id === updated.id ? updated : c));
  };

  const deleteComponent = (id) => {
    setComponents(components.filter(c => c.id !== id));
  };

  return (
    <ComponentsContext.Provider value={{ components, addComponent, updateComponent, deleteComponent }}>
      {children}
    </ComponentsContext.Provider>
  );
};

export default ComponentsProvider;
