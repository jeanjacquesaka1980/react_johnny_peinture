import React from "react";
import Apropos from "../Apropos/Apropos";
import MeContacter from "../MeContacter/MeContacter";

// import bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// import media
import logo from "../../images/johnny-logo.png";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container mx-auto text-center">
      <Container className="container-fluid-header" fluid={true}>
        <Row>
          <Col className="frame-logo-header mt-5 mx-auto text-center" xs={10}>
            <Image className="logo-header" src={logo} fluid roundedCircle />
          </Col>
          <Col className="mt-5" xs={12}>
            <Button className="btn-plus-infos shadow-sm" size="lg">
              <Link className="text-light" to="/apropos">Plus d'infos</Link>
            </Button>
          </Col>
          <Col className="mt-3" xs={12}>
            <Button className="btn-me-contacter shadow" size="lg">
              <Link className="text-light" to="/contacter">Me contacter</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

const HeaderRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Row>
            <Header />
          </Row>
        </Route>
        <Route path="/apropos">
          <Row>
            <Apropos />
          </Row>
        </Route>
        <Route path="/contacter">
          <Row>
            <MeContacter />
          </Row>
        </Route>
      </Switch>
    </Router>
  );
};
export default Header;
