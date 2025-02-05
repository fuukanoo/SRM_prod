// App.jsx

import React, { useState, useEffect, useRef } from "react";
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

// import "./components/ProfileScreen.css";
import { TextField, Button, Card, CardContent, Typography, Box, Grid, Container, Divider } from "@mui/material";

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

  // フォロー面談の追加
  const handleAddStep = () => {
    const newStepIndex = steps.length;
    const newStepName = `フォロー面談 ${newStepIndex - 10}`;
    setStepLabels((prev) => [...prev, newStepName]);
    setSteps((prev) => [...prev, { id: newStepIndex, type: "followUp" }]);
    setCurrentStep(newStepIndex);
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
  
      // 画面が小さい場合は縮小、大きい場合は拡大しない（最大値は 1）
      const newScale = Math.min(scaleX, scaleY, 1);
      setScale(newScale);
    };
  
    // 初回レンダリング時にスケールを設定
    updateScale();
  
    // ウィンドウリサイズ時にスケールを更新
    window.addEventListener("resize", updateScale);
  
    // クリーンアップ
    return () => window.removeEventListener("resize", updateScale);
  }, []);
  
  const photoPreviewUrl = profileData.photo ? URL.createObjectURL(profileData.photo) : null;
  const fileInputRef = useRef(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: files[0] }));
  };


  return (
    <Box className="app-container">
      <Box
        className="scale-wrapper"
        sx={{
          transform: `scale(${scale})`,
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            個人プロフィール
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={4}>
            {/* 左側セクション */}

            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, boxShadow: 3 }}>
                {/* 写真と名前の部分 */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 120,
                      height: 160,
                      flexShrink: 0, // 追加：サイズの縮小を防ぐ
                      backgroundColor: "#f5f5f5",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundImage: photoPreviewUrl ? `url(${photoPreviewUrl})` : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "2px solid #ddd",
                      cursor: "pointer",
                    }}
                    onClick={() => fileInputRef.current.click()}
                  >
                    {!photoPreviewUrl && <Typography variant="body2">写真未挿入</Typography>}
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      label="ふりがな"
                      name="furigana"
                      value={profileData.furigana}
                      onChange={handleInputChange}
                      placeholder="やまだ たろう"
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="名前"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      placeholder="山田 太郎"
                      variant="outlined"
                      sx={{ mt: 2 }}
                    />
                    {/* <Typography variant="body2" color="text.secondary">
                      {profileData.furigana || "やまだ たろう"}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      {profileData.name || "山田 太郎"}
                    </Typography> */}
                  </Box>
                </Box>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />

                {/* Divider で区切り */}
                <Divider sx={{ my: 2 }} />

                {/* 追加の項目群 */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="職務経歴"
                      name="career"
                      value={profileData.career || ""}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button variant="contained" component="label" fullWidth>
                      履歴書
                      <input type="file" name="resume" hidden onChange={handleFileUpload} />
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button variant="contained" component="label" fullWidth>
                      職務経歴書
                      <input type="file" name="careerSheet" hidden onChange={handleFileUpload} />
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="経路"
                      name="route"
                      value={profileData.route || ""}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="生年月日"
                      name="birthdate"
                      value={profileData.birthdate || ""}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="住所"
                      name="address"
                      value={profileData.address || ""}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="出身"
                      name="origin"
                      value={profileData.origin || ""}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="就業状況"
                      name="employmentStatus"
                      value={profileData.employmentStatus || ""}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="大学"
                      name="university"
                      value={profileData.university || ""}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="高校"
                      name="highSchool"
                      value={profileData.highSchool || ""}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>









            {/* <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, boxShadow: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 120,
                      height: 160,
                      backgroundColor: "#f5f5f5",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundImage: photoPreviewUrl ? `url(${photoPreviewUrl})` : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "2px solid #ddd",
                      cursor: "pointer",
                    }}
                    onClick={() => fileInputRef.current.click()}
                  >
                    {!photoPreviewUrl && <Typography variant="body2">写真未挿入</Typography>}
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {profileData.furigana || "やまだ たろう"}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      {profileData.name || "山田 太郎"}
                    </Typography>
                  </Box>
                </Box>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
              </Card>
            </Grid> */}
            {/* 右側セクション */}
            <Grid item xs={12} md={8}>
              <StepNavigator
                steps={stepLabels}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                onAddStep={handleAddStep}
              />
              {renderStep()}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}  




//   return (
//     <div className="app-container">
//       <div
//         className="scale-wrapper"
//         style={{
//           transform: `scale(${scale})`,
//         }}
//       >
//         <div className="container">
//           {/* ステップナビゲーション */}
//           <StepNavigator
//             steps={stepLabels}
//             currentStep={currentStep}
//             setCurrentStep={setCurrentStep}
//             onAddStep={handleAddStep} // onAddStep を渡す
//           />
//           {/* 現在のステップのコンテンツ */}
//           {renderStep()}
//         </div>
//       </div>
//     </div>
//   );

// }

export default App;
// 