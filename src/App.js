import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Login from "./components/pages/driver/Login";
import RegisterAmbulance from "./components/pages/driver/RegisterAmbulance";
import FindAmbulance from './components/pages/user/FindAmbulance';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAmbulance />} />
        <Route path="/findAmbulance" element={<FindAmbulance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
