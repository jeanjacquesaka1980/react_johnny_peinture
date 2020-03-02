import React from "react";

// import reactbootstrap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'

// import lazy-load
import LazyLoad from "react-lazyload";

const CardCompetences = ({ cardTitlePop, cardTextPop, src, cardTitle }) => {
  const popover = (
    <Popover className="shadow border-infos" id="popover-basic">
      <Popover.Title as="h3">{cardTitlePop}</Popover.Title>
      <Popover.Content>
        {cardTextPop}
      </Popover.Content>
    </Popover>
  );
  return (
    <Col xl={4} lg={6} md={6} sm={12} xs={12}>
      <Card className="border-0 shadow mt-3">
        <LazyLoad height={200} once>
          <Card.Img variant="top" src={src} />
        </LazyLoad>
        <Card.Body>
          <Card.Title className="my-auto">{cardTitle}</Card.Title>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button block className="btn-infos mt-3">Plus d'infos</Button>
          </OverlayTrigger>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCompetences;
