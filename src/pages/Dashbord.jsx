import Card from "../components/card/Card";
import ModalForm from "../components/UI/ModalForm";
import { useCallback, useEffect } from "react";
import { useCardStore } from "../store/useCardStore";
import { useUIStore } from "../store/useUIStore";
import { useSelectionStore } from "../store/useSelectionStore";

export default function Dashboard() {
  const { cards, loading, fetchCards, error } = useCardStore();
  const { isModalOpen, closeModal } = useUIStore();
  const { selectPoule } = useSelectionStore();

  const loadData = useCallback(() => {
    if (!cards) {
      fetchCards();
    }
  }, [cards, fetchCards]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      <div>
        {loading ? (
          <p>Chargement...</p>
        ) : error ? (
          <p>Erreur : {error}</p>
        ) : (
          <div className="card-container">
            {cards?.poules?.map((poule) => (
              <Card
                key={poule.id}
                data={poule}
                onClick={() => selectPoule(poule)}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="dashboard">
        <div>
          <ModalForm show={isModalOpen} onHide={closeModal} />
        </div>
      </div>
    </div>
  );
}
