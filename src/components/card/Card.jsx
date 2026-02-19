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

export default async function Card() {
  const [done, setDone] = React.useState(false);

  const posts = await fetchFromJsonPlaceholder("/posts");
  console.log(posts);

  useEffect(() => {
    async function loadData() {
      try {
        const todos = await fetchFromJsonPlaceholder("/todos?_limit=10");
        setTodos(todos);
      } catch (err) {
        // gérer l'erreur (afficher message, etc.)
      }
    }
    loadData();
  }, []);

  return (
    <div className="card" style={{}}>
      <h2>Un élément</h2>

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
