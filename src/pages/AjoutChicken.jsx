import Input from "../components/input/Input";
import ButtonPush from "../components/button/ButtonPush";
import { useSelectionStore } from "../store/useSelectionStore";
import { useCardStore } from "../store/useCardStore";
import { useUIStore } from "../store/useUIStore";

export default function AjoutChicken() {

  const {selectedPoule, clearSelection, updateDraftField} = useSelectionStore();
  const {addPoule} = useCardStore();
  const { closeModal } = useUIStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    updateDraftField(name, value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <p>Nom :</p>
        <Input
          name="nom"
          type="text"
          placeholder="Nom de la poule"
          value={selectedPoule?.nom || ""}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <p>Race :</p>
        <Input
          name="race"
          type="text"
          placeholder="Race de la poule"
          value={selectedPoule?.race || ""}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <p>Âge :</p>
        <Input
          name="ageMois"
          type="number"
          placeholder="Âge de la poule"
          value={selectedPoule?.ageMois || ""}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <p>Ponte / semaine :</p>
        <Input
          name="ponteParSemaine"
          type="number"
          placeholder="Ponte par semaine"
          value={selectedPoule?.ponteParSemaine || ""}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <p>Couleur œuf :</p>
        <Input
          name="couleurOeuf"
          type="text"
          placeholder="Couleur de l'œuf"
          value={selectedPoule?.couleurOeuf || ""}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <p>Date entrée :</p>
        <Input
          name="dateArrivee"
          type="date"
          value={selectedPoule?.dateArrivee || ""}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <p>Notes :</p>
        <Input
          name="notes"
          type="text"
          placeholder="Notes"
          value={selectedPoule?.notes || ""}
          onChange={handleChange}
        />
      </div>

      <ButtonPush
        label="Soumettre"
        clickedLabel="Soumis"
        onClick={() => {
          addPoule(selectedPoule);

          alert(
            "Vérification des données :\n" +
              "------------------------\n" +
              `Nom: ${selectedPoule.nom}\n` +
              `Race: ${selectedPoule.race}\n` +
              `Âge: ${selectedPoule.ageMois}`,
          );

          clearSelection();
          closeModal();
        }}
      />
    </>
  );
}
