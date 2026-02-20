import Button from "../components/button/ButtonPush";
import Card from "../components/card/Card";
import Input from "../components/input/Input";
import ModalCard from "../components/UI/Modal";
import { useState } from "react";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");
  const [cards, setCards] = useState({
    users: [
      { id: 1, name: "Alice Martin", email: "alice@example.com" },
      { id: 2, name: "Thomas Bernard", email: "thomas@example.com" },
    ],
    currentName: "", // On stocke le nom ici plutôt que de casser la structure
  });

  // Gestion du changement dans l'input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setTextInput(value);
    setCards((prev) => ({
      ...prev,
      currentName: value,
    }));
  };

  const handleClick = () => {
    setResult(textInput);
    setTextInput("");
    // handlechange() a été supprimé d'ici car il n'y a pas d'événement 'e'
    console.log("Nom validé :", textInput);
  };

  return (
    <>
      <div className="dashboard">

        <div>
          {/* Le bouton qui déclenche l'ouverture */}
          <button onClick={openModal}>Afficher les détails d'Alice</button>

          {/* On appelle le composant en lui passant l'état et la fonction de fermeture */}
          <ModalCard show={isModalOpen} onHide={closeModal} />
        </div>

        <div>
          <Input value={textInput} label="Andrana" onChange={handleInputChange} />
          <Button onClick={handleClick} type="submit" label="Description" />
          <p>Résultat : {result}</p>
        </div>
      </div>

      <div className="card-container">
        {cards.users.map((user) => (
          <Card key={user.id} data={user} />
        ))}
      </div>
    </>
  );
}
