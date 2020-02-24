import React from "react";
import CardCompetences from "../CardCompetences/CardCompetences";
import MeContacter from "../MeContacter/MeContacter";

// import bootstrap
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";

// import media
import PeintureInterieur from "../../images/peinture-interieur.jpg";
import PeintureExterieur from "../../images/peinture-exterieur.jpg";
import PapierPeint from "../../images/papier-peint.jpg";
import FibreVerre from "../../images/fibre-de-verre.jpg";
import FacadeExt from "../../images/facade-ext.jpg";
import SolSouple from "../../images/sol-souple.jpg";
import ParquetFlot from "../../images/parquet-flottant.jpg";
import Vitrification from "../../images/vitrification.jpg";
import Placo from "../../images/plaque-de-placo.jpg";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const DomainesCompetences = () => {
  return (
    <>
      <Col xs={12}>
        <h2 className="my-3">Domaines de compétences</h2>
        <hr className="underline"></hr>
      </Col>
      <CardDeck>
        <CardCompetences
          src={PeintureInterieur}
          CardTitle="Peinture Interieur"
        />
        <CardCompetences
          src={PeintureExterieur}
          CardTitle="Peinture Exterieur"
        />
        <CardCompetences src={PapierPeint} CardTitle="Pose de papier peint" />
        <CardCompetences src={FibreVerre} CardTitle="Pose de fibre de verre" />
        <CardCompetences
          src={FacadeExt}
          CardTitle="Revêtement de facade extérieur"
        />
        <CardCompetences
          src={SolSouple}
          CardTitle="Pose de revêtements de sol souple"
        />
        <CardCompetences
          src={ParquetFlot}
          CardTitle="Pose de parquet flottant"
        />
        <CardCompetences
          src={Vitrification}
          CardTitle="Vitirification des planchers"
        />
        <CardCompetences
          src={Placo}
          CardTitle="Pose de bandes de plaques de plâtre"
        />
        <Col xs={12}>
          <Card className="border-0 shadow mt-3">
            <Card.Body>
              <Card.Text className="mb-3">
                Besoin de faire autre chose qui ne figure pas dans la liste
                ci-dessus ?
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

const DomaineCompetencesRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/competences">
          <Row>
            <DomainesCompetences />
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

export default DomainesCompetences;
