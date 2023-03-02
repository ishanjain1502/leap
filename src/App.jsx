import React from "react";
import "./App.css";
import Squares from "./components/Squares";

function App() {
  return (
    <div className="App">
        <Squares max_width={400} step_size={100} />
    </div>
  );
}

export default App;
