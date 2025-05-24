import React, { createContext, useState, useEffect } from 'react';

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Load notifications from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('notifications')) || [];
    setNotifications(stored);
  }, []);

  // Save notifications to localStorage
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const addNotification = (text, type = 'info') => {
    const newNotif = {
      id: `n${Date.now()}`,
      text,
      type,
      timestamp: new Date().toISOString(),
      read: false,
    };
    setNotifications([newNotif, ...notifications]);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const clearAll = () => setNotifications([]);

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, markAsRead, clearAll }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
