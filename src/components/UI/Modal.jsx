import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "../card/Card";
import ButtonPush from "../button/ButtonPush";

export function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="button_Modal_Top">
        affiche un element
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ButtonPush label="Fermer" clickedLabel="Fermé" onClick={handleClose} />
        <Card />
      </Modal>
    </>
  );
}

export default Example;
