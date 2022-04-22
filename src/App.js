import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Login from "./components/pages/driver/Login";
import RegisterAmbulance from "./components/pages/driver/RegisterAmbulance";
import FindAmbulance from "./components/pages/user/FindAmbulance";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterAmbulance />} />
        <Route path="/findAmbulance" element={<FindAmbulance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
