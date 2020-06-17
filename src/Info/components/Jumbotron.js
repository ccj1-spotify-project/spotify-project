import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function ({ script }) {
  return (
    <Jumbotron>
      <p>{script}</p>
    </Jumbotron>
  );
}
