import "./Card.css";
import ButtonPush from "../button/ButtonPush";
import { useUIStore } from "../../store/useUIStore";
import { useSelectionStore } from "../../store/useSelectionStore";
import { useCardStore } from "../../store/useCardStore";
import { Navigate, useNavigate } from "react-router-dom";

export default function Card({ data }) {
const navigate = useNavigate();

  const { openModal } = useUIStore();
  const { selectPoule } = useSelectionStore();
  const { removePoule } = useCardStore();

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

        <div className="card-buttons">
          <ButtonPush
            className="card-button"
            type="button"
            label="Delete"
            onClick={() => {
              removePoule(data.id);
              console.log("suppr");
              navigate("/")
            }}
          />
        </div>
      </div>
    </div>
  );
}
