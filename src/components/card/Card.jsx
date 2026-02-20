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

export default function Card({ data }) {
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <p>{data.email}</p>

      <div className="cards_photos">
        <Imgzone
          src={"src/assets/Banniere_1.jpg"}
          alt="Banniere_1"
        />
      </div>

      <div className="card-buttons">
          <ButtonPush type="button" />
        
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
