import React from "react";
import MeContacter from "../MeContacter/MeContacter";

// import bootsrap
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

// import media
import profilePicture from "../../images/johnny-profile-test.jpg";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Apropos = () => {
  return (
    <>
      <Col xs={12}>
        <h2 className="my-3">À propos</h2>
        <hr className="underline"></hr>
      </Col>
      <Col xs={12}>
        <Card className="my-3 border-0 bg-transparent">
          <Card.Img
            className="profile-picture"
            variant="top"
            src={profilePicture}
          />
          <Card.Body>
            <Card.Title>Bonjour, moi c'est Johnny !</Card.Title>
            <Card.Text>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            </Card.Text>
            <Button className="btn-me-contacter shadow">
            <Link className="text-light" to="/contacter">Me contacter</Link></Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

const AproposRouter = () => {
  return (
    <Router>
      <Switch>
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
  )
}

export default Apropos;
