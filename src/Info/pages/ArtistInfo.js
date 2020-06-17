import React from "react";
import PlayWidget from "../components/PlayWidget.js";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import Jumbotron from "../components/Jumbotron";
import Badge from "../components/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

export default function () {
  return (
    <Container>
      <Row>
        <Col>1 of 1</Col>
        <Col>
          <Badge script="Artist" />
          <Jumbotron />
        </Col>
        <Col>
          <Image src="https://i.scdn.co/image/f88e08cf9132c7facc2ee9fbdd1be3924b5c5a74" />
        </Col>
      </Row>
    </Container>
  );
}
