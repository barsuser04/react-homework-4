import React from "react";
import "./Header.css";
import Button from "../../UI/button/Button";

const Header = ({onClick}) => {
  return (
    <div className="headerDiv">
        
      <h2>Favorite Movie</h2>
      <Button onClick={onClick} width="160px" backgroundColor="pink">
        Add Movie
      </Button>
    </div>
  );
};

export default Header;
