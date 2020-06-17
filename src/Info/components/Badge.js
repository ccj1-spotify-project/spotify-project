import React from "react";
import { Badge } from "react-bootstrap";

export default function ({ script }) {
  return (
    <h2>
      <Badge variant="success">{script}</Badge>
    </h2>
  );
}

// <Badge script = 'xxx' />
// でxxxのバッジとして使うことができます!!
// https://react-bootstrap.github.io/components/badge/
