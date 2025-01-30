// App.jsx

import React, { useState, useEffect } from "react";
import StepNavigator from "./components/StepNavigator";
import ProfileScreen from "./components/ProfileScreen";
import EntryAdjustmentScreen from "./components/EntryAdjustmentScreen";
import CasualScreen from "./components/CasualScreen";
import FirstInterviewScreen from "./components/FirstInterviewScreen";
import FirstInterviewAdjustmentScreen from "./components/FirstInterviewAdjustmentScreen";
import SecondInterviewScreen from "./components/SecondInterviewScreen";
import SecondInterviewAdjustmentScreen from "./components/SecondInterviewAdjustmentScreen";
import FinalInterviewScreen from "./components/FinalInterviewScreen";
import FinalInterviewAdjustmentScreen from "./components/FinalInterviewAdjustmentScreen";
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

  const [firstInterviewData, setFirstInterviewData] = useState({
    technicalSkills: "",
    problemSolving: "",
    logicalThinking: "",
    leadership: "",
    careerVision: "",
  });

  const [secondInterviewData, setSecondInterviewData] = useState({
    technicalSkills: "",
    problemSolving: "",
    logicalThinking: "",
    leadership: "",
    careerVision: "",
  });

  const [finalInterviewData, setFinalInterviewData] = useState({
    technicalSkills: "",
    problemSolving: "",
    logicalThinking: "",
    leadership: "",
    careerVision: "",
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
    "最終面接",
    "調整中"
  ]);

  const [steps, setSteps] = useState([
    { id: 1, type: 'profile' },
    { id: 2, type: 'entryAdjustment' },
    { id: 3, type: 'casual' },
    { id: 4, type: 'other' },
    { id: 5, type: 'firstInterview' },
    { id: 6, type: 'firstInterviewAdjustment' },
    { id: 7, type: 'secondInterview' },
    { id: 8, type: 'secondInterviewAdjustment' },
    { id: 9, type: 'finalInterview' },
    { id: 10, type: 'finalInterviewAdjustment' },
    { id: 11, type: 'other' },
  ]);

  const handleAddStep = () => {
    const newStepName = `フォロー面談 ${stepLabels.length - 10 + 1}`; // ステップラベルの位置に応じて番号を調整
    setStepLabels((prev) => [...prev, newStepName]);
    setSteps((prev) => [...prev, { id: prev.length + 1, type: 'followUp' }]);
  };

  const renderStep = () => {
    const step = steps[currentStep];
    switch (step.type) {
      case 'profile':
        return <ProfileScreen profileData={profileData} setProfileData={setProfileData} />;
      case 'entryAdjustment':
        return <EntryAdjustmentScreen profileData={profileData} setProfileData={setProfileData} />;
      case 'casual':
        return (
          <CasualScreen
            profileData={profileData}
            casualData={casualData}
            setCasualData={setCasualData}
          />
        );
      case 'firstInterview':
        return (
          <FirstInterviewScreen
            firstInterviewData={firstInterviewData}
            setFirstInterviewData={setFirstInterviewData}
          />
        );
      case 'firstInterviewAdjustment':
        return (
          <FirstInterviewAdjustmentScreen
            profileData={profileData}
            casualData={casualData}
            firstInterviewData={firstInterviewData}
          />
        );
      case 'secondInterview':
        return (
          <SecondInterviewScreen
            secondInterviewData={secondInterviewData}
            setSecondInterviewData={setSecondInterviewData}
          />
        );
      case 'secondInterviewAdjustment':
        return (
          <SecondInterviewAdjustmentScreen
            profileData={profileData}
            casualData={casualData}
            firstInterviewData={firstInterviewData}
            secondInterviewData={secondInterviewData}
          />
        );
      case 'finalInterview':
        return (
          <FinalInterviewScreen
            finalInterviewData={finalInterviewData}
            setFinalInterviewData={setFinalInterviewData}
          />
        );
      case 'finalInterviewAdjustment':
        return (
          <FinalInterviewAdjustmentScreen
            profileData={profileData}
            casualData={casualData}
            firstInterviewData={firstInterviewData}
            secondInterviewData={secondInterviewData}
            finalInterviewData={finalInterviewData}
          />
        );
      case 'followUp':
        return <OtherScreens profileData={profileData} casualData={casualData} />;
      case 'other':
        return <OtherScreens profileData={profileData} casualData={casualData} />;
      default:
        return <div>ステップが見つかりません。</div>;
    }
  };

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const fixedWidth = 1280;
      const fixedHeight = 720;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const scaleX = windowWidth / fixedWidth;
      const scaleY = windowHeight / fixedHeight;

      const newScale = Math.min(scaleX, scaleY);
      setScale(newScale);
    };

    // 初回レンダリング時にスケールを設定
    updateScale();

    // リサイズ時にスケールを更新
    window.addEventListener("resize", updateScale);

    // クリーンアップ
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="app-container">
      <div
        className="scale-wrapper"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <div className="container">
          {/* ステップナビゲーション */}
          <StepNavigator
            steps={stepLabels}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            onAddStep={handleAddStep} // onAddStep を渡す
          />
          {/* 現在のステップのコンテンツ */}
          {renderStep()}
        </div>
      </div>
    </div>
  );
}

export default App;
