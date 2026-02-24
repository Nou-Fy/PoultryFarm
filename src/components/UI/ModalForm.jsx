import Modal from "react-bootstrap/Modal";
import { useStore } from "../../store";
import ButtonPush from "../button/ButtonPush";
import { Form } from "react-bootstrap";
import Input from "../input/Input";

// On récupère show et onHide via la déstructuration des props
export function ModalForm({ show, onHide }) {
  const { closeModal, selectedPoule } = useStore();

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  };

  const labelStyle = {
    minWidth: "180px",
    textAlign: "left",
  };

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
            onClick={onHide || selectedPoule}
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
          <h4>Formulaire de modification</h4>

          <div style={rowStyle}>
            <p style={labelStyle}>Nom :</p>
            <Input
              type="text"
              placeholder="Nom de la poule"
              value={selectedPoule?.nom || ""}
              
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Race :</p>
            <Input
              type="text"
              placeholder="Race de la poule"
              value={selectedPoule?.race || ""}
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Âge :</p>
            <Input
              type="number"
              placeholder="Âge de la poule"
              value={selectedPoule?.age || ""}
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Ponte / semaine :</p>
            <Input
              type="number"
              placeholder="Ponte par semaine"
              value={selectedPoule?.ponteParSemaine || ""}
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Couleur œuf :</p>
            <Input
              type="text"
              placeholder="Couleur de l'œuf"
              value={selectedPoule?.couleurOeuf || ""}
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Date entrée :</p>
            <Input type="date" value={selectedPoule?.dateArrivee || ""} />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Notes :</p>
            <Input
              type="text"
              placeholder="Notes"
              value={selectedPoule?.notes || ""}
            />
          </div>

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
