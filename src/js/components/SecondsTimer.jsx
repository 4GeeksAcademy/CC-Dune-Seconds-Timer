import React from "react";
import "../../styles/SecondsCounter.css";

const SecondsTimer = ({ value }) => {
  return (
    <div className="secondstimer">
      <div className="timer-content">
        {value === "icon" ? (
          <i className="fa-regular fa-clock fa-spin fa-1xl"></i>
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  );
};

export default SecondsTimer;