import "../styles.css";
import React, { useState } from "react";

// -----------------------------------------

import { Container, Row, Button } from "react-bootstrap";

// -----------------------------------------

import cardDataJSON from "../data.json";
import HeaderComp from "../Component/HeaderComp";
import CardFullbody from "../Pages/CardFullbody";

export default function HomePage() {
  var varForNavData = cardDataJSON.forNavData;
  var varForRowOneData = cardDataJSON.forRowOneData[0];
  var varForCardData = cardDataJSON.cardData;

  const [viewMoreState, setViewMoreState] = useState(false);

  const [stateCategory, setstatCategory] = useState(varForCardData);

  const categoryFilter = (catName) => {
    const updateCategoryFilter = varForCardData.filter((ele) => {
      return ele.country === catName;
    });

    switch (catName) {
      case "View All":
        setViewMoreState(false);
        return setstatCategory(varForCardData);

      case "New York":
      case "Mumbai":
      case "Paris":
      case "London":
        setViewMoreState(false);
        return setstatCategory(updateCategoryFilter);

      default:
        setViewMoreState(false);
        return setstatCategory(varForCardData);
    }
  };

  return (
    <>
      <Container>
        <HeaderComp
          varForRowOneData={varForRowOneData}
          varForNavData={varForNavData}
          categoryFilter={categoryFilter}
        />
        <CardFullbody
          varForCardData={varForCardData}
          viewMoreState={viewMoreState}
          stateCategory={stateCategory}
        />
        <Row className="containerRow3">
          <Button
            variant="secondary"
            onClick={() => setViewMoreState(!viewMoreState)}
          >
            show More
          </Button>
        </Row>
      </Container>
    </>
  );
}
