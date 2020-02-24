import React from "react";
import MeContacter from "../MeContacter/MeContacter";

// import bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import media
import logo from "../../images/johnny-logo.png";

// import icon
import { IconContext } from "react-icons";
import { FaFacebook, FaArrowDown } from "react-icons/fa";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container mx-auto text-center">
      <Container fluid={true}>
        <Row>
          <IconContext.Provider value={{ color: "#4267B2" }}>
            <Col xs={12}>
              <FaArrowDown className="arrow-icon mt-3" />
            </Col>
            <Col className="mt-3" xs={12}>
              <Card.Text>Visitez ma page Facebook !</Card.Text>
              <Button className="bg-transparent border-0 mb-3" size="lg">
                <FaFacebook className="fb-icon" />
              </Button>
            </Col>
            <Col xs={12}>
              <FaArrowDown className="arrow-icon mt-3" />
            </Col>
            <Col className="mt-3" xs={12}>
              <Card.Text>Contacter le développeur de site internet !</Card.Text>
              <Button className="bg-transparent border-0 mb-3" size="lg">
                <FaFacebook className="fb-icon" />
              </Button>
            </Col>
            <Col className="my-5 mx-auto text-center" xs={10}>
              <Image
                className="logo-header shadow"
                src={logo}
                fluid
                roundedCircle
              />
            </Col>
          </IconContext.Provider>
        </Row>
      </Container>
    </footer>
  );
};

const FooterRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contacter">
          <Row>
            <MeContacter />
          </Row>
        </Route>
      </Switch>
    </Router>
  )
}

export default Footer;
