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
// import logo from "../../images/johnny-logo.png";

// import icon
import { IconContext } from "react-icons";
import { FaFacebook, FaArrowDown } from "react-icons/fa";

// import router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Footer = () => {
  const logo = "http://jeremybertin.at/build/media/johnny-logo.png";
  
  return (
    <footer className="footer-container mx-auto text-center w-100">
      <Container fluid={true}>
        <Row>
          <IconContext.Provider value={{ color: "#4267B2" }}>
            <Col xs={12}>
              <FaArrowDown className="arrow-icon mt-3" />
            </Col>
            <Col xs={12} className="mt-3">
              <Card.Text>Visitez ma page Facebook !</Card.Text>
              <Button href="https://www.facebook.com/Peintre-En-B%C3%A2timent-Johnny-Peinture-1525713687495985/" target="_blank" className="bg-transparent border-0 mb-3" size="lg">
                <FaFacebook className="fb-icon" />
              </Button>
            </Col>
            <Col xs={12}>
              <FaArrowDown className="arrow-icon mt-3" />
            </Col>
            <Col xs={12} className="mt-3">
              <Card.Text>Besoin d'un site internet ? D'un logo ? D'une optimisation ? Contactez le développeur !</Card.Text>
              <Button href="https://www.facebook.com/djay3" target="_blank" className="bg-transparent border-0 mb-3" size="lg">
                <FaFacebook className="fb-icon" />
              </Button>
            </Col>
            <Col xs={12} className="my-5 mx-auto text-center">
              <Image
                className="logo-footer shadow mx-auto"
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
