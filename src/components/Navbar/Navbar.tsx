import { FunctionComponent as FC, useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import { INavbar } from "./INavbar";
import { Link, NavLink } from "react-router-dom";
import MetaMaskIcon from "../../assets/icons/meta_mask_icon.svg";

import "./Navbar.css";

const Navbar: FC<INavbar> = ({ status, connect, account }) => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] =
    useState<boolean>(false);

  return (
    <MDBNavbar expand="lg" className="main-nav py-3" light>
      <MDBContainer fluid>
        <Link to="/" className="navbar-brand ms-5">
          Eloqui Chat
        </Link>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavNoTogglerSecond}>
          <MDBNavbarNav className="mb-2 me-5 mb-lg-0">
            <MDBNavbarItem className="ms-auto">
              <NavLink to="/" className="nav-link" end>
                <MDBIcon icon="home" fas /> {""}
                Home
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="/about" className="nav-link" end>
                <MDBIcon icon="info-circle" fas /> About
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="/contact" className="nav-link" end>
                <MDBIcon icon="envelope" fas /> Contact
              </NavLink>
            </MDBNavbarItem>
            {account && (
              <MDBNavbarItem>
                <NavLink to="/chats" className="nav-link" end>
                  <MDBIcon icon="message" fas /> Chats
                </NavLink>
              </MDBNavbarItem>
            )}

            <MDBNavbarItem className="d-flex align-items-center ms-5">
              {status === "connecting" ? (
                <MDBIcon icon="spinner" className="my-0" spin />
              ) : status === "notConnected" ? (
                <MDBBtn
                  color="warning"
                  type="button"
                  className="my-0 py-2"
                  size="sm"
                  onClick={connect}
                >
                  Login With Metamask
                  <img
                    src={MetaMaskIcon}
                    alt="MetaMask Icon"
                    className="metamask-icon ms-2"
                    height={18}
                  />
                </MDBBtn>
              ) : status === "unavailable" ? (
                <p className="text-danger my-0">MetaMask is not available</p>
              ) : (
                <>
                  <p className="text-warning my-0">
                    <MDBIcon icon="user" fas /> {""}
                    {String(account).substring(0, 6) +
                      "..." +
                      String(account).substring(38)}
                  </p>
                </>
              )}
            </MDBNavbarItem>

            <MDBNavbarItem className="d-flex align-items-center ms-2">
              {status === "connected" ? (
                <span className="badge rounded-pill bg-success badge-sm">
                  Connected
                </span>
              ) : (
                <span className="badge rounded-pill bg-danger badge-sm">
                  Disconnected
                </span>
              )}
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
