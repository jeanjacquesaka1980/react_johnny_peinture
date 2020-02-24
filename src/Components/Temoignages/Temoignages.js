import React from "react";
import CardTemoignages from "../CardTemoignages/CardTemoignages";
import MeContacter from "../MeContacter/MeContacter";

import { IconContext } from "react-icons";

// import bootstrap
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Temoignages = () => {
  return (
    <>
      <Col xs={12}>
        <h2 className="my-3">Témoignages</h2>
        <hr className="underline"></hr>
      </Col>
      <CardDeck className="w-100">
        <IconContext.Provider value={{ color: "#81C4DC" }}>
          <CardTemoignages
            CardTitle="Yevette"
            CardText="Super peinture au top !"
          />
          <CardTemoignages
            CardTitle="Yevette"
            CardText="Super peinture au top !"
          />
          <CardTemoignages
            CardTitle="Yevette"
            CardText="Super peinture au top !"
          />
          <CardTemoignages
            CardTitle="Yevette"
            CardText="Super peinture au top !"
          />
          <CardTemoignages
            CardTitle="Yevette"
            CardText="Super peinture au top !"
          />
          <CardTemoignages
            CardTitle="Yevette"
            CardText="Super peinture au top !"
          />
          <Col xs={12}>
          <Card className="border-0 shadow mt-3">
            <Card.Body>
              <Card.Text className="mb-3">
                Les témoignages vous on convaincu ?
              </Card.Text>
              <Button className="btn-me-contacter shadow">
                <Link className="text-light" to="/contacter">
                  Me contacter
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        </IconContext.Provider>
      </CardDeck>
    </>
  );
};

const TemoignagesRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/temoignages">
          <Row>
            <Temoignages />
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

export default Temoignages;
