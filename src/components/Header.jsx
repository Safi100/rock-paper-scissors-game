import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading__logo">
        Rock
        <br />
        Paper
        <br />
        Scissors
      </h1>
      <div className="heading__score">
        <h4>Score</h4>
        <span className="score_value">0</span>
      </div>
    </header>
  );
};

export default Header;
