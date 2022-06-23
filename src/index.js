// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// import "./assets/plugins/nucleo/css/nucleo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./assets/scss/argon-dashboard-react.scss";

// import AdminLayout from "./layouts/Admin.js";
// import AuthLayout from "./layouts/Auth.js";

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//       <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
//       <Navigate from="/" to="/admin/index" />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequireAuth from './components/Auth/RequireAuth'
import Login from './components/Auth/Login';
import Admin from './layouts/Admin';

const ROLES = [
  'Admin',
  'User'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          {/* <Route path='/profile' element={<User />} /> */}
          <Route path='/' element={<Admin />}>
            {/* Public Routes */}
            {/* Protected Routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>

            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>

            </Route>
            {/* Catch all */}
            {/* <Route path='*' element={} /> */}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);