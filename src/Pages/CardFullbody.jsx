import "../styles.css";
import React from "react";

// -----------------------------------------

import { Row } from "react-bootstrap";
import CardColComp from "../Component/CardColComp";

// -----------------------------------------

// -------------------------------------------------------

export default function CardFullbody({
  varForCardData,
  viewMoreState,
  stateCategory
}) {
  return (
    <Row className="containerRow2">
      <Row>
        {/* ------------------------------------forCardMap-------------------------------------------------------------- */}

        {!viewMoreState
          ? stateCategory
              .slice(0, 6)
              .map((val, ind) => <CardColComp cardDataval={val} key={ind} />)
          : varForCardData.map((val, ind) => (
              <CardColComp cardDataval={val} key={ind} />
            ))}

        {/* ------------------------------------forCardMap-------------------------------------------------------------- */}
      </Row>
    </Row>
  );
}
