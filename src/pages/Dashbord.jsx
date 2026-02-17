/**
 * Dashboard.jsx
 *
 * Ce composant représente la page de tableau de bord de la ferme. Il affiche un message de bienvenue et inclut une carte pour visualiser les données de la ferme.
 */

import Button from "../components/button/Button";
import CardShow from "../components/card/Card";
import Input from "../components/input/Input";
import { useState } from "react";

export default function Dashboard() {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    setResult(textInput);
    setTextInput("");
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
        <CardShow />
        <CardShow />
        <CardShow />
        <CardShow />
        <CardShow />
        <CardShow />

      </div>
    </>
  );
}
