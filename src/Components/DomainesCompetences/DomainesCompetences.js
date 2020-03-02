import React from "react";
import CardCompetences from "../CardCompetences/CardCompetences";
import MeContacter from "../MeContacter/MeContacter";

// import bootstrap
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";import Popover from "react-bootstrap/Popover";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class DomainesCompetences extends React.Component {
  state = {
    datas: ""
  };
  peintureInterieur =
    "http://jeremybertin.at/build/media/peinture-interieur.jpg";
  peintureExterieur =
    "http://jeremybertin.at/build/media/peinture-exterieur.jpg";
  papierPeint = "http://jeremybertin.at/build/media/papier-peint.jpg";
  fibreVerre = "http://jeremybertin.at/build/media/fibre-de-verre.jpg";
  facadeExt = "http://jeremybertin.at/build/media/facade-ext.jpg";
  solSouple = "http://jeremybertin.at/build/media/sol-souple.jpg";
  parquetFlot = "http://jeremybertin.at/build/media/parquet-flottant.jpg";
  vitrification = "http://jeremybertin.at/build/media/vitrification.jpg";
  placo = "http://jeremybertin.at/build/media/plaque-de-placo.jpg";

  datas = [
    {
      id: 1,
      src: this.peintureInterieur,
      cardTitle: "Peinture Interieur",
      cardTitlePop: "Peinture Interieur",
      cardTextPop: "Peinture intérieur faites avec blablabla"
    },

    {
      id: 2,
      src: this.peintureExterieur,
      cardTitle: "Peinture Exterieur",
      cardTitlePop: "Peinture Exterieur",
      cardTextPop: "Peinture extérieur faites avec blablabla"
    },
    {
      id: 3,
      src: this.papierPeint,
      cardTitle: "Pose de papier peint",
      cardTitlePop: "Pose de papier peint",
      cardTextPop: "Blablabla"
    },
    {
      id: 4,
      src: this.fibreVerre,
      cardTitle: "Pose de fibre de verre",
      cardTitlePop: "Pose de fibre de verre",
      cardTextPop: "Blablabla"
    },
    {
      id: 5,
      src: this.facadeExt,
      cardTitle: "Revêtement de facade extérieur",
      cardTitlePop: "Revêtement de facade extérieur",
      cardTextPop: "Blablabla"
    },
    {
      id: 6,
      src: this.parquetFlot,
      cardTitle: "Pose de parquet flottant",
      cardTitlePop: "Pose de parquet flottant",
      cardTextPop: "Blablabla"
    },
    {
      id: 7,
      src: this.vitrification,
      cardTitle: "Vitirification des planchers",
      cardTitlePop: "Vitirification des planchers",
      cardTextPop: "Blablabla"
    },
    {
      id: 8,
      src: this.solSouple,
      cardTitle: "Pose de revêtements de sol souple",
      cardTitlePop: "Pose de revêtements de sol souple",
      cardTextPop: "Blablabla"
    },
    {
      id: 9,
      src: this.placo,
      cardTitle: "Pose de bandes de plaques de plâtre",
      cardTitlePop: "Pose de bandes de plaques de plâtre",
      cardTextPop: "Blablabla"
    }
  ];

  componentDidMount() {
    this.setState({
      datas: this.datas
    });
  }

  render() {
    return (
      <section id="competences">
        <Col sm={12} xs={12}>
          <h2 className="my-3">Domaines de compétences</h2>
          <hr className="underline"></hr>
        </Col>
        <CardDeck className="mx-auto">
          {this.state.datas.length &&
            this.state.datas.map(el => {
              return (
                  <CardCompetences
                    key={el.id}
                    src={el.src}
                    cardTitle={el.cardTitle}
                    cardTitlePop={el.cardTitlePop}
                    cardTextPop={el.cardTextPop}
                  />
              );
            })}
          <Col sm={12} xs={12}>
            <Card className="border-0 shadow my-3">
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
      </section>
    );
  }
}

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
  );
};

export default DomainesCompetences;
