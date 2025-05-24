import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Usually in src/index.js or src/main.jsx
import { Chart, ArcElement, BarElement, LineElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register the elements you need
Chart.register(ArcElement, BarElement, LineElement, CategoryScale, LinearScale, Tooltip, Legend);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
