import React from "react";

// import bootsrap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CardGaranties = ({ children, cardTitle, cardText }) => {
  return (
    <Col lg={6} md={6} sm={12} xs={12}>
      <Card className="border-0 shadow mt-3">
        {children}
        <Card.Body>
          <Card.Title className="mb-3">{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardGaranties;
