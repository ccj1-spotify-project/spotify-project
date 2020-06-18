import React from "react";
import PlayWidget from "../components/PlayWidget.js";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import Jumbotron from "../components/Jumbotron";
import Badge from "../components/Badge";
import { useSelector } from "react-redux";

export default function () {
  const src = useSelector((state) => state.targetArtistObj.photo);
  const name = useSelector((state) => state.targetArtistObj.name);
  const description = useSelector((state) => state.targetArtistObj.description);
  const uri = useSelector((state) => state.targetArtistObj.uri);
  return (
    <Container>
      <Row>
        <Col>
          <PlayWidget uri={uri} />
        </Col>
        <Col>
          <Badge script={name} />
          <Jumbotron script={description} />
        </Col>
        <Col>
          <Image src={src} />
        </Col>
      </Row>
    </Container>
  );
}
