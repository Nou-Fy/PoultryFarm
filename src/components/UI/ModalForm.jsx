import Modal from "react-bootstrap/Modal";
import { useStore } from "../../store";
import ButtonPush from "../button/ButtonPush";
import { Form } from "react-bootstrap";

// On récupère show et onHide via la déstructuration des props
export function ModalForm({ show, onHide }) {
  const { closeModal } = useStore();

  return (
    <Modal
      style={{
        height: "300px",
      }}
      show={show}
      onHide={onHide}>
      <div>
        <div
          style={{
            padding: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <ButtonPush
            style={{
              position: "absolute",
              right: "1rem",
              top: "1rem",
              padding: "2px 10px",
            }}
            label="Fermer"
            clickedLabel="Fermé"
            onClick={onHide}
          />
          <label
            onClick={closeModal}
            onMouseEnter={(e) => {
              e.target.style.color = "red";
              e.target.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "rgba(255, 0, 0, 0.5)";
              e.target.style.transform = "scale(1)";
            }}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "rgba(255, 0, 0, 0.5)",
              cursor: "pointer",
              transition: "0.2s ease",
            }}>
            X
          </label>
        </div>

        <Form style={{ padding: "10px" }}>
          <Form.Group controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Entrez votre nom" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Entrez votre email" />
          </Form.Group>

          <ButtonPush
            label="Soumettre"
            clickedLabel="Soumis"
            onClick={() => alert("Formulaire soumis")}
          />
        </Form>
      </div>
    </Modal>
  );
}

export default ModalForm;
