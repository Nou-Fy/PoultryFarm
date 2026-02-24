import "./Card.css";
import ButtonPush from "../button/ButtonPush";
import { useStore } from "../../store";

export default function Card({ data }) {
  const { openModal } = useStore();
  return (
    <div className="card">
      <img src={data.avatar} alt={data.nom} className="cards_photos" />
      <div>
        <h2>{data.nom}</h2>
        <p>{data.race}</p>
        <p>{data.ageMois} mois</p>
        <p>{data.poids} kg</p>
        <p>{data.notes}</p>
      </div>
      <div className="card-buttons">
        <ButtonPush
          className="card-button"
          type="button"
          label="Modifier"
          clickedLabel="Modifier !"
          onClick={openModal}
        />

        <ButtonPush
          className="card-button"
          type="reset"
          label="Annuler"
          clickedLabel="Reset !"
        />
      </div>
    </div>
  );
}
