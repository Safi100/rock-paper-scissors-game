import { useState } from "react";
import "./App.css";
import Rules from "./components/Rules";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const [openRules, setOpenRules] = useState(false);
  return (
    <>
      <div className="App">
        <Header />
        <Game setOpenRules={setOpenRules} />
        <Rules openRules={openRules} setOpenRules={setOpenRules} />
      </div>
    </>
  );
}

export default App;
