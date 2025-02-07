import React from "react";
import { Container, Card, Typography, TextField } from "@mui/material";

function OtherScreens({ profileData, casualData, handleInputChange }) {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card sx={{ p: 3, boxShadow: 3 }}>
        <Typography variant="h6" gutterBottom>
          備考記入欄
        </Typography>
        <TextField
          fullWidth
          name="notes"
          value={casualData.notes || ""}
          onChange={handleInputChange}
          multiline
          rows={5}
          variant="outlined"
        />
      </Card>
    </Container>
  );
}

export default OtherScreens;
