import React from "react";

// import bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import icons 
import { FaPhone } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";

// import router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="#81C4DC">
      <Navbar.Brand className="text-dark"  href="#home">Johnny Peinture <FaPaintRoller className="ml-2"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-dark" href="#pricing">À propos</Nav.Link>
          <Nav.Link className="text-dark" to="/competences">Domaines de compétences</Nav.Link>
          <Nav.Link className="text-dark" href="#pricing">Mes garanties</Nav.Link>
          <Nav.Link className="text-dark" href="#pricing">Me contacter</Nav.Link>
          <Nav.Link className="text-dark" href="#pricing">Témoignages</Nav.Link>
          <Nav.Link className="text-dark" href="#pricing">Galerie Photos</Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Text className="text-dark">06.70.22.38.38 <FaPhone className="ml-2"/></Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Router>
  );
};

export default NavBar;
