import React, { createContext, useState, useEffect } from 'react';

// Create context
export const ShipsContext = createContext();

const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState([]);

  // Load from localStorage or mock initial data
  useEffect(() => {
    const stored = localStorage.getItem('ships');
    if (stored) {
      setShips(JSON.parse(stored));
    } else {
      // Default mock ships (optional)
      const mockShips = [
        { id: 's1', name: 'Ever Given', imo: '9811000', flag: 'Panama', status: 'Active' },
        { id: 's2', name: 'Maersk Alabama', imo: '9164263', flag: 'USA', status: 'Under Maintenance' }
      ];
      setShips(mockShips);
      localStorage.setItem('ships', JSON.stringify(mockShips));
    }
  }, []);

  // Persist changes
  useEffect(() => {
    localStorage.setItem('ships', JSON.stringify(ships));
  }, [ships]);

  const addShip = (newShip) => {
    const newEntry = { id: `s${Date.now()}`, ...newShip };
    setShips([...ships, newEntry]);
  };

  const updateShip = (updatedShip) => {
    setShips(ships.map(ship => ship.id === updatedShip.id ? updatedShip : ship));
  };

  const deleteShip = (id) => {
    setShips(ships.filter(ship => ship.id !== id));
  };

  return (
    <ShipsContext.Provider value={{ ships, addShip, updateShip, deleteShip }}>
      {children}
    </ShipsContext.Provider>
  );
};

export default ShipsProvider;
