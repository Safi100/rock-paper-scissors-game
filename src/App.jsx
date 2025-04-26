import { useState, useEffect } from "react";
import "./App.css";
import Rules from "./components/Rules";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const savedScore = parseInt(localStorage.getItem("score"), 10);
  const [score, setScore] = useState(savedScore || 0);
  const [openRules, setOpenRules] = useState(false);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]); // runs only when score changes

  return (
    <>
      <div className="App">
        <Header score={score} />
        <Game setOpenRules={setOpenRules} setScore={setScore} />
        <Rules openRules={openRules} setOpenRules={setOpenRules} />
      </div>
    </>
  );
}

export default App;
