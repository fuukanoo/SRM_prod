import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

function SecondInterviewScreen({ profileData, secondInterviewData, setSecondInterviewData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSecondInterviewData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  // 「保存」ボタン押下時の処理
  const handleSaveSecondInterview = async () => {
    // profileData.id が候補者登録後にセットされている前提
    const secondInterviewPayload = {
      candidate_id: profileData.id,
      technical_skills: secondInterviewData.technicalSkills,
      problem_solving: secondInterviewData.problemSolving,
      logical_thinking: secondInterviewData.logicalThinking,
      leadership: secondInterviewData.leadership,
      career_vision: secondInterviewData.careerVision,
    };

    console.log("送信前の二次面接データ:", secondInterviewPayload);
    try {
      const response = await fetch("http://localhost:3001/second_interviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(secondInterviewPayload),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("二次面接データ登録成功", data);
        // 必要に応じて、成功時のフィードバック（通知表示や画面遷移）を追加
      } else {
        console.error("二次面接データ登録エラー:", response.statusText);
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        二次面接
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="専門知識・技術力"
          name="technicalSkills"
          value={secondInterviewData.technicalSkills}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="問題解決能力"
          name="problemSolving"
          value={secondInterviewData.problemSolving}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="論理的思考力"
          name="logicalThinking"
          value={secondInterviewData.logicalThinking}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="リーダーシップ・主体性"
          name="leadership"
          value={secondInterviewData.leadership}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="キャリアビジョン"
          name="careerVision"
          value={secondInterviewData.careerVision}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button variant="contained" onClick={handleSaveSecondInterview} sx={{ fontSize: "0.8rem" }}>
          保存
        </Button>
      </Box>
    </Container>
  );
}

export default SecondInterviewScreen;
