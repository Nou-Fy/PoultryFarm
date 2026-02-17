/**
 * Dashboard.jsx
 *
 * Ce composant représente la page de tableau de bord de la ferme. Il affiche un message de bienvenue et inclut une carte pour visualiser les données de la ferme.
 */

import { CardShow } from "../components/CardShow/CardShow";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Bienvenue dans le Dashboard de la ferme</p>
      </div>
      <div className="card-container">
        <CardShow />
      </div>
    </>
  );
}
