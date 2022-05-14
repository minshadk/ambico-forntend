import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Login from "./components/pages/driver/Login";
import RegisterAmbulance from "./components/pages/driver/RegisterAmbulance";
import AmbulanceRequest from "./components/pages/user/AmbulanceRequest";
import Home from "./components/pages/Home";
import AmbulanceResult from "./components/pages/user/AmbulanceResult";
import Register from "./components/pages/user/Register";
import RegisterHospital from "./components/pages/Hospital/RegisterHospital";
import HospitalRequest from "./components/pages/Hospital/HospitalRequest";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route index  element={<Home />} />
        <Route path="/registerAmbulance" element={<RegisterAmbulance />} />
        <Route path="/ambulanceRequest" element={<AmbulanceRequest />} />
        <Route path="/registerHospital" element={<RegisterHospital />} />
        <Route path="/hospitalRequest" element={<HospitalRequest />} />
        <Route
          path="/ambulanceResult/:requestId"
          element={<AmbulanceResult />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
