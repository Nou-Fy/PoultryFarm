/**
 *
 * @param {string} label
 * @param {string} clickedLabel
 * @param {string} type
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} onClick
 * @returns
 */

import React from "react";
import "./Card.css";
import ButtonPush from "../button/ButtonPush";

export default function Card({ data }) {
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
