import React, { useState } from "react";
import Button from "../../UI/button/Button";
import styled from "styled-components";
import BtnNodal from "../../UI/modalka/BtnNodal";
import { createPortal } from "react-dom";

const MovieItem = ({ title, url, rating, removeHandler, id }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  console.log("deleteModal", deleteModal);

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

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
          alt="myMovie"
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
            onClick={toggleDeleteModal}
            height="60px"
            width="100px"
            backgroundColor="red"
          >
            Delete
          </Button>
          {deleteModal
            ? createPortal(
                <BtnNodal
                id={id}
                  onDelete={toggleDeleteModal}
                  removeHandler={removeHandler}
                />,
                document.getElementById("modal")
              )
            : null}
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
