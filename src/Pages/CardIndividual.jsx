import "../styles.css";
import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

// -----------------------------------------

import { Container, Button } from "react-bootstrap";

// -----------------------------------------

import CardColComp from "../Component/CardColComp";

// ------------------------------------------------------

export default function CardIndividual({ cardData }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cartId, setCartId] = useState(id);

  useEffect(() => {
    setCartId(id - 1);
  }, [id]);

  return (
    <Container className="cardIndividualContainer">
      <CardColComp cardDataval={cardData[cartId]} />
      <Button
        variant="secondary"
        onClick={() => {
          navigate(`/`);
        }}
      >
        goHome
      </Button>
    </Container>
  );
}
