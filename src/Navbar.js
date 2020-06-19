import React, { useRef } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function () {
  const backHome = useRef(null);
  const dispatch = useDispatch();

  const playLists = useSelector((state) => state.playLists);
  const changePlayList = (e) => {
    const action = { type: "CHANGE_PLAYLIST", playList: e.target.alt };
    dispatch(action);
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1
            id="title"
            onClick={() => {
              backHome.current.click();
              dispatch({
                type: "CHANGE_PLAYLIST",
                playList: "37i9dQZEVXbMDoHDwVN2tF",
              });
            }}
          >
            Hooked
          </h1>
          <Link to="/" id="back_home" ref={backHome}></Link>
        </Col>
        <Col xs={5} md={3}>
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
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
