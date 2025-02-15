import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AddProductForm from './components/AddProductForm';
import AdminRegistration from './components/AdminRegistration';
import UserRegistration from './components/UserRegistration'; // User Registration
import UserLogin from './components/UserLogin'; // User Login
import UserDashboard from './components/UserDashboard'; // User Dashboard
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/admin-register" element={<AdminRegistration />} />

        {/* User Routes */}
        <Route path="/user-register" element={<UserRegistration />} /> {/* User Registration */}
        <Route path="/user-login" element={<UserLogin />} /> {/* User Login */}
        <Route path="/user-dashboard" element={<UserDashboard />} /> {/* User Dashboard */}

        {/* Default route to redirect to Admin Login page */}
        <Route path="/" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
