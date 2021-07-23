import React from "react";
import ReactDOM from "react-dom";

function App() {
  const image =
    "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";
  const titleObj = {
    title: "Light Bulb!"
  };
  return (
    <div className="App">
      <h2>{titleObj.title}</h2>
      <img src={image} alt="lightbulb" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
