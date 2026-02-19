/**
 *
 * @param {string} label
 * @param {string} clickedLabel
 * @param {string} type
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} onClick
 * @returns
 */

import React from "react";
import Button from "../button/ButtonPush";
import "./Card.css";
import ButtonPush from "../button/ButtonPush";
import { Imgzone } from "../imgzone/Imgzone";

export default function Card() {

  
  return (
    <div className="card" style={{}}>
      <h2>{data?.name}</h2>
      <p>{data?.email}</p>

      <div>
        <Imgzone src={done} alt="Banniere_1" />
      </div>

      <div className="card-buttons">
        <Button
          className="card-button"
          type="reset"
          label="Annuler"
          clickedLabel="Annulé"
        />
        <ButtonPush
          className="card-button"
          type="submit"
          label="Envoyer"
          clickedLabel="Merci !"
        />
      </div>
    </div>
  );
}
