import React from "react";

// import bootsrap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CardGaranties = ({ children, CardTitle, CardText }) => {
  return (
    <Col xs={12}>
      <Card className="border-0 shadow mt-3">
        {children}
        <Card.Body>
          <Card.Title className="mb-3">{CardTitle}</Card.Title>
          <Card.Text>{CardText}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardGaranties;
