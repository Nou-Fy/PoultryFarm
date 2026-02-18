/**
 * Dashboard.jsx
 *
 * Ce composant représente la page de tableau de bord de la ferme. Il affiche un message de bienvenue et inclut une carte pour visualiser les données de la ferme.
 */

import Button from "../components/button/Button";
import CardShow from "../components/card/Card";
import Input from "../components/input/Input";
import { useState } from "react";
import { createCard } from "../utilss";

export default function Dashboard() {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");

  const [cards, setCards] = useState({
  "users": [
    {
      "id": 1,
      "name": "Alice Martin",
      "email": "alice@example.com",
      "role": "Admin",
      "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
    },
    {
      "id": 2,
      "name": "Thomas Bernard",
      "email": "thomas@example.com",
      "role": "User",
      "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas"
    },
    {
      "id": 3,
      "name": "Léa Petit",
      "email": "lea@example.com",
      "role": "Editor",
      "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Lea"
    }
  ],
  "status": "success",
  "count": 3
})


  const handleClick = () => {
    setResult(textInput);
    setTextInput("");
    createCard(textInput);
  };



  return (
    <>
      <div className="dashboard">
        <div>
          <Input value={textInput} onChange={setTextInput} />
          <Button onClick={handleClick} label="Description" />
          <p>{result}</p>
        </div>

        <h1>Dashboard</h1>
        <p>Bienvenue dans le Dashboard de la ferme</p>
      </div>
      <div className="card-container">
        {cards?.users?.map((card)=> (
          <CardShow key={card.id} data={card} />
        ))}
      </div>
    </>
  );
}
