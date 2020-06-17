import React from "react";
import { Image } from "react-bootstrap";

export default function ({ src }) {
  return <Image src={src} thumbnail />;
}
// <Image src = 'xxx' />
// でxxxのimageとして使うことができます!
// https://react-bootstrap.github.io/components/images/
