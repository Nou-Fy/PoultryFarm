import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/navBar";
import Dashboard from "./pages/Dashbord";
import AjoutChicken from "./pages/AjoutChicken"

function App() {
  return (
    <div className="app">
      <NavBar />

      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/insert" element={<AjoutChicken />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
