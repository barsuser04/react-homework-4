import React, { useState } from "react";
import Button from "../../UI/button/Button";
import styled from "styled-components";

const Modal = ({ onClose, addMovie }) => {
  const [movieName, setMovieName] = useState("");
  const [movieUrl, setMovieUrl] = useState("");
  const [movieRating, setMovieRating] = useState("");

  function titleChangeHandler(e) {
    setMovieName(e.target.value);
  }

  function urlChangeHandler(e) {
    setMovieUrl(e.target.value);
  }

  function ratingChangeHandler(e) {
    setMovieRating(e.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: movieName,
      url: movieUrl,
      rating: movieRating,
      id: Date.now().toString(),
    };

    addMovie(data);
    onClose();
  };

  return (
    <>
      <Bacdrop></Bacdrop>
      <Container>
        <FormStyled>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "600",
            }}
          >
            Название Фильма:
            <input
              type="text"
              placeholder="название..."
              onChange={titleChangeHandler}
              value={movieName}
              style={{ height: "30px", width: "100%", marginTop: "10px" }}
            />
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              fontWeight: "600",
            }}
          >
            Сссылка:
            <input
              type="url"
              placeholder="http/....."
              onChange={urlChangeHandler}
              value={movieUrl}
              style={{ height: "30px", width: "100%", marginTop: "10px" }}
            />
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              fontWeight: "600",
            }}
          >
            Оценка:
            <input
              type="number"
              placeholder="от 1 дo 5"
              onChange={ratingChangeHandler}
              value={movieRating}
              min="1"
              max="5"
              style={{ height: "30px", width: "100%", marginTop: "10px" }}
            />
          </label>

          <BtnDiv>
            <Button
              marginRight="20px"
              backgroundColor="brown"
              onClick={onClose}
            >
              Отмена
            </Button>
            <Button backgroundColor="gray" onClick={submitHandler}>
              Добавить
            </Button>
          </BtnDiv>
        </FormStyled>
      </Container>
    </>
  );
};

export default Modal;

const Bacdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: #000000e8;
  z-index: 100;
`;

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 44%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 600px;
  padding: 20px;
  border: 2px solid black;
  background-color: #fff;
  /* margin-left: 500px; */
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  margin-right: 10px;
`;
