import React, { useContext } from 'react';
import { ComponentsContext } from '../../contexts/ComponentsContext';

const ComponentList = ({ shipId }) => {
  const { components } = useContext(ComponentsContext);

  const shipComponents = components.filter(c => c.shipId === shipId);

  return (
    <div className="component-list">
      <h4>Components for this Ship</h4>
      <ul>
        {shipComponents.map(component => (
          <li key={component.id}>
            <strong>{component.name}</strong> (S/N: {component.serialNumber})<br />
            Installed: {component.installDate} | Last Maintenance: {component.lastMaintenanceDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentList;
