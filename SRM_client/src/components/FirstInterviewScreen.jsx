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
      pass_fail: firstInterviewData.pass_fail,
      assertion: firstInterviewData.assertion,
      excuse: firstInterviewData.excuse,
      sincerity: firstInterviewData.sincerity,
      avoidance: firstInterviewData.avoidance,
      initiative: firstInterviewData.initiative,
      teamLove: firstInterviewData.teamLove,
      charm: firstInterviewData.charm,
      humility: firstInterviewData.humility,
      factInterpretation: firstInterviewData.factInterpretation,
      notes: firstInterviewData.notes,
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
          label="合否"
          name="pass_fail"
          value={firstInterviewData.pass_fail}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="意見主張"
          name="assertion"
          value={firstInterviewData.assertion}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="言い訳"
          name="excuse"
          value={firstInterviewData.excuse}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="誠実"
          name="sincerity"
          value={firstInterviewData.sincerity}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="逃げ癖"
          name="avoidance"
          value={firstInterviewData.avoidance}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="イニシアチブ"
          name="initiative"
          value={firstInterviewData.initiative}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="チーム愛"
          name="teamLove"
          value={firstInterviewData.teamLove}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="愛嬌"
          name="charm"
          value={firstInterviewData.charm}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="謙虚さと責任感"
          name="humility"
          value={firstInterviewData.humility}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="事実と解釈"
          name="factInterpretation"
          value={firstInterviewData.factInterpretation}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        /> 
        <TextField
          fullWidth
          label="備考"
          name="notes"
          value={firstInterviewData.notes || ""}
          onChange={handleInputChange}
          multiline
          rows={5}
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
