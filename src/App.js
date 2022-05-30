import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

import { useContext } from "react";
import { RoleContext } from './../context/role.context';

function App() {
  const { role } = useContext(RoleContext);

  return (
    <div className="App">
      <Navbar />
      {role === "admin" ? <AdminPanel /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
