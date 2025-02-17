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
      pass_fail: secondInterviewData.pass_fail,
      sincerity: secondInterviewData.sincerity,
      team_love: secondInterviewData.team_love,
      charm: secondInterviewData.charm,
      humility: secondInterviewData.humility,
      notes: secondInterviewData.notes,
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
          label="合否"
          name="pass_fail"
          value={secondInterviewData.pass_fail}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="誠実"
          name="sincerity"
          value={secondInterviewData.sincerity}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="チーム愛"
          name="team_love"
          value={secondInterviewData.team_love}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="愛嬌"
          name="charm"
          value={secondInterviewData.charm}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="謙虚さと責任感"
          name="humility"
          value={secondInterviewData.humility}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="備考"
          name="notes"
          value={secondInterviewData.notes}
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
