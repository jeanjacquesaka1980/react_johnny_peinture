import React from "react";

// import bootsrap
import Accordion from 'react-bootstrap/Accordion';
import Col from "react-bootstrap/Col";

const QuestionsFrequentes = ({ eventKey, question, reponse, children }) => {
  return (
    <section id="questions-frequentes">
        <Col sm={12} xs={12}>
          <h2 className="my-3">Questions fréquentes</h2>
          <hr className="underline"></hr>
        </Col>
      {/* <Accordion defaultActiveKey="0">
        {children}
      </Accordion> */}
    </section>
  );
};

export default QuestionsFrequentes;