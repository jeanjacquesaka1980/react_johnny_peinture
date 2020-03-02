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
import {
  FaRulerCombined,
  FaRegListAlt,
  FaRegClock,
  FaRegComments
} from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { GoSmiley } from "react-icons/go";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Garanties extends React.Component {
  state = {
    datas: false
  };

  componentDidMount() {
    this.setState({ datas: true });
  }
  render() {
    const datas = [
      {
        id: 6,
        cardTitle: "Minutieux",
        cardText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
        icon: <FaRulerCombined className="mt-3 icon" />
      },
      {
        id: 5,
        cardTitle: "Organisé",
        cardText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
        icon: <FaRegListAlt className="mt-3 icon" />
      },
      {
        id: 4,
        cardTitle: "Ponctuel",
        cardText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
        icon: <FaRegClock className="mt-3 icon" />
      },
      {
        id: 3,
        cardTitle: "Chantier Propre",
        cardText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
        icon: <GiVacuumCleaner className="mt-3 icon" />
      },
      {
        id: 2,
        cardTitle: "À l'écoute",
        cardText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
        icon: <FaRegComments className="mt-3 icon" />
      },
      {
        id: 1,
        cardTitle: "Convivial",
        cardText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
        icon: <GoSmiley className="mt-3 icon" />
      }
    ];
    return (
      <section id="garanties">
        <Col sm={12} xs={12}>
          <h2 className="my-3">Garanties</h2>
          <hr className="underline"></hr>
        </Col>
        <CardDeck>
          <IconContext.Provider value={{ color: "#81C4DC" }}>
            {this.state.datas &&
              datas.map(el => {
                return (
                  <CardGaranties
                    key={el.id}
                    cardTitle={el.cardTitle}
                    cardText={el.cardText}
                  >
                    {el.icon}
                  </CardGaranties>
                );
              })}
            <Col sm={12} xs={12}>
              <Card className="border-0 shadow my-3">
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
      </section>
    );
  }
}

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
  );
};

export default Garanties;
