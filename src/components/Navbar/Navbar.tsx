import { FunctionComponent as FC, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { INavbar } from "./INavbar";
import { Link, NavLink } from "react-router-dom";
import MetaMaskIcon from "../../assets/icons/meta_mask_icon.svg";
import Logo1 from "../../assets/icons/Eloqui_Icon 1.svg";
import Logo from "../../assets/icons/Logo.svg";

import "./Navbar.css";
import { Button, Col, Dropdown, Row, Space, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSelectedTab } from "../../store/reducers/home.reducer";

const items = [
  { label: "Feature", key: "feature" }, // remember to pass the key prop
  { label: "Privacy", key: "privacy" },
  { label: "Help", key: "help" },
  { label: "Login", key: "login" },
];

const Navbar: FC<INavbar> = ({ status, connect, account }) => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] =
    useState<boolean>(false);

  const selectedTab = useAppSelector((state) => state.page.selectedTab);
  console.log(selectedTab);
  const dispatch = useAppDispatch();

  return (
    <Row style={{ paddingTop: "10px", paddingInline: "5px" }}>
      <Col span={8}>
        <img src={Logo1} style={{ width: "60px", height: "60px" }} />
        <img src={Logo} style={{ width: "190px", height: "60px" }} />
      </Col>
      <Col xs={0} sm={0} md={16} lg={16} style={{ textAlign: "right" }}>
        <Space>
          {selectedTab === "feature" ? (
            <Button type="primary">Feature</Button>
          ) : (
            <span
              style={{ fontSize: "20px", paddingInline: "10px" }}
              onClick={() => dispatch(setSelectedTab("feature"))}
            >
              Feature
            </span>
          )}

          {selectedTab === "privacy" ? (
            <Button type="primary">Privacy</Button>
          ) : (
            <span
              style={{ fontSize: "20px", paddingInline: "10px" }}
              onClick={() => dispatch(setSelectedTab("privacy"))}
            >
              Privacy
            </span>
          )}

          {selectedTab === "help" ? (
            <Button type="primary">Help</Button>
          ) : (
            <span
              style={{ fontSize: "20px", paddingInline: "10px" }}
              onClick={() => dispatch(setSelectedTab("help"))}
            >
              Help
            </span>
          )}

          <Button type="primary">Login</Button>
        </Space>
      </Col>
      <Col xs={16} sm={16} md={0} lg={0} style={{ textAlign: "right" }}>
        <Dropdown menu={{ items }}>
          <Button>
            <AiOutlineMenuFold />
          </Button>
        </Dropdown>
      </Col>
    </Row>

    // <MDBNavbar expand="lg" className="main-nav py-3 shadow-lg" dark>
    //   <MDBContainer fluid>
    //     <Link to="/" className="navbar-brand ms-5">
    //       Eloqui Chat
    //     </Link>
    //     <MDBNavbarToggler
    //       type="button"
    //       data-target="#navbarTogglerDemo02"
    //       aria-controls="navbarTogglerDemo02"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //       onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
    //     >
    //       <MDBIcon icon="bars" fas />
    //     </MDBNavbarToggler>
    //     <MDBCollapse navbar show={showNavNoTogglerSecond}>
    //       <MDBNavbarNav className="mb-2 me-5 mb-lg-0">
    //         <MDBNavbarItem className="ms-auto">
    //           <NavLink to="/" className="nav-link" end>
    //             <MDBIcon icon="home" fas /> {""}
    //             Home
    //           </NavLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem>
    //           <NavLink to="/about" className="nav-link" end>
    //             <MDBIcon icon="info-circle" fas /> About
    //           </NavLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem>
    //           <NavLink to="/contact" className="nav-link" end>
    //             <MDBIcon icon="envelope" fas /> Contact
    //           </NavLink>
    //         </MDBNavbarItem>

    //         <MDBNavbarItem className="d-flex align-items-center ms-5">
    //           <MDBBtn
    //             color="warning"
    //             type="button"
    //             className="my-0 py-2"
    //             size="sm"
    //           >
    //             Login With Metamask
    //             <img
    //               src={MetaMaskIcon}
    //               alt="MetaMask Icon"
    //               className="metamask-icon ms-2"
    //               height={18}
    //             />
    //           </MDBBtn>
    //         </MDBNavbarItem>
    //       </MDBNavbarNav>
    //     </MDBCollapse>
    //   </MDBContainer>
    // </MDBNavbar>
  );
};

export default Navbar;
