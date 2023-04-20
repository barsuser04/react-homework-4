import React from "react";
import styled from "styled-components";

const BtnNodal = ({ onDelete, removeHandler, id }) => {
  return (
    <>
      <Wrapper onClick={onDelete}></Wrapper>
      <Container>
        <h2>ты действительно хочешь удалить?</h2>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button onClick={onDelete}>cancel</button>
          <button onClick={() => removeHandler(id)}>yes</button>
        </div>
      </Container>
    </>
  );
};

export default BtnNodal;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  z-index: 100;
`;

const Container = styled.div`
  width: 28%;
  height: 20%;
  position: fixed;
  left: 37%;
  top: 40%;
  background-color: rgb(81, 237, 125);
  border-radius: 20px;
  padding: 15px;
  z-index: 999;
`;
