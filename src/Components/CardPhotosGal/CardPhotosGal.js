import React from "react";

// import bootsrap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CardPhotosGal = ({ src1, src2, CardTitle, CardText }) => {
  return (
    <Col xs={12}>
      <Card className="border-0 shadow mt-3">
        <Card.Body>
          <Card.Title className="mb-3">{CardTitle}</Card.Title>
          <Card.Text className="font-italic text-reset">{CardText}</Card.Text>
          <Card.Text className="text-uppercase font-weight-bold">Avant</Card.Text>
          <Card.Img className="avant-apres mb-3" variant="top" src={src1} />
          <Card.Text className="text-uppercase font-weight-bold">Après</Card.Text>
          <Card.Img className="avant-apres" variant="bottom" src={src2} />
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardPhotosGal;
