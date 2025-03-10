import React from "react";

const Player = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "2rem",
      }}
    >
      Player 1: <strong style={{ color: "cyan" }}> X </strong>and Player 2:
      <strong style={{ color: "orange" }}> O</strong>
    </div>
  );
};

export default Player;
