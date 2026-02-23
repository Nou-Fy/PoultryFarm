import Card from "../components/card/Card";
import { useState } from "react";
import ModalForm from "../components/UI/ModalForm";
import { useEffect } from "react";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // src/components/MonComposant.jsx
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/initial-users.json") // fichier doit être dans public/data/
      .then((res) => {
        if (!res.ok) throw new Error("Erreur chargement");
        return res.json();
      })
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
   <div>
    <div className="dashboard">
        <div>
          {/* Le bouton qui déclenche l'ouverture */}
          <button onClick={openModal}>Afficher les détails d'Alice</button>

          {/* On appelle le composant en lui passant l'état et la fonction de fermeture */}
          <ModalForm show={isModalOpen} onHide={closeModal} />
        </div>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div className="card-container">
          {cards?.poules?.map((poule) => (
            <Card key={poule.id} data={poule} />
          ))}
        </div>
      )}
   </div>
  );
}
