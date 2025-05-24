import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ShipsPage from './pages/ShipsPage/ShipsPage';
import ShipDetailPage from './pages/ShipDetailPage/ShipDetailPage';
import JobsPage from './pages/JobsPage/JobsPage';
import ComponentsPage from './components/Components/ComponentList';
import JobCalendar from './components/Jobs/JobCalendar';
import KPICards from './components/Dashboard/KPICards';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ShipsProvider from './contexts/ShipsContext';
import ComponentsProvider from './contexts/ComponentsContext';
import JobsProvider from './contexts/JobsContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
     <ShipsProvider>
      <ComponentsProvider>
        <JobsProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ships"
                element={
                  <ProtectedRoute>
                    <ShipsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ship/:id"
                element={
                  <ProtectedRoute>
                    <ShipDetailPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/components"
                element={
                  <ProtectedRoute>
                    <ComponentsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs"
                element={
                  <ProtectedRoute>
                    <JobsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/calendar"
                element={
                  <ProtectedRoute>
                    <JobCalendar />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/kpi-dashboard"
                element={
                  <ProtectedRoute>
                    <KPICards />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Router>
          </JobsProvider>
        </ComponentsProvider>
      </ShipsProvider>
    </AuthProvider>
  );
};

export default App;
