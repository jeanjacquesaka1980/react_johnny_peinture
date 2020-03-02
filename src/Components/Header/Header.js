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
// import logo from "../../images/johnny-logo.png";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import lazy-load
import LazyLoad from "react-lazyload";

const Header = () => {
  const windowWidth = window.screen.width;
  const logo = "http://jeremybertin.at/build/media/johnny-logo.png";

  let btnInfosClass;
  let btnContactClass;
  let colHeaderClass;

  if (windowWidth < 1199.98 || windowWidth > 1199.98) {
    btnInfosClass = "btn-plus-infos shadow-sm float-right";
    btnContactClass = "btn-me-contacter shadow float-left";
    colHeaderClass = "mt-5";
  }

  if (windowWidth < 767.98 || windowWidth < 991.98) {
    btnInfosClass = "btn-plus-infos shadow-sm float-right";
    btnContactClass = "btn-me-contacter shadow float-left";
    colHeaderClass = "mt-3";
  }
  if (windowWidth < 575.98) {
    btnInfosClass = "btn-plus-infos shadow-sm float-none";
    btnContactClass = "btn-me-contacter shadow float-none";
    colHeaderClass = "mt-4 ";
  }

  return (
    <>
      <header className="header-container mx-auto text-center">
        <Container className="container-fluid-header" fluid={true}>
          <Row>
            <Col className={colHeaderClass} xs={12}>
              <LazyLoad height={200} once>
                <Image
                  id="logo-header"
                  className="logo-header mt-5"
                  src={logo}
                  fluid
                  roundedCircle
                />
              </LazyLoad>
            </Col>
            <Col className="mt-3" sm={6} xs={12}>
              <Button className={btnInfosClass} size="lg">
                <Link className="text-light" to="/apropos">
                  Plus d'infos
                </Link>
              </Button>
            </Col>
            <Col className="mt-3" sm={6} xs={12}>
              <Button className={btnContactClass} size="lg">
                <Link className="text-light" to="/contacter">
                  Me contacter
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    </>
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
