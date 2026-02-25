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
    selectPoule,
  } = useStore();

  useEffect(() => {
    if (!cards) {
      fetchCards(); 
    }
  }, [fetchCards, cards]);

  return (
    <div>
      <div className="dashboard">
        <div>
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
            <Card key={poule.id} data={poule} onClick={() => selectPoule(poule)} />
          ))}
        </div>
      )}
    </div>
  );
}
