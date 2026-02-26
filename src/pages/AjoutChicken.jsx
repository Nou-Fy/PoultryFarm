import { useStore } from "../store";
import Input from "../components/input/Input";
import ButtonPush from "../components/button/ButtonPush";

export default function AjoutChicken() {
  const { selectedPoule, valeuInput, clearSelection, closeModal } = useStore();
  const addPoule = useStore((state) => state.addPoule);

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    valeuInput(name, value);
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
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange;
          }}
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
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange;
          }}
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
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange;
          }}
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
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange;
          }}
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
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange;
          }}
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
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange;
          }}
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
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange;
          }}
        />
      </div>

      <ButtonPush
        label="Soumettre"
        clickedLabel="Soumis"
        onClick={() => {
          console.log("Poule modifiée :", selectedPoule);
          addPoule(selectedPoule);
          console.log(selectedPoule);
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
    </>
  );
}
