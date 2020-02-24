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
import Footer from "./Components/Footer/Footer";

// import reactbootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import icons
import { FaPhone } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";

// import react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";

// import other libraries
import FadeIn from "react-fade-in";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const App = props => {
  return (
    <>
      <Router>
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="#81C4DC">
          <Navbar.Brand className="text-dark" href="#home">
            Johnny Peinture <FaPaintRoller className="ml-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="text-dark m-2" to="/home">
                Page d'accueil
              </Link>
              <Link className="text-dark m-2" to="/apropos">
                À propos
              </Link>
              <Link className="text-dark m-2" to="/competences">
                Domaines de compétences
              </Link>
              <Link className="text-dark m-2" to="/garanties">
                Mes garanties
              </Link>
              <Link className="text-dark m-2" to="/contacter">
                Me contacter
              </Link>
              <Link className="text-dark m-2" to="/temoignages">
                Témoignages
              </Link>
              <Link className="text-dark m-2" to="/galerie-photos">
                Galerie Photos
              </Link>
            </Nav>
            <Nav>
              <Navbar.Text className="text-dark m-2">
                06.70.22.38.38 <FaPhone className="ml-2" />
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/home">
            <FadeIn transitionDuration="600">
              <ScrollToTopOnMount />
              <Header />
            </FadeIn>
          </Route>
          <main className="mx-auto text-center">
            <Container fluid={true}>
              <Route path="/apropos">
                <Row>
                  <FadeIn transitionDuration="600">
                    <ScrollToTopOnMount />
                    <Apropos />
                  </FadeIn>
                </Row>
              </Route>
              <Route path="/competences">
                <Row>
                  <FadeIn transitionDuration="600">
                    <ScrollToTopOnMount />
                    <DomainesCompetences />
                  </FadeIn>
                </Row>
              </Route>
              <Route path="/garanties">
                <Row>
                  <FadeIn transitionDuration="600">
                    <ScrollToTopOnMount />
                    <Garanties />
                  </FadeIn>
                </Row>
              </Route>
              <Route path="/contacter">
                <Row>
                  <FadeIn transitionDuration="600">
                    <ScrollToTopOnMount />
                    <MeContacter />
                  </FadeIn>
                </Row>
              </Route>
              <Route path="/temoignages">
                <Row>
                  <FadeIn transitionDuration="600">
                    <ScrollToTopOnMount />
                    <Temoignages />
                  </FadeIn>
                </Row>
              </Route>
              <Route path="/galerie-photos">
                <Row>
                  <FadeIn transitionDuration="600">
                    <ScrollToTopOnMount />
                    <PhotosGal />
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
};

export default App;
