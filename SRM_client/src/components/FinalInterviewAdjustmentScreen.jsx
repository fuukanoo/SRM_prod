import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Divider, Link } from "@mui/material";

function FinalInterviewAdjustmentScreen({
  profileData,
  casualData,
  firstInterviewData,
  secondInterviewData,
  finalInterviewData,
}) {
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState(null);
  const [resumePreviewUrl, setResumePreviewUrl] = useState(null);
  const [careerSheetPreviewUrl, setCareerSheetPreviewUrl] = useState(null);

  useEffect(() => {
    if (profileData.photo) {
      const url = URL.createObjectURL(profileData.photo);
      setPhotoPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [profileData.photo]);

  useEffect(() => {
    if (profileData.resume) {
      const url = URL.createObjectURL(profileData.resume);
      setResumePreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [profileData.resume]);

  useEffect(() => {
    if (profileData.careerSheet) {
      const url = URL.createObjectURL(profileData.careerSheet);
      setCareerSheetPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [profileData.careerSheet]);

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
            alignItems: "center",
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
      <Divider sx={{ mb: 3 }} />

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
              onClick={() => window.open(resumePreviewUrl, "_blank")}
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
              onClick={() => window.open(careerSheetPreviewUrl, "_blank")}
              sx={{ cursor: "pointer", color: "#007bff" }}
            >
              📎
            </Link>
          ) : (
            "未アップロード"
          )}
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />

      {/* カジュアル画面の情報 */}
      <Box sx={{ mb: 3 }}>
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
      <Divider sx={{ mb: 3 }} />

      {/* 一次面接の情報 */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          一次面接評価
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
      <Divider sx={{ mb: 3 }} />

      {/* 二次面接の情報 */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          二次面接評価
        </Typography>
        <Typography variant="body1">
          <strong>専門知識・技術力:</strong>{" "}
          {secondInterviewData.technicalSkills || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>問題解決能力:</strong>{" "}
          {secondInterviewData.problemSolving || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>論理的思考力:</strong>{" "}
          {secondInterviewData.logicalThinking || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>リーダーシップ・主体性:</strong>{" "}
          {secondInterviewData.leadership || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>キャリアビジョン:</strong>{" "}
          {secondInterviewData.careerVision || "未入力"}
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />

      {/* 最終面接の情報 */}
      <Box>
        <Typography variant="h5" gutterBottom>
          最終面接評価
        </Typography>
        <Typography variant="body1">
          <strong>専門知識・技術力:</strong>{" "}
          {finalInterviewData.technicalSkills || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>問題解決能力:</strong>{" "}
          {finalInterviewData.problemSolving || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>論理的思考力:</strong>{" "}
          {finalInterviewData.logicalThinking || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>リーダーシップ・主体性:</strong>{" "}
          {finalInterviewData.leadership || "未入力"}
        </Typography>
        <Typography variant="body1">
          <strong>キャリアビジョン:</strong>{" "}
          {finalInterviewData.careerVision || "未入力"}
        </Typography>
      </Box>
    </Container>
  );
}

export default FinalInterviewAdjustmentScreen;
