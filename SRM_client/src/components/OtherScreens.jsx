import React from "react";
import { Container, Card, Typography, TextField } from "@mui/material";


function OtherScreens({ followupData, setFollowupData }) {
  // followupData 用の入力ハンドラーを定義
  const handleFollowupInputChange = (e) => {
    const { name, value } = e.target;
    setFollowupData((prevData) => ({
      ...prevData,
      [name]: value,
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
          value={followupData.notes || ""}
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
