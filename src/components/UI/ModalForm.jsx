import Modal from "react-bootstrap/Modal";
import { useStore } from "../../store";
import ButtonPush from "../button/ButtonPush";
import { Form } from "react-bootstrap";
import Input from "../input/Input";

export function ModalForm({ show, onHide }) {
  const { closeModal, selectPoule, selectedPoule, clearSelection } = useStore();

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    // On vérifie que 'name' existe pour éviter d'écraser l'état par erreur
    if (name) {
      selectPoule({
        ...selectedPoule,
        [name]: value,
      });
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <div>
        <div
          style={{
            padding: "15px",
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
            onClick={() => {
              clearSelection();
              onHide();
            }}
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

        <Form style={{ padding: "15px" }}>
          <h4>Formulaire de modification</h4>

          <div style={rowStyle}>
            <p style={labelStyle}>Nom :</p>
            <Input
              name="nom"
              type="text"
              placeholder="Nom de la poule"
              value={selectedPoule?.nom || ""}
              onChange={handleChange}
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Race :</p>
            <Input
              name="race"
              type="text"
              placeholder="Race de la poule"
              value={selectedPoule?.race || ""}
              onChange={handleChange}
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Âge :</p>
            <Input
              name="ageMois"
              type="number"
              placeholder="Âge de la poule"
              value={selectedPoule?.ageMois || ""}
              onChange={handleChange}
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Ponte / semaine :</p>
            <Input
              name="ponteParSemaine"
              type="number"
              placeholder="Ponte par semaine"
              value={selectedPoule?.ponteParSemaine || ""}
              onChange={handleChange}
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Couleur œuf :</p>
            <Input
              name="couleurOeuf"
              type="text"
              placeholder="Couleur de l'œuf"
              value={selectedPoule?.couleurOeuf || ""}
              onChange={handleChange}
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Date entrée :</p>
            <Input
              name="dateArrivee"
              type="date"
              value={selectedPoule?.dateArrivee || ""}
              onChange={handleChange}
            />
          </div>

          <div style={rowStyle}>
            <p style={labelStyle}>Notes :</p>
            <Input
              name="notes"
              type="text"
              placeholder="Notes"
              value={selectedPoule?.notes}
              onChange={handleChange}
            />
          </div>

          <ButtonPush
            label="Soumettre"
            clickedLabel="Soumis"
            onClick={() => {
              console.log("Poule modifiée :", selectedPoule);
              useStore.getState().updatePoule(selectedPoule);
              clearSelection();
              closeModal();
              alert(
                "Vérification des données :\n" +
                  "------------------------\n" +
                  `Nom: ${selectedPoule.nom}\n` +
                  `Race: ${selectedPoule.race}\n` +
                  `Âge: ${selectedPoule.ageMois}`,
              );
            }}
          />
        </Form>
      </div>
    </Modal>
  );
}

export default ModalForm;
