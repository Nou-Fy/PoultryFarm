import Modal from "react-bootstrap/Modal";
import Card from "../card/Card";
import ButtonPush from "../button/ButtonPush";

// On récupère show et onHide via la déstructuration des props
export function ModalCard({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <div style={{ padding: '20px' }}>
        <ButtonPush 
          label="Fermer" 
          clickedLabel="Fermé" 
          onClick={onHide} 
        />
        <Card data={{ name: "Alice Martin", email: "alice@example.com" }} />
      </div>
    </Modal>
  );
}

export default ModalCard;