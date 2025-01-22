import React, { useState } from "react";
import ProfileScreen from "./components/ProfileScreen";
import CasualScreen from "./components/CasualScreen";
import AdjustmentScreen from "./components/AdjustmentScreen";
import OtherScreens from "./components/OtherScreens";

function App() {
  const [profileData, setProfileData] = useState({
    name: "",
    furigana: "",
    photo: null,
    education: "",
    career: "",
    resume: null,
    careerSheet: null,
  });

  const [casualData, setCasualData] = useState({
    result: "",
    honesty: "",
    teamLove: "",
    charm: "",
    humility: "",
    notes: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <ProfileScreen profileData={profileData} setProfileData={setProfileData} />,
    <AdjustmentScreen profileData={profileData} />,
    <CasualScreen profileData={profileData} />,
    <AdjustmentScreen profileData={profileData} />,
    ...Array(6).fill(<OtherScreens profileData={profileData} casualData={casualData} />),
  ];

  const stepLabels = [
    "エントリー",
    "調整中",
    "カジュアル",
    "調整中",
    "1次",
    "調整中",
    "2次",
    "調整中",
    "最終",
    "調整中",
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div>
      {/* ステップ表示 */}
      <div className="step-container">
        {stepLabels.map((label, index) => (
          <div
            key={index}
            className={`step ${index === currentStep ? "highlight" : ""}`}
            onClick={() => handleStepClick(index)}
            style={{ cursor: "pointer" }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* 現在の画面 */}
      <div style={{ marginBottom: "20px" }}>{steps[currentStep]}</div>

      {/* 次へ/前へボタン */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          style={{
            padding: "10px 20px",
            backgroundColor: currentStep === 0 ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: currentStep === 0 ? "not-allowed" : "pointer",
          }}
        >
          前へ
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          style={{
            padding: "10px 20px",
            backgroundColor: currentStep === steps.length - 1 ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: currentStep === steps.length - 1 ? "not-allowed" : "pointer",
          }}
        >
          次へ
        </button>
      </div>
    </div>
  );
}

export default App;
