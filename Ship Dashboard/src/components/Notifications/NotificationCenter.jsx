import React, { useContext } from 'react';
import { NotificationContext } from '../../contexts/NotificationContext';
import './NotificationCenter.css';

const NotificationCenter = () => {
  const { notifications, markAsRead, clearAll } = useContext(NotificationContext);

  return (
    <div className="notification-center">
      <h4>🔔 Notifications</h4>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <>
          <ul>
            {notifications.map(n => (
              <li key={n.id} className={n.read ? 'read' : 'unread'}>
                <p>{n.text}</p>
                <small>{new Date(n.timestamp).toLocaleString()}</small>
                {!n.read && <button onClick={() => markAsRead(n.id)}>Mark as Read</button>}
              </li>
            ))}
          </ul>
          <button className="clear-btn" onClick={clearAll}>Clear All</button>
        </>
      )}
    </div>
  );
};

export default NotificationCenter;
