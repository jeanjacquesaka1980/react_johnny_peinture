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

class Temoignages extends React.Component {
  state = {
    datas: false
  };

  componentDidMount() {
    this.setState({
      datas: true
    });
  }
  render() {
    const datas = [
      {
        id: 6,
        cardTitle: "Yvette",
        cardText: "Genial"
      },
      {
        id: 5,
        cardTitle: "Josiane",
        cardText: "Top"
      },
      {
        id: 4,
        cardTitle: "Michel",
        cardText: "Super travail"
      },
      {
        id: 3,
        cardTitle: "Jeremy",
        cardText: "Johnny est au top"
      },
      {
        id: 2,
        cardTitle: "Nathalie",
        cardText: "Je recommande"
      },
      {
        id: 1,
        cardTitle: "Christian",
        cardText: "Merci !"
      }
    ];
    return (
      <section id="temoignages">
        <Col sm={12} xs={12}>
          <h2 className="my-3">Témoignages</h2>
          <hr className="underline"></hr>
        </Col>
        <CardDeck className="w-100 mx-auto text-center">
          <IconContext.Provider value={{ color: "#81C4DC" }}>
            {this.state.datas &&
              datas.map(el => {
                return (
                  <CardTemoignages
                    key={el.id}
                    cardTitle={el.cardTitle}
                    cardText={el.cardText}
                  />
                );
              })}
            <Col sm={12} xs={12}>
              <Card className="border-0 shadow my-3">
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
      </section>
    );
  }
}

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
  );
};

export default Temoignages;
