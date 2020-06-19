import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function () {
  const playLists = useSelector((state) => state.playLists);
  const dispatch = useDispatch();
  const changePlayList = (e) => {
    const action = { type: "CHANGE_PLAYLIST", playList: e.target.alt };
    dispatch(action);
  };
  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>
          {" "}
          (wider)
          <Carousel>
            {playLists.map((playList) => {
              return (
                <Carousel.Item>
                  <img
                    onClick={changePlayList}
                    className="d-block w-100"
                    src={playList.photo}
                    alt={playList.id}
                    key={playList.id}
                  />
                  <Carousel.Caption>
                    <h3>{playList.name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}
