import React from "react";
import CardGaranties from "../CardGaranties/CardGaranties";
import MeContacter from "../MeContacter/MeContacter";

// import bootstrap
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

// import icons
import { IconContext } from "react-icons";
import { FaRulerCombined, FaRegListAlt, FaRegClock, FaRegComments } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { GoSmiley } from "react-icons/go";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Garanties = () => {
  return (
    <>
      <Col xs={12}>
        <h2 className="my-3">Garanties</h2>
        <hr className="underline"></hr>
      </Col>
      <CardDeck>
        <IconContext.Provider value={{ color: "#81C4DC" }}>
          <CardGaranties
            CardTitle="Minutieux"
            CardText="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          >
            <FaRulerCombined className="mt-3 icon" />
          </CardGaranties>
          <CardGaranties
            CardTitle="Organisé"
            CardText="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          >
            <FaRegListAlt className="mt-3 icon" />
          </CardGaranties>
          <CardGaranties
            CardTitle="Ponctuel"
            CardText="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          >
            <FaRegClock className="mt-3 icon" />
          </CardGaranties>
          <CardGaranties
            CardTitle="Chantier Propre"
            CardText="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          >
            <GiVacuumCleaner className="mt-3 icon" />
          </CardGaranties>
          <CardGaranties
            CardTitle="À l'écoute"
            CardText="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          >
            <FaRegComments className="mt-3 icon" />
          </CardGaranties>
          <CardGaranties
            CardTitle="Convivial"
            CardText="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          >
            <GoSmiley className="mt-3 icon" />
          </CardGaranties>
          <Col xs={12}>
          <Card className="border-0 shadow mt-3">
            <Card.Body>
              <Card.Text className="mb-3">
                Ma facon de procéder vous a convaincu ?
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

const GarantiesRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/garanties">
          <Row>
            <Garanties />
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

export default Garanties;
