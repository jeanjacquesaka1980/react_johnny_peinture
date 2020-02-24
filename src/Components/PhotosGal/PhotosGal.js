import React from "react";
import CardPhotosGal from "../CardPhotosGal/CardPhotosGal";
import MeContacter from "../MeContacter/MeContacter";

// import bootstrap
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

// import media
import Avant from "../../images/avant-test.jpg";
import Apres from "../../images/apres-test.jpg";
import Avant2 from "../../images/avant-2.jpg";
import Apres2 from "../../images/apres-2.jpg";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const PhotosGal = () => {
  return (
    <>
      <Col xs={12}>
        <h2 className="my-3">Galerie Photos</h2>
        <hr className="underline"></hr>
      </Col>
      <CardDeck className="w-100">
        <CardPhotosGal CardTitle="Porte de garage roulante" CardText="Réalisé avec amour" src1={Avant} src2={Apres}/>
        <CardPhotosGal CardTitle="Fenêtre sous comble" CardText="Réalisé avec amour" src1={Avant2} src2={Apres2}/>
        <Col xs={12}>
          <Card className="border-0 shadow mt-3">
            <Card.Body>
              <Card.Text className="mb-3">
                Convaincu par le résultat ?
              </Card.Text>
              <Button className="btn-me-contacter shadow">
                <Link className="text-light" to="/contacter">
                  Me contacter
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </CardDeck>
    </>
  );
};

const PhotosGalRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/galerie-photos">
          <Row>
            <PhotosGal />
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

export default PhotosGal;
