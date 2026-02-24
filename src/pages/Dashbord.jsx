// pages/Dashboard.jsx
import Card from "../components/card/Card";
import ModalForm from "../components/UI/ModalForm";
import { useStore } from "../store";
import { useEffect } from "react";

export default function Dashboard() {
  const {
    cards,
    loading,
    error,
    isModalOpen,
    fetchCards,
    closeModal,
  } = useStore();

  useEffect(() => {
    if (!cards) {
      fetchCards(); // Fetch seulement si pas déjà chargé
    }
  }, [fetchCards, cards]);

  return (
    <div>
      <div className="dashboard">
        <div>
          {/* Modal contrôlé par le store */}
          <ModalForm show={isModalOpen} onHide={closeModal} />
        </div>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p>Erreur : {error}</p>
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
