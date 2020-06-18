import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function () {
  const playLists = useSelector((state) => state.playLists);
  const dispatch = useDispatch();
  const changePlayList = (e) => {
    const action = { type: "CHANGE_PLAYLIST", playList: e.target.alt };
    dispatch(action);
  };
  return (
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
  );
}
