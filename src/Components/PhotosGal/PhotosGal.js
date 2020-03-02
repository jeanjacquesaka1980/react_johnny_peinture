import React from "react";
import CardPhotosGal from "../CardPhotosGal/CardPhotosGal";
import MeContacter from "../MeContacter/MeContacter";

// import bootstrap
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

// import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import lazy-load
import LazyLoad from "react-lazyload";

// import icons
import { IconContext } from "react-icons";
import { GiHomeGarage, GiWindow, GiBrickWall } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";

class PhotosGal extends React.Component {
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
        id: 4,
        cardTitle: "Pièce d'appartement",
        cardText: "Réalisé avec peinture spéciale extérieur",
        icon: <FaBuilding className="mb-3 icon" />,
        src1:
          "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/39506987_1862340053833345_1166505859098869760_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=99mlY8mo3VUAX8rg4to&_nc_ht=scontent-vie1-1.xx&oh=4c820ff584faaf166508011d97e5d3e5&oe=5EF3090E",
        src2:
          "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/39320549_1862340170500000_7846393598927962112_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=KVy8WgFGLewAX-CMr4z&_nc_ht=scontent-vie1-1.xx&oh=efd994ea7466c0c9feff277e7f2c41d1&oe=5EF0FD44"
      },
      {
        id: 3,
        cardTitle: "Mur extérieur",
        cardText: "Réalisé avec peinture spéciale extérieur",
        icon: <GiBrickWall className="mb-3 icon" />,
        src1:
          "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/42132849_1908294789237871_2385282200334499840_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=iBh5tNkds7YAX-pXgUW&_nc_ht=scontent-vie1-1.xx&oh=39f963a92d3b4cbfdb435c3db32c65ea&oe=5EB989D7",
        src2:
          "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/42058512_1908294829237867_4149701473300643840_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=eatx0_4Ixu8AX-_Wugn&_nc_ht=scontent-vie1-1.xx&oh=6a5dd623d54d9eae12c227e48288e6af&oe=5EBDDE5B"
      },
      {
        id: 2,
        cardTitle: "Porte de garage",
        cardText: "Réalisé avec peinture spéciale extérieur",
        icon: <GiHomeGarage className="mb-3 icon" />,
        src1:
          "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/66710013_2363640843703261_811023918658748416_n.jpg?_nc_cat=111&_nc_sid=a61e81&_nc_ohc=Dwa21yMJDXUAX-UIYir&_nc_ht=scontent-vie1-1.xx&oh=53067110f1f77631a5c8d5e3c7f5aa9c&oe=5EB9B959",
        src2:
          "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/67065456_2363640910369921_731509363746799616_n.jpg?_nc_cat=109&_nc_sid=a61e81&_nc_ohc=BFQjjDJpj44AX_pOlmv&_nc_ht=scontent-vie1-1.xx&oh=9be1b54b8584e2019f0f7b81a8ba6224&oe=5EF37820"
      },
      {
        id: 1,
        cardTitle: "Fenêtre sous comble",
        cardText: "Réalisé avec peinture spéciale intérieur",
        icon: <GiWindow className="mb-3 icon" />,
        src1:
          "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/58420445_2217746471626033_2937268614077612032_n.jpg?_nc_cat=108&_nc_sid=a61e81&_nc_ohc=cWFOA-TpNL0AX97REDp&_nc_ht=scontent-vie1-1.xx&oh=0005a5f410aad5c1f0217d14c7243fab&oe=5EB97CF8",
        src2:
          "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/57427455_2217746514959362_2166458693254643712_n.jpg?_nc_cat=100&_nc_sid=a61e81&_nc_ohc=mcjVM7XO1FEAX8yntS_&_nc_ht=scontent-vie1-1.xx&oh=9b452d9db0c767e7632eb6e2f584b6d2&oe=5EB770B9"
      }
    ];
    return (
      <section id="galerie-photos">
        <Col sm={12} xs={12}>
          <h2 className="my-3">Galerie Photos</h2>
          <hr className="underline"></hr>
        </Col>
        <IconContext.Provider value={{ color: "#81C4DC" }}>
          <CardDeck className="mx-auto">
            <LazyLoad height={200} once>
              {this.state.datas &&
                datas.map(el => {
                  return (
                    <CardPhotosGal
                      key={el.id}
                      cardTitle={el.cardTitle}
                      cardText={el.cardText}
                      src1={el.src1}
                      src2={el.src2}
                    >
                      {el.icon}
                    </CardPhotosGal>
                  );
                })}
            </LazyLoad>
            <Col md={12} sm={12} xs={12}>
              <Card className="border-0 shadow my-3 w-100">
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
        </IconContext.Provider>
      </section>
    );
  }
}

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
  );
};

export default PhotosGal;
