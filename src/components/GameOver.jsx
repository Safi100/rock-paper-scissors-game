import React from "react";

const ResetGame = ({ winner, handleReset }) => {
  return (
    <div className="game__over__div">
      <h2>{winner === "player" ? "You Win" : "You Lose"}</h2>
      <button onClick={handleReset}>Play again</button>
    </div>
  );
};

export default ResetGame;
