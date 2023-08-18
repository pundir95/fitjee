import './App.css'
import Login from './Pages/Auth/Login';
import VerificationCode from './Pages/Auth/VerificationCode';
import Dashboards from './Pages/Dashboards';
import Registration from './Pages/Registration';
import Invoice from './Pages/invoice';
import UserManagement from './Pages/userManagement';
import { Toaster } from './components/Toaster';
import DashboardLayout from './layout/DashboardLayout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { route } from './routes'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import PublicRoute from './layout/PublicRoute';

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboards />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/registration-status" element={<Registration />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/admin-login" element={<Login />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
