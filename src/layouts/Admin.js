import React from "react";
// reactstrap components
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import AdminFooter from "../components/Footers/AdminFooter.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import { Container } from "reactstrap";

const Admin = (props) => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <AdminNavbar />
        {/* <Outlet /> */}
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
