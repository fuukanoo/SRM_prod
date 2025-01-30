import React from "react";
import "./StepNavigator.css";

function StepNavigator({ steps, currentStep, setCurrentStep, onAddStep }) {
  return (
    <div className="step-navigator">
      <div className="step-container">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`step-button ${index === currentStep ? "active" : ""}`}
            onClick={() => setCurrentStep(index)}
          >
            {step}
          </button>
        ))}
      </div>
      <button className="add-button" onClick={onAddStep}>
        ＋ フォロー面談追加
      </button>
    </div>
  );
}

export default StepNavigator;
