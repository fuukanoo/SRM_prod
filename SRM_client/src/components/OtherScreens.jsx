import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";

function OtherScreens({ profileData, casualData }) {
  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* 名前と写真 */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Box
          sx={{
            width: 120,
            height: 160,
            backgroundColor: "#e0e0e0",
            borderRadius: 1,
            backgroundImage: photoPreviewUrl ? `url(${photoPreviewUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid #ccc",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {!photoPreviewUrl && (
            <Typography variant="body2" align="center">
              写真未挿入
            </Typography>
          )}
        </Box>
        <Box>
          <Typography variant="h6">
            {profileData.furigana || "フリガナ未入力"}
          </Typography>
          <Typography variant="h4">
            {profileData.name || "名前未入力"}
          </Typography>
        </Box>
      </Box>

      {/* エントリー画面の情報 */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1">
          <strong>最終学歴:</strong> {profileData.education || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>職務経歴:</strong> {profileData.career || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>履歴書:</strong>{" "}
          {profileData.resume ? (
            <Link
              onClick={() => {
                const fileURL = URL.createObjectURL(profileData.resume);
                window.open(fileURL, "_blank");
              }}
              sx={{ cursor: "pointer", color: "#007bff" }}
            >
              📎
            </Link>
          ) : (
            "未アップロード"
          )}
        </Typography>
        <Typography variant="body1">
          <strong>職務経歴書:</strong>{" "}
          {profileData.careerSheet ? (
            <Link
              onClick={() => {
                const fileURL = URL.createObjectURL(profileData.careerSheet);
                window.open(fileURL, "_blank");
              }}
              sx={{ cursor: "pointer", color: "#007bff" }}
            >
              📎
            </Link>
          ) : (
            "未アップロード"
          )}
        </Typography>
      </Box>

      {/* カジュアル画面の情報 */}
      <Box>
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
    </Container>
  );
}

export default OtherScreens;
