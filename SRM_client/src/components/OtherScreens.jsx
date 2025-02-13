import React from "react";
import { Container, Card, Typography, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

function OtherScreens({profileData, followupData, setFollowupData }) {
  // URLから followupId を取得（例: "followUp1", "followUp2" など）
  const { followupId } = useParams();

  // 現在のフォロー面談のメモ（存在しなければ空文字）
  const currentNotes = followupData[followupId] || "";

  const handleFollowupInputChange = (e) => {
    const { value } = e.target;
    setFollowupData((prevData) => ({
      ...prevData,
      [followupId]: value, // followupId をキーにして更新
    }));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card sx={{ p: 3, boxShadow: 3 }}>
        <Typography variant="h6" gutterBottom>
          備考記入欄
        </Typography>
        <TextField
          fullWidth
          name="notes"
          value={currentNotes}
          onChange={handleFollowupInputChange}
          multiline
          rows={5}
          variant="outlined"
        />
      </Card>
    </Container>
  );
}

export default OtherScreens;
