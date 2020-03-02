import React from "react";
import "./App.css";

// import Components
// import NavBar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Apropos from "./Components/Apropos/Apropos";
import DomainesCompetences from "./Components/DomainesCompetences/DomainesCompetences";
import Garanties from "./Components/Garanties/Garanties";
import MeContacter from "./Components/MeContacter/MeContacter";
import Temoignages from "./Components/Temoignages/Temoignages";
import PhotosGal from "./Components/PhotosGal/PhotosGal";
import QuestionsFrequentes from "./Components/QuestionsFrequentes/QuestionsFrequentes";
import CardQuestionsFrequentes from "./Components/CardQuestionsFrequentes/CardQuestionsFrequentes";
import Footer from "./Components/Footer/Footer";

// import reactbootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

// import icons
import { FaPhone } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";

// import react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";

// import other libraries
import FadeIn from "react-fade-in";

// import hamburger
import "hamburgers/dist/hamburgers.min.css";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class App extends React.Component {
  state = {
    dataLinks: "",
    activeBurger: false,
    headerMounted: false
  };
  dataLinks = [
    {
      id: 1,
      path: "/",
      title: "Page d'accueil"
    },
    {
      id: 2,
      path: "/apropos",
      title: "À propos"
    },
    {
      id: 3,
      path: "/competences",
      title: "Domaines de compétences"
    },
    {
      id: 4,
      path: "/garanties",
      title: "Mes garanties"
    },
    {
      id: 5,
      path: "/contacter",
      title: "Me contacter"
    },
    {
      id: 6,
      path: "/temoignages",
      title: "Témoignages"
    },
    {
      id: 7,
      path: "/galerie-photos",
      title: "Galerie photos"
    },
    {
      id: 8,
      path: "/questions-frequentes",
      title: "Questions frequentes"
    }
  ];

  componentDidMount() {
    this.setState({
      dataLinks: this.dataLinks,
      headerMounted: true
    });
  }

  handleActiveBurger = () => {
    this.setState({
      activeBurger: !this.state.activeBurger
    });
  };

  render() {
    // document.addEventListener('touchstart', onTouchStart, {passive: true});
    const components = [
      {
        id: 1,
        comp: <Header />,
        path: "/home"
      },
      {
        id: 2,
        comp: <Apropos className="a-propos" />,
        path: "/apropos"
      },
      {
        id: 3,
        comp: <DomainesCompetences />,
        path: "/competences"
      },
      {
        id: 4,
        comp: <Garanties />,
        path: "/garanties"
      },
      {
        id: 5,
        comp: <MeContacter />,
        path: "/contacter"
      },
      {
        id: 6,
        comp: <Temoignages />,
        path: "/temoignages"
      },
      {
        id: 7,
        comp: <PhotosGal />,
        path: "/galerie-photos"
      }
    ];
    const windowWidth = window.screen.width;
    let containerFluid;
    if (windowWidth > 1199.98) {
      containerFluid = false;
    }
    if (windowWidth < 1199.98) {
      containerFluid = true;
    }

    // const onScroll = window.onscroll;
    // let bgNavbar;
    // if (onScroll){
    //   bgNavbar = "transparent"
    // } else {
    //   bgNavbar = "#81C4DC"
    // }
    return (
      <>
        <Router>
          <Navbar
            className="shadow"
            fixed="top"
            collapseOnSelect
            expand="xl"
            bg="#81C4DC"
          >
            <Navbar.Brand className="text-dark" href="#">
              Johnny Peinture <FaPaintRoller className="pl-2 paint-roll" />
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={this.handleActiveBurger}
              className={
                this.state.activeBurger
                  ? "hamburger hamburger--spin is-active"
                  : "hamburger hamburger--spin"
              }
              aria-controls="responsive-navbar-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </Navbar.Toggle>
            <div
              className={
                this.state.activeBurger
                  ? "navbar-collapse collapse show-navbar"
                  : "navbar-collapse collapse hide-navbar"
              }
              id="responsive-navbar-nav"
            >
              <Nav className="mr-auto">
                {this.state.dataLinks.length &&
                  this.state.dataLinks.map(el => {
                    return (
                      <li
                        onClick={this.handleActiveBurger}
                        key={el.id}
                        className="nav-item"
                      >
                        <Link
                          to={el.path}
                          className="nav-link text-dark mr-2 my-1 ml-2 px-2"
                          to={el.path}
                        >
                          {el.title}
                        </Link>
                      </li>
                    );
                  })}
              </Nav>
              <Nav>
                <Navbar.Text className="text-dark">
                  06.70.22.38.38 <FaPhone className="ml-2" />
                </Navbar.Text>
              </Nav>
            </div>
          </Navbar>

          <Switch>
            {/* <Route
              exact
              path="/"
              render={() => (
                <Route exact path="/home">
                  <FadeIn transitionDuration="600">
                    <ScrollToTopOnMount />
                    <Header />
                  </FadeIn>
                </Route>
              )}
            /> */}
            // TODO check the line under
            <Route exact path={process.env.PUBLIC_URL + "/"}>
              <FadeIn transitionDuration="600">
                <ScrollToTopOnMount />
                <Header />
              </FadeIn>
            </Route>
            <main className="mx-auto text-center">
              <Container className="mx-auto text-center" fluid={containerFluid}>
                {components.length &&
                  components.map(el => {
                    return (
                      <Route key={el.id} path={el.path}>
                        <Row>
                          <FadeIn className="w-100" transitionDuration="400">
                            <ScrollToTopOnMount />
                            {el.comp}
                          </FadeIn>
                        </Row>
                      </Route>
                    );
                  })}

                {/* // TODO import code under but as component QuestionsFrequentes and CardQuestiosnFrequentes */}

                <Route key="8" path="/questions-frequentes">
                  <Row>
                    <FadeIn className="w-100" transitionDuration="400">
                      <ScrollToTopOnMount />
                      <section id="questions-frequentes">
                        <Col sm={12} xs={12}>
                          <h2 className="my-3">Questions fréquentes</h2>
                          <hr className="underline"></hr>
                        </Col>
                        <Accordion
                          defaultActiveKey="0"
                          id="questions-frequentes"
                        >
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="0"
                              >
                                Click me!
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="1"
                              >
                                Click me!
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </section>
                    </FadeIn>
                  </Row>
                </Route>
              </Container>
            </main>
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
