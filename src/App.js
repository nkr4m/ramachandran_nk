import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Layout from './components/Layout';
import { Routes, Route, Navigate } from "react-router-dom";
import Projects from './components/projects/Projects';
import Connect from './components/connect/Connect';
import Timeline from './components/timeline/Timeline';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>


      

    </>
  );
}

export default App;
