import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Divider,
  TextField,
  Link
} from "@mui/material";

function CasualScreen({ profileData, casualData, setCasualData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCasualData((prev) => ({ ...prev, [name]: value }));
  };

  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* 中央セクション: 判定結果～謙虚さと責任感 */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, boxShadow: 3 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  fullWidth
                  label="判定結果"
                  name="result"
                  value={casualData.result || ""}
                  onChange={handleInputChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="誠実"
                  name="honesty"
                  value={casualData.honesty || ""}
                  onChange={handleInputChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="チーム愛"
                  name="teamLove"
                  value={casualData.teamLove || ""}
                  onChange={handleInputChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="愛嬌"
                  name="charm"
                  value={casualData.charm || ""}
                  onChange={handleInputChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="謙虚さと責任感"
                  name="humility"
                  value={casualData.humility || ""}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Box>
            </Card>
          </Grid>
  
          {/* 右側セクション: 備考記入欄 */}
          <Grid item xs={12} md={6}>
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
          </Grid>
        </Grid>
      </Container>
    );
}

export default CasualScreen;
