import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import SecondsCounter from "./components/SecondsCounter";

const root = ReactDOM.createRoot(document.getElementById("root"));

let seconds = 0;

const render = () => {
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={seconds} />
    </React.StrictMode>
  );
};

render(); // Initial render

setInterval(() => {
  seconds++;
  render();
}, 1000);