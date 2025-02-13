import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

function FinalInterviewScreen({ profileData, finalInterviewData, setFinalInterviewData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFinalInterviewData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const handleSaveFinalInterview = async () => {
    // profileData.id に候補者登録時のIDがセットされている前提
    const finalInterviewPayload = {
      candidate_id: profileData.id,
      technical_skills: finalInterviewData.technicalSkills,
      problem_solving: finalInterviewData.problemSolving,
      logical_thinking: finalInterviewData.logicalThinking,
      leadership: finalInterviewData.leadership,
      career_vision: finalInterviewData.careerVision,
    };

    console.log("送信前の最終面接データ:", finalInterviewPayload);
    try {
      const response = await fetch("http://localhost:3001/final_interviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalInterviewPayload),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("最終面接データ登録成功", data);
        // 必要に応じて、成功時の通知表示や画面遷移の処理を追加
      } else {
        console.error("最終面接データ登録エラー:", response.statusText);
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        最終面接
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="専門知識・技術力"
          name="technicalSkills"
          value={finalInterviewData.technicalSkills}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="問題解決能力"
          name="problemSolving"
          value={finalInterviewData.problemSolving}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="論理的思考力"
          name="logicalThinking"
          value={finalInterviewData.logicalThinking}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="リーダーシップ・主体性"
          name="leadership"
          value={finalInterviewData.leadership}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="キャリアビジョン"
          name="careerVision"
          value={finalInterviewData.careerVision}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button variant="contained" onClick={handleSaveFinalInterview} sx={{ fontSize: "0.8rem" }}>
          保存
        </Button>
      </Box>
    </Container>
  );
}

export default FinalInterviewScreen;
