import React from "react";

// import reactbootstrap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CardCompetences = ({ src, CardTitle}) => {
  return (
    <Col xs={12}>
      <Card className="border-0 shadow mt-3">
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title className="my-auto">{CardTitle}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCompetences;
