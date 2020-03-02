import React from "react";
import MeContacter from "../MeContacter/MeContacter";

// import bootsrap
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import lazy-load
import LazyLoad from "react-lazyload";

const Apropos = () => {
  const profilePicture =
    "http://jeremybertin.at/build/media/johnny-profile-test.jpg";

  return (
    <>
      <section id="a-propos">
        <Col xs={12}>
          <h2 className="my-3">À propos</h2>
          <hr className="underline"></hr>
        </Col>
        <Col xs={12} className="mx-auto">
          <Card className="my-3 border-0 bg-transparent">
            <LazyLoad height={200} once>
              <Card.Img
                id="profile-picture"
                className="profile-picture mx-auto"
                variant="top"
                src={profilePicture}
              />
            </LazyLoad>
            <Card.Body>
              <Card.Title>Bonjour, moi c'est Johnny !</Card.Title>
              <Card.Text>
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression.
              </Card.Text>
              <Button className="btn-me-contacter shadow">
                <Link className="text-light" to="/contacter">
                  Me contacter
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </section>
    </>
  );
};

const AproposRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/apropos">
          <Row className="mx-auto text-center">
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

export default Apropos;
