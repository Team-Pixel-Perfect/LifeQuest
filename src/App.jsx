import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import LifeQuest from "./pages/LifeQuest";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/life-quest" element={<LifeQuest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
