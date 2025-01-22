import React, { useState } from "react";
import ProfileScreen from "./components/ProfileScreen";
import CasualScreen from "./components/CasualScreen";
import FirstInterviewScreen from "./components/FirstInterviewScreen";
import SecondInterviewScreen from "./components/SecondInterviewScreen";
import OtherScreens from "./components/OtherScreens";
import FinalInterviewScreen from "./components/FinalInterviewScreen";

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

  const [interviewData, setInterviewData] = useState({
    firstInterview: {
      technicalSkills: "",
      problemSolving: "",
      logicalThinking: "",
      leadership: "",
      careerVision: "",
    },
    secondInterview: {
      technicalSkills: "",
      problemSolving: "",
      logicalThinking: "",
      leadership: "",
      careerVision: "",
    },
  });

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <ProfileScreen profileData={profileData} setProfileData={setProfileData} />, // エントリー
    <OtherScreens profileData={profileData} casualData={casualData} />, // 調整中
    <CasualScreen
      profileData={profileData}
      casualData={casualData}
      setCasualData={setCasualData} // カジュアル
    />,
    <OtherScreens profileData={profileData} casualData={casualData} />, // 調整中
    <FirstInterviewScreen
      interviewData={interviewData}
      setInterviewData={setInterviewData} 
    />, // 1次面接
    <OtherScreens profileData={profileData} casualData={casualData} />, // 調整中
    <SecondInterviewScreen
      interviewData={interviewData}
      setInterviewData={setInterviewData} 
    />, // 2次面接
    <OtherScreens profileData={profileData} casualData={casualData} />, // 調整中
    <FinalInterviewScreen
      interviewData={interviewData}
      setInterviewData={setInterviewData} 
    />, // 最終
    <OtherScreens profileData={profileData} casualData={casualData} />, // 調整中
  ];

  const stepLabels = [
    "エントリー",
    "調整中",
    "カジュアル",
    "調整中",
    "1次面接",
    "調整中",
    "2次面接",
    "調整中",
    "最終",
    "調整中",
  ];

  return (
    <div className="app-container">
      <div className="step-container">
        {stepLabels.map((label, index) => (
          <div
            key={index}
            className={`step ${index === currentStep ? "highlight" : ""}`}
            onClick={() => setCurrentStep(index)}
            style={{ cursor: "pointer" }}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="container">{steps[currentStep]}</div>
      <div className="button-container">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          disabled={currentStep === 0}
          className="nav-button"
        >
          前へ
        </button>
        <button
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
          disabled={currentStep === steps.length - 1}
          className="nav-button"
        >
          次へ
        </button>
      </div>
    </div>
  );
}

export default App;
