import "./Card.css";
import ButtonPush from "../button/ButtonPush";
import { useStore } from "../../store";

export default function Card({ data }) {
  const { openModal,selectPoule, clearSelection } = useStore();
  return (
    <div className="card">
      <img src={data.avatar} alt={data.nom} className="cards_photos" />
      <div>
        <h2>Nom : {data.nom}</h2>
        <p>Race : {data.race}</p>
        <p>Age : {data.ageMois} mois</p>
        <p>Ponte / semaine : {data.ponteParSemaine}</p>
        <p>Couleur œuf : {data.couleurOeuf}</p>
        <p>Santé : {data.sante}</p>
        <p>Date d'arrivée : {data.dateArrivee}</p>
        <p>Notes : {data.notes}</p>
        
      </div>
      <div className="card-buttons">
        <ButtonPush
          className="card-button"
          type="button"
          label="Modifier"
          clickedLabel="Modifier !"
          onClick={() => {
            selectPoule(data);
            openModal();
          }}
        />

        <ButtonPush
          className="card-button"
          type="reset"
          label="Annuler"
          clickedLabel="Reset !"
          onClick={() => {
            clearSelection();
          }}
        />
      </div>
    </div>
  );
}
