import React from "react";
import "../../styles/SecondsCounter.css";

const SecondsTimer = ({ value }) => {
  return (
    <div className="secondstimer">
      <div className="timer-content">
        {value === "icon" ? (
          <i className="fa-regular fa-clock fa-2xl"></i>
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  );
};

export default SecondsTimer;