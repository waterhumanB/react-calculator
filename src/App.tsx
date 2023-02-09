import { useState, MouseEvent, SetStateAction } from "react";
import Digits from "./components/digits";
import Modifiers from "./components/modifiers";
import Operations from "./components/operations";
import Total from "./components/total";
import "./css/index.css";

function App() {
  const [calculation, setCalculation] = useState("");

  console.log(calculation.search("/X-+"));
  return (
    <main id="app">
      <div className="calculator">
        <Total calculation={calculation} />
        <Digits calculation={calculation} setCalculation={setCalculation} />
        <Modifiers setCalculation={setCalculation} />
        <Operations calculation={calculation} setCalculation={setCalculation} />
      </div>
    </main>
  );
}

export default App;
