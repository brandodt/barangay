import "./App.css";
import "bulma/css/bulma.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Admin from "./pages/admin";
import Dashboard from "./components/admin/Dashboard";
import Hotlines from "./components/admin/Hotlines";
import Announcements from "./components/admin/Announcements";
import ResidentsInformation from "./components/admin/ResidentsInformation";
import Appointments from "./components/admin/Appointments";
import Reports from "./components/admin/Reports";
import Settings from "./components/admin/Settings";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Announcements />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="hotlines" element={<Hotlines />} />
          <Route
            path="residents-information"
            element={<ResidentsInformation />}
          />
          <Route
            path="appointments"
            element={<Appointments />}
          />
          <Route path="incident-reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
