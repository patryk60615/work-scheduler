import React from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from './components/calendar/calendar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="user"></div>
    <Calendar />
    <div className="events"></div>
  </React.StrictMode>
);
