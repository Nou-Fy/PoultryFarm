
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
import Input from "../input/Input";
import "./Card.css";

export default function Card() {
  return (
    <div className="card" style={{ }}>
      <h2>Un élément</h2>
      <Input
        label="Description de l'élément"
        type="text"
        placeholder="Entrez le nom de l'élément"
      />

      <Button type="submit" label="Envoyer" clickedLabel="Merci !" />
    </div>
  );
}
