import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/navBar";
import AjoutChicken from "./pages/AjoutChicken"
import Dashboard from "./pages/Dashbord";

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
