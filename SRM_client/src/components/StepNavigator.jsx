// StepNavigator.jsx

import React from "react";
import "./StepNavigator.css";

function StepNavigator({ steps, currentStep, setCurrentStep, onAddStep }) {
  return (
    <div className="step-navigator">
      {/* 横スクロール対応のステップコンテナ */}
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
      {/* プラスボタン */}
      <button className="add-button" onClick={onAddStep}>
        ＋
      </button>
    </div>
  );
}

export default StepNavigator;
