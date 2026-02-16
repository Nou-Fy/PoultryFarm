/**
 * Dashboard.jsx
 *
 * Ce composant représente la page de tableau de bord de la ferme. Il affiche un message de bienvenue et inclut une carte pour visualiser les données de la ferme.
 */

import React from "react";
import Card from "../components/card/Card";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Bienvenue dans le Dashboard de la ferme</p>
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
