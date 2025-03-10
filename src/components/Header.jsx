import React from "react";

const Header = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "3rem",
        margin: "40px",
      }}
    >
      Welcome to <strong style={{ color: "red" }}>Tic </strong>Tac{" "}
      <strong style={{ color: "red" }}>Toe </strong> game!
    </div>
  );
};

export default Header;
