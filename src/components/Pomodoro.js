import React from "react";
import "./pomodoro.css";

const Pomodoro = () => {
  return (
    <div className="pomodoro_container">
      <div className="pomodoro-title">
        <h2>Focus your energy for 25 minutes!</h2>
      </div>

      <div className="pomodoro-timer">
        <span className="pomodoro-timer__minutes">00</span>
        <span className="pomodoro-timer__seconds">:</span>
        <span className="pomodoro-timer__seconds">00</span>
      </div>

      <div className="pomodoro-buttons">
        <button className="button start">Start</button>
        <button className="button stop">Stop</button>
        <button className="button reset">Reset</button>
      </div>
    </div>
  );
};

export default Pomodoro;
