import React from "react";

// import bootsrtap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// import icons
import { FaRegGrinStars } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const CardTemoignages = ({ cardTitle, cardText }) => {
  return (
    <Col lg={6} md={6} sm={12} xs={12}>
      <Card className="border-0 shadow mt-3">
        <FaRegGrinStars className="mt-3 icon" />
        <Card.Body>
          <Card.Title className="mb-3">{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
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
