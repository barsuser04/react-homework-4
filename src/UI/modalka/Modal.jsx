import React, { useRef } from "react";
import Button from "../button/Button";
import styled from "styled-components";

const Modal = ({ onClose, addMovie }) => {
  const movieName = useRef();
  const movieUrl = useRef();
  const movieRating = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: movieName.current.value,
      url: movieUrl.current.value,
      rating: movieRating.current.value,
      id: Date.now().toString(),
    };

    addMovie(data);
    onClose();
  };

  return (
    <>
      <Bacdrop onClick={onClose}></Bacdrop>
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
              ref={movieName}
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
              ref={movieUrl}
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
              ref={movieRating}
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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  backdrop-filter: blur(2px);
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
