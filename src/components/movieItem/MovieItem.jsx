import React from "react";
import Button from "../../UI/button/Button";
import styled from "styled-components";

const MovieItem = ({ title, url, rating, removeHandler, id }) => {
  return (
    <DivContainer>
      <div style={{ width: "40%" }}>
        <img
          style={{
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
          }}
          width="100%"
          height="100%"
          src={url}
        />
      </div>

      <div
        style={{
          width: "60%",
          backgroundColor: "darkGray",
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
        }}
      >
        <h2 style={{ marginLeft: "20px" }}>{title}</h2>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Paragraph>{rating}/5</Paragraph>
          <Button
            height="60px"
            width="100px"
            onClick={() => removeHandler(id)}
            backgroundColor="red"
          >
            Delete
          </Button>
          <Button height="60px" width="80px" backgroundColor="yellow">
            Edit
          </Button>
        </div>
      </div>
    </DivContainer>
  );
};

export default MovieItem;

const Paragraph = styled.p`
  width: 50px;
  text-align: center;
  padding: 10px;
  background-color: orange;
  border-radius: 10px;
  font-weight: 600;
  color: aliceblue;
`;

const DivContainer = styled.div`
  border: 2px solid black;
  width: 700px;
  margin-left: 400px;
  margin-top: 30px;
  display: flex;
  height: 200px;
  border-radius: 20px;
`;
