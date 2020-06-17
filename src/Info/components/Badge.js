import React from "react";
import { Badge } from "react-bootstrap";

export default function ({ script }) {
  return <Badge variant="success">{script}</Badge>;
}

// <Badge script = 'xxx' />
// でxxxのバッジとして使うことができます!
// https://react-bootstrap.github.io/components/badge/
