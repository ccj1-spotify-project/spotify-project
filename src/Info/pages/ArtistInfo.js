import React from "react";
import PlayWidget from "../components/PlayWidget.js";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import Jumbotron from "../components/Jumbotron";
import Badge from "../components/Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

export default function () {
  const src = useSelector((state) => state.targetArtistObj.photo);
  const name = useSelector((state) => state.targetArtistObj.name);
  const description = useSelector((state) => state.targetArtistObj.description);
  const uri = useSelector((state) => state.targetArtistObj.uri);
  return (
    // <Container>
    //   <Row>
    //     <Col className="col-xs-10">
    //       <PlayWidget uri={uri} />
    //     </Col>
    //     <Col className="col-xs-10">
    //       <Badge script={name} />
    //       <Jumbotron script={description} />
    //     </Col>
    //     <Col className="col-xs-10">
    //       <Image src={src} />
    //     </Col>
    //   </Row>
    // </Container>
    <div className="information">
      <PlayWidget uri={uri} />
      <div className="description">
        <Badge script={name} />
        <div className="info">{description}</div>
      </div>
      <img src={src} className="photo" />
    </div>
  );
}
