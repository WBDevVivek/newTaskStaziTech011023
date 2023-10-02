import "../styles.css";
import React, { useEffect, useState } from "react";

// -----------------------------------------

import { Container, Row, Col, Button, Card } from "react-bootstrap";

// -----------------------------------------

export default function HeaderComp({
  varForRowOneData,
  varForNavData,
  categoryFilter
}) {
  const [activeBTNState, setActiveBTNState] = useState(true);

  console.log(activeBTNState);

  return (
    <Row className="containerRow1">
      <Col>
        <h1>{varForRowOneData.heading}</h1>
      </Col>
      <Col>
        <p>{varForRowOneData.para}</p>
      </Col>
      <Col>
        <div className="navButtonClass">
          <div className="navButtonClassFirst">
            {varForNavData.map((val, ind) => {
              return (
                <Button
                  key={ind}
                  variant="secondary"
                  active
                  onClick={
                    (() => setActiveBTNState(!activeBTNState),
                    () => categoryFilter(val))
                  }
                >
                  {val}
                </Button>
              );
            })}
          </div>
          <div className="navButtonClassSecond">
            <Button
              variant="secondary"
              onClick={() => categoryFilter(varForNavData)}
            >
              View All
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
