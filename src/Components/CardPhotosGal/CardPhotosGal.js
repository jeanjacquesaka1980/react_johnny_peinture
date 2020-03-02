import React, { useState } from "react";

// import bootsrap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const CardPhotosGal = ({ src1, src2, cardTitle, cardText, children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image className="img-modal" src={src1} rounded />
          <Image className="img-modal" src={src2} rounded />
        </Modal.Body>
        <Modal.Footer>
          <Button block className="btn-infos mt-3" onClick={handleClose}>
            Fermer la fenêtre
          </Button>
        </Modal.Footer>
      </Modal>

      <Col lg={6} md={6} sm={12} xs={12}>
        <Card className="border-0 shadow mt-3 w-100">
          <Card.Body>
            {children}
            <Card.Title className="mb-3">{cardTitle}</Card.Title>
            <Card.Text className="font-italic text-reset">{cardText}</Card.Text>
            {/* <Card.Text className="text-uppercase font-weight-bold">
              Avant
            </Card.Text>
            <Card.Img className="avant-apres mb-3" variant="top" src={src1} />
            <Card.Text className="text-uppercase font-weight-bold">
              Après
            </Card.Text>
            <Card.Img className="avant-apres" variant="bottom" src={src2} /> */}
            <Button block className="btn-infos mt-3" onClick={handleShow}>
              Voir les photos
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default CardPhotosGal;
