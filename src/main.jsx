import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
    <SpeedInsights />
  </HashRouter>
);