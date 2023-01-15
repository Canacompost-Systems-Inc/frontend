import React from 'react';
import {Routes, Route} from "react-router-dom";
import Advanced from "./screens/Advanced";
import Chambers from "./screens/Chambers";
import Dashboard from "./screens/Dashboard";
import Tasks from "./screens/Tasks";
import {ActuatorsProvider} from './contexts/actuatorsContext';
import {ThemeProvider} from './contexts/themeContext';
import {DashboardDisplayProvider} from './contexts/dashboardDisplayContext';
import {TaskQueueProvider} from './contexts/taskQueueContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App () {
  return (
    <ThemeProvider>
      <DashboardDisplayProvider>
        <TaskQueueProvider>
          <ActuatorsProvider>
            <div className="App">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="chambers" element={<Chambers />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="advanced" element={<Advanced />} />
              </Routes>
            </div>
          </ActuatorsProvider>
        </TaskQueueProvider>
      </DashboardDisplayProvider>
    </ThemeProvider>
  )
}

export default App;