import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [style, setStyle] = useState({
    backgroundColor: "rgb(251,34,92)"
  });
  const [start, setStart] = useState(false);

  const generateRandomBackgroundColor = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    setStyle({
      backgroundColor: bgColor
    });
    return bgColor;
  };

  return (
    <div className="wrapper" style={style}>
      <div className="text-wrapper">
        <h1>Background color : {style.backgroundColor}</h1>
        <div className="button-wrapper">
          <button onClick={generateRandomBackgroundColor}>Change Color</button>
        </div>
      </div>
    </div>
  );
};

export default App;
