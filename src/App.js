import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

// -----------------------------------------
import HomePage from "./Pages/HomePage";
import CardIndividual from "./Pages/CardIndividual";
// -----------------------------------------

// -----------------------------jsonData--------------

import cardDataJSON from "./data.json";

// -----------------------------jsonData--------------

export default function App() {
  var varForCardData = cardDataJSON.cardData;

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/property/:id"
          element={<CardIndividual cardData={varForCardData} />}
        />
      </Routes>
    </>
  );
}
