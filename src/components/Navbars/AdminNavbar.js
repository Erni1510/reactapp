import React, {useState, useEffect, useDispatch, useNavigate, LoadingSpinner} from 'react';
import { Link, useHistory } from "react-router-dom";
import {saveToLocal, getFromLocal, removeFromLocal, clearFromLocal} from '../../services/Storage'

// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";


const AdminNavbar = (props) => {
	const history = useHistory();
	const clickMe = (data) => {
		localStorage.clear();
		history.push("/", {data: data});
	};
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            
          <Media className="ml-2 d-none d-lg-block">
            <span className="mb-0 text-lg text-white font-weight-bold">
              TK/KB CERIA MANDIRI, SIDOARJO
            </span>
          </Media>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    {/* <img
                    alt="..."
                    src={
                      require("../../assets/img/theme/admin.jpg").default
                    }
                    /> */}
                    <i className="ni ni-circle-08"></i>
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => clickMe({name: "test"})}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
