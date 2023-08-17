import './App.css'
import Dashboards from './Pages/Dashboards';
import Registration from './Pages/Registration';
import Invoice from './Pages/invoice';
import UserManagement from './Pages/userManagement';
import DashboardLayout from './layout/DashboardLayout'
// import { route } from './routes'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboards />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/registration-status" element={<Registration />} />
          </Route>
        </Routes>

      </Router>
    </>
  )
}

export default App
