/* eslint-disable react/prop-types */
import React from "react";
import { TiTick } from "react-icons/ti";
import "./Progressbar.css";

const ProgressBar = ({ progress, currentProgress, stepNames }) => {
  const renderSteps = () => {
    const stepElements = [];
    for (let i = 0; i < progress; i++) {
      stepElements.push(
        <div
          key={i}
          className={`progress-step ${i === currentProgress ? "active" : ""} ${
            i !== currentProgress && i < currentProgress ? "completed" : ""
          } flex justify-center items-center`}
        >
          {i !== currentProgress && i < currentProgress ? (
            <TiTick size={20} color="#fff" />
          ) : (
            ""
          )}
        </div>
      );

      if (i !== progress - 1) {
        stepElements.push(
          <div key={`line-${i}`} className="progress-lineContainer">
            <div
              className={`progress-line ${
                i !== currentProgress && i < currentProgress ? "completed" : ""
              }`}
            ></div>
            <div
              className={`progress-line ${
                i !== currentProgress && i < currentProgress ? "completed" : ""
              }`}
            ></div>
            <div
              className={`progress-line ${
                i !== currentProgress && i < currentProgress ? "completed" : ""
              }`}
            ></div>
            <div
              className={`progress-line ${
                i !== currentProgress && i < currentProgress ? "completed" : ""
              }`}
            ></div>
            <div
              className={`progress-line ${
                i !== currentProgress && i < currentProgress ? "completed" : ""
              }`}
            ></div>
            <div
              className={`progress-line ${
                i !== currentProgress && i < currentProgress ? "completed" : ""
              }`}
            ></div>
            <div
              className={`progress-line ${
                i !== currentProgress && i < currentProgress ? "completed" : ""
              }`}
            ></div>
            <div
              className={`progress-line ${
                i !== currentProgress && i < currentProgress ? "completed" : ""
              }`}
            ></div>
          </div>
        );
      }
    }
    return stepElements;
  };

  return (
    <>
      <div className="progress-bar">{renderSteps()}</div>
      <div className="progress-name">
        {stepNames.map((stepName, i) => (
          <p
            key={i}
            className={` ${
              i !== currentProgress && i < currentProgress
                ? "text-[#45dd5f]"
                : ""
            } text-[0.5rem] sm:text-[0.7rem]`}
          >
            {stepName}
          </p>
        ))}
      </div>
    </>
  );
};

export default ProgressBar;
