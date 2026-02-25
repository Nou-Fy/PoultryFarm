import { useStore } from "../store";

export default function AjoutChicken() {
  const { selectedPoule, valeuInput } = useStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    valeuInput(name, value);
  };

  return (
    <>
      <div>
        <p>Nom :</p>
        <Input
          name="nom"
          type="text"
          placeholder="Nom de la poule"
          value={selectedPoule?.nom || ""}
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange(); // Assure-toi que cette fonction est bien définie
          }}
        />
      </div>

      <div>
        <p>Race :</p>
        <Input
          name="race"
          type="text"
          placeholder="Race de la poule"
          value={selectedPoule?.race || ""}
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange(); // Assure-toi que cette fonction est bien définie
          }}
        />
      </div>

      <div>
        <p>Âge :</p>
        <Input
          name="ageMois"
          type="number"
          placeholder="Âge de la poule"
          value={selectedPoule?.ageMois || ""}
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange(); // Assure-toi que cette fonction est bien définie
          }}
        />
      </div>

      <div>
        <p>Ponte / semaine :</p>
        <Input
          name="ponteParSemaine"
          type="number"
          placeholder="Ponte par semaine"
          value={selectedPoule?.ponteParSemaine || ""}
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange(); // Assure-toi que cette fonction est bien définie
          }}
        />
      </div>

      <div>
        <p>Couleur œuf :</p>
        <Input
          name="couleurOeuf"
          type="text"
          placeholder="Couleur de l'œuf"
          value={selectedPoule?.couleurOeuf || ""}
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange(); // Assure-toi que cette fonction est bien définie
          }}
        />
      </div>

      <div>
        <p>Date entrée :</p>
        <Input
          name="dateArrivee"
          type="date"
          value={selectedPoule?.dateArrivee || ""}
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange(); // Assure-toi que cette fonction est bien définie
          }}
        />
      </div>

      <div>
        <p>Notes :</p>
        <Input
          name="notes"
          type="text"
          placeholder="Notes"
          value={selectedPoule?.notes}
          onChange={(e) => {
            valeuInput(e.target.name, e.target.value);
            handleChange(); // Assure-toi que cette fonction est bien définie
          }}
        />
      </div>
    </>
  );
}
