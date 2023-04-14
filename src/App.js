import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <Router>
      <div className={`entry ${showSidebar ? "open" : ""}`}>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/transactions" Component={Transactions} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
