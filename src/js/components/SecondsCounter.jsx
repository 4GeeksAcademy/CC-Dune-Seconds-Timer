import React from "react";
import "../../styles/SecondsCounter.css";
import SecondsTimer from "./SecondsTimer";

const SecondsCounter = ({ seconds }) => {
  const padded = seconds.toString().padStart(6, "0");

  return (
    <div className="container py-5" style={{ backgroundColor: "black" }}>
      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
        {/* Clock Icon */}
        <SecondsTimer value="icon" />

        {/* Timer Digits */}
        <SecondsTimer value={padded[0]} />
        <SecondsTimer value={padded[1]} />
        <SecondsTimer value={padded[2]} />
        <SecondsTimer value={padded[3]} />
        <SecondsTimer value={padded[4]} />
        <SecondsTimer value={padded[5]} />
      </div>
    </div>
  );
};

export default SecondsCounter;