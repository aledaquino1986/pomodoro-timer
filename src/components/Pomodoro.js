import React, { useState, useRef } from "react";
import "./pomodoro.css";

const createTimeWithTwoDigits = time => {
  return time.toString().padStart(2, "0");
};

const initialTitle = [
  "Use your time efficiently!",
  "Focus your energy for 25 minutes"
];

const INITIAL_TIMELEFT = 25 * 60;

const setInitialTitle = arrayOfTitles => {
  const title = arrayOfTitles[Math.floor(Math.random() * arrayOfTitles.length)];
  return title;
};

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIMELEFT);
  const [title, setTitle] = useState(setInitialTitle(initialTitle));
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) {
          return timeLeft - 1;
        } else {
          resetTimer();
          return 0;
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Do not give up! You can do it!");
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle(setInitialTitle(initialTitle));
    setTimeLeft(INITIAL_TIMELEFT);
  };

  const minutes = createTimeWithTwoDigits(Math.floor(timeLeft / 60));
  const seconds = createTimeWithTwoDigits(timeLeft - minutes * 60);

  return (
    <div className="pomodoro_container">
      <div className="pomodoro-title">
        <h2>{title}</h2>
      </div>

      <div className="pomodoro-timer">
        <span className="pomodoro-timer__minutes">{minutes}</span>
        <span className="pomodoro-timer__seconds">:</span>
        <span className="pomodoro-timer__seconds">{seconds}</span>
      </div>

      <div className="pomodoro-buttons">
        <button className="button start" onClick={startTimer}>
          Start
        </button>
        <button className="button stop" onClick={stopTimer}>
          Stop
        </button>
        <button className="button reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
