import React, { useState } from "react";
import "./StepNavigator.css";

function StepNavigator({ steps, currentStep, setCurrentStep }) {
  const [stepList, setStepList] = useState(steps);

  // 新しい面談を追加
  const handleAddStep = () => {
    const newStepName = `フォロー面談 ${stepList.length + 1}`;
    setStepList([...stepList, newStepName]);
  };

  return (
    <div className="step-navigator">
      {/* 横スクロール対応のステップコンテナ */}
      <div className="step-container">
        {stepList.map((step, index) => (
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
      <button className="add-button" onClick={handleAddStep}>
        ＋
      </button>
    </div>
  );
}

export default StepNavigator;
