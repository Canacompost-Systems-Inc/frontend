import React from 'react';
import {Routes, Route} from "react-router-dom";
import Advanced from "./screens/Advanced";
import Chambers from "./screens/Chambers";
import Dashboard from "./screens/Dashboard";
import {ActuatorsProvider} from './contexts/actuatorsContext';
import {ThemeProvider} from './contexts/themeContext';
import {DashboardDisplayProvider} from './contexts/dashboardDisplayContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App () {
  return (
    <ThemeProvider>
      <DashboardDisplayProvider>
        <ActuatorsProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="chambers" element={<Chambers />} />
              <Route path="advanced" element={<Advanced />} />
            </Routes>
          </div>
        </ActuatorsProvider>
      </DashboardDisplayProvider>
    </ThemeProvider>
  )
}

export default App;