import React from "react";
import "../../styles/counter.css";
const Counter = ({ seconds }) => {
  const leadingZeros = seconds.toString().padStart(6, "0");

  return (
    <div
      style={{ backgroundColor: "black", padding: "2rem" }}
      className="container text-center"
    >
      <div className="sRow">
        {/* Clock Icon */}
        <div className="secondstimer">
          <div className="timer-content">
            <i className="fa-regular fa-clock fa-spin fa-1xl"></i>
          </div>
        </div>

        {/* Actual Timer Digits  */}
        {leadingZeros.split("").map((digit, index) => (
          <div key={index} className="secondstimer">
            <div className="timer-content">{digit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
