// import React from "react";
// import ReactDOM from "react-dom";
<<<<<<< Updated upstream
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
=======
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
>>>>>>> Stashed changes

// import "./assets/plugins/nucleo/css/nucleo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./assets/scss/argon-dashboard-react.scss";

// import AdminLayout from "./layouts/Admin.js";
// import AuthLayout from "./layouts/Auth.js";

// ReactDOM.render(
//   <BrowserRouter>
<<<<<<< Updated upstream
//     <Routes>
//       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//       <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
//       <Navigate from="/" to="/admin/index" />
//     </Routes>
=======
//     <Switch>
//       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//       <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
//       <Redirect from="/" to="/admin/index" />
//     </Switch>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
import Admin from './layouts/Admin';

const ROLES = [
  'Admin',
  'User'
]
=======

>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          {/* <Route path='/profile' element={<User />} /> */}
<<<<<<< Updated upstream
          <Route path='/' element={<Admin />}>
=======
          <Route path='/' element={<AdminLayout />}>
>>>>>>> Stashed changes
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