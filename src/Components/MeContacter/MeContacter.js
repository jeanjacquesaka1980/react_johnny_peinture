import React from "react";
import CardMeContacter from "../CardMeContacter/CardMeContacter";
import MyMap from "../MyMap/MyMap";

// import bootsrtap
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";

// import icons
import { IconContext } from "react-icons";
import { FaPhone } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";

class MeContacter extends React.Component {
  render() {
    let myMap = <MyMap />;
    return (
      <>
        <Col xs={12}>
          <h2 className="my-3">Me Contacter</h2>
          <hr className="underline"></hr>
        </Col>
        <CardDeck>
          <IconContext.Provider value={{ color: "#81C4DC" }}>
            <CardMeContacter
              className="border-blue"
              CardTitle="Par téléphone"
              Contact="06.70.22.38.38"
              CardText="Disponible de 8:00 à 18:30 Si vous n'arrivez pas à me joindre (je dois surement être occupé en train de travailler durement à la sueur de mon front), laissez moi un message vocal ou un sms et je vous recontacterez le plus rapidement possible."
            >
              <FaPhone className="mt-3 icon" />
            </CardMeContacter>
            <CardMeContacter
              CardTitle="Par email"
              Contact="johnny.peinture@hotmail.com"
              CardText="Je répondrais à votre email dans les plus brefs délais."
            >
              <FaAt className="mt-3 icon" />
            </CardMeContacter>
            <CardMeContacter
              CardTitle="Déplacements"
              CardText="J'interviens sur une zone de 30km aux alentours de Froberville. Si vous êtes au delà de cette zone, contactez moi pour voir quelles sont les autres possibilités au 06.70.22.38.38 !"
              map={myMap}
            >
              <FiTruck className="mt-3 icon" />
            </CardMeContacter>
          </IconContext.Provider>
        </CardDeck>
      </>
    );
  }
}

export default MeContacter;
