import React from "react";

// import bootsrap
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const CardQuestionsFrequentes = ({ button, eventKey, question, reponse }) => {
  return (
    <>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={button} variant="link" eventKey={eventKey}>
            {question}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{reponse}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default CardQuestionsFrequentes;
