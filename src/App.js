import react, { useState } from "react";
import HOC from "./HOC";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <HOC />
    </div>
  );
}

export default App;
