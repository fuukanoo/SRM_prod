import React from "react";
import { Container, Box, Typography, Divider, Link, Grid } from "@mui/material";

function FirstInterviewAdjustmentScreen({ profileData, casualData, firstInterviewData }) {
  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* カジュアル面談結果 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h5" gutterBottom>
                カジュアル
              </Typography>
              <Typography variant="body1">
                <strong>判定結果:</strong> {casualData.result || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>誠実:</strong> {casualData.honesty || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>チーム愛:</strong> {casualData.teamLove || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>愛嬌:</strong> {casualData.charm || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>謙虚さと責任感:</strong> {casualData.humility || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>備考記入欄:</strong> {casualData.notes || "未入力"}
              </Typography>
            </Box>
          </Grid>
  
          {/* 1次面接結果 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h5" gutterBottom>
                1次面接
              </Typography>
              <Typography variant="body1">
                <strong>専門知識・技術力:</strong>{" "}
                {firstInterviewData.technicalSkills || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>問題解決能力:</strong>{" "}
                {firstInterviewData.problemSolving || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>論理的思考力:</strong>{" "}
                {firstInterviewData.logicalThinking || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>リーダーシップ・主体性:</strong>{" "}
                {firstInterviewData.leadership || "未入力"}
              </Typography>
              <Typography variant="body1">
                <strong>キャリアビジョン:</strong>{" "}
                {firstInterviewData.careerVision || "未入力"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
}

export default FirstInterviewAdjustmentScreen;
