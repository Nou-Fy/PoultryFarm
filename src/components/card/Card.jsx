/**
 *
 * @param {string} label
 * @param {string} clickedLabel
 * @param {string} type
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} onClick
 * @returns
 */

import React from "react";
import Button from "../button/Button";
import "./Card.css";

export default function Card({data}) {

  return (
    <div className="card" style={{}}>
      <h2>{data?.name}</h2>
      <p>{data?.email}</p>

     <div className="card-buttons">
       <Button className="card-button"
        type="reset"
        label="Annuler"
        clickedLabel="Annulé"
      />
      <Button className="card-button"
        type="submit"
        label="Envoyer"
        clickedLabel="Merci !"
      />
     </div>
    </div>
  );
}
