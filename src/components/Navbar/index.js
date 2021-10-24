import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../images/logo.svg")} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/by-breed" activeStyle>
            ByBreed
          </NavLink>
          <NavLink to="/all-sub-breeds" activeStyle>
            AllSubBreeds
          </NavLink>
          <NavLink to="/collection" activeStyle>
            Collection
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/images">images</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
