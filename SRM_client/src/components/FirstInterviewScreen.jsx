import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

function FirstInterviewScreen({profileData, firstInterviewData, setFirstInterviewData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFirstInterviewData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  // 「保存」ボタン押下時の処理
  const handleSaveFirstInterview = async () => {
    // candidate_id は profileData.id がセットされている前提
    const firstInterviewPayload = {
      candidate_id: profileData.id,
      technical_skills: firstInterviewData.technicalSkills,
      problem_solving: firstInterviewData.problemSolving,
      logical_thinking: firstInterviewData.logicalThinking,
      leadership: firstInterviewData.leadership,
      career_vision: firstInterviewData.careerVision,
    };

    console.log("送信前の一次面接データ:", firstInterviewPayload);
    try {
      const response = await fetch("http://localhost:3001/first_interviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(firstInterviewPayload),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("一次面接データ登録成功", data);
        // 成功時のフィードバックなど
      } else {
        console.error("一次面接データ登録エラー:", response.statusText);
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        一次面接
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="専門知識・技術力"
          name="technicalSkills"
          value={firstInterviewData.technicalSkills}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="問題解決能力"
          name="problemSolving"
          value={firstInterviewData.problemSolving}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="論理的思考力"
          name="logicalThinking"
          value={firstInterviewData.logicalThinking}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="リーダーシップ・主体性"
          name="leadership"
          value={firstInterviewData.leadership}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="キャリアビジョン"
          name="careerVision"
          value={firstInterviewData.careerVision}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button variant="contained" onClick={handleSaveFirstInterview} sx={{ fontSize: "0.8rem" }}>
          保存
        </Button>
      </Box>
    </Container>
  );
}

export default FirstInterviewScreen;
