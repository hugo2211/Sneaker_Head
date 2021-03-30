import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import sneaker from "../../images/SneakerLogoFinal.png";
import head from "../../images/HeadLogoFinal.png";
import './Navbar.css';

const Nav = styled.nav`
  width: 100%;
  /* border-bottom: 2px solid #f1f1f1; */
  padding: 0 20px 0 15px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = ({ history }) => {
  return (
    <Nav>
      <Link to="/profile">
        <div className="logo">
          <img src={sneaker} alt="website-logo" className="navbar-brand-sneaker img-fluid" />
          <img src={head} alt="website-logo" className="navbar-brand-head img-fluid" />
        </div>
      </Link>
      
      <Burger history={history} />
    </Nav>
  );
};

export default Navbar;
