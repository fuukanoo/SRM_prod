import React, { useState } from "react";
import StepNavigator from "./components/StepNavigator";
import ProfileScreen from "./components/ProfileScreen";
import EntryAdjustmentScreen from "./components/EntryAdjustmentScreen";
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

  const [stepLabels, setStepLabels] = useState([
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
  ]);

  const [steps, setSteps] = useState([
    <ProfileScreen profileData={profileData} setProfileData={setProfileData} />,
    <EntryAdjustmentScreen profileData={profileData} />,
    <CasualScreen
      profileData={profileData}
      casualData={casualData}
      setCasualData={setCasualData}
    />,
    <OtherScreens profileData={profileData} casualData={casualData} />,
    <FirstInterviewScreen
      interviewData={interviewData}
      setInterviewData={setInterviewData}
    />,
    <OtherScreens profileData={profileData} casualData={casualData} />,
    <SecondInterviewScreen
      interviewData={interviewData}
      setInterviewData={setInterviewData}
    />,
    <OtherScreens profileData={profileData} casualData={casualData} />,
    <FinalInterviewScreen
      interviewData={interviewData}
      setInterviewData={setInterviewData}
    />,
    <OtherScreens profileData={profileData} casualData={casualData} />,
  ]);

  // 新しいフォロー面談を追加する関数
  const handleAddStep = () => {
    const newStepName = "フォロー面談"; // 数字なし
    setStepLabels((prev) => [...prev, newStepName]);
    setSteps((prev) => [
      ...prev,
      <OtherScreens profileData={profileData} casualData={casualData} />,
    ]);
  };

  return (
    <div className="app-container">
      {/* ステップナビゲーション */}
      <StepNavigator
        steps={stepLabels}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onAddStep={handleAddStep}
      />

      {/* 現在のステップに対応するコンテンツ */}
      <div className="container">{steps[currentStep]}</div>
    </div>
  );
}

export default App;
