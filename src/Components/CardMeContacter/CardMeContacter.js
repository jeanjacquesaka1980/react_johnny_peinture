import React from "react";

// import bootsrtap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CardMeContacter = ({ children, CardTitle, Contact, CardText, map }) => {
  return (
    <Col lg={6} md={6} sm={12} xs={12}>
      <Card className="border-0 shadow mt-3">
        {children}
        <Card.Body>
          <Card.Title className="mb-3">{CardTitle}</Card.Title>
          <Card.Title className="mb-3 blue">{Contact}</Card.Title>
          <Card.Text>{CardText}</Card.Text>
          {map}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardMeContacter;
