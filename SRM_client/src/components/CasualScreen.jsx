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
      {/* ヘッダー */}
      <Typography variant="h4" gutterBottom>
        個人プロフィール
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={4}>
        {/* 左側セクション: 写真・名前・詳細 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            {/* 写真と名前 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 2
              }}
            >
              <Box
                sx={{
                  width: 120,
                  height: 160,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  backgroundImage: photoPreviewUrl ? `url(${photoPreviewUrl})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "2px solid #ddd",
                  cursor: "pointer"
                }}
                onClick={() => {
                  /* ここでファイル入力のトリガー処理を実装 */
                }}
              >
                {!photoPreviewUrl && (
                  <Typography variant="body2" align="center" sx={{ mt: 6 }}>
                    写真未挿入
                  </Typography>
                )}
              </Box>
              <Box sx={{ flex: 1 }}>
                {/* 名前・ふりがなの入力フィールドに変更 */}
                <TextField
                  fullWidth
                  label="ふりがな"
                  name="furigana"
                  value={profileData.furigana || ""}
                  onChange={handleInputChange}
                  placeholder="やまだ たろう"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  fullWidth
                  label="名前"
                  name="name"
                  value={profileData.name || ""}
                  onChange={handleInputChange}
                  placeholder="山田 太郎"
                  variant="outlined"
                  size="small"
                  sx={{ mt: 2 }}
                />
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* プロフィール詳細 */}
            <Box sx={{ mb: 1 }}>
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
                    href={URL.createObjectURL(profileData.resume)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📎 ダウンロード
                  </Link>
                ) : (
                  "未アップロード"
                )}
              </Typography>
              <Typography variant="body1">
                <strong>職務経歴書:</strong>{" "}
                {profileData.careerSheet ? (
                  <Link
                    href={URL.createObjectURL(profileData.careerSheet)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📎 ダウンロード
                  </Link>
                ) : (
                  "未アップロード"
                )}
              </Typography>
            </Box>
          </Card>
        </Grid>

        {/* 中央セクション: 判定結果～謙虚さと責任感 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
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
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
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
