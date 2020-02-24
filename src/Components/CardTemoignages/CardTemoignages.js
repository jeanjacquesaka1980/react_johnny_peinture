import React from "react";

// import bootsrtap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// import icons
import { FaRegGrinStars } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const CardTemoignages = ({ CardTitle, CardText }) => {
  return (
    <Col xs={12}>
      <Card className="border-0 shadow mt-3">
        <FaRegGrinStars className="mt-3 icon" />
        <Card.Body>
          <Card.Title className="mb-3">{CardTitle}</Card.Title>
          <Card.Text>{CardText}</Card.Text>
          <FaStar className="m-1 star" />
          <FaStar className="m-1 star" />
          <FaStar className="m-1 star" />
          <FaStar className="m-1 star" />
          <FaStar className="m-1 star" />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardTemoignages;
