import React from "react";

function EntryAdjustmentScreen({ profileData }) {
  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

  return (
    <div className="container">
      <h2>調整中 - エントリー情報</h2>
      {/* 写真表示 */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div
          style={{
            width: "120px",
            height: "160px",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: photoPreviewUrl ? `url(${photoPreviewUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid #ccc",
            marginRight: "20px",
          }}
        >
          {!photoPreviewUrl && <p>写真未挿入</p>}
        </div>
      </div>

      {/* エントリー情報 */}
      <div className="info-section">
        <p>
          <strong>氏名:</strong> {profileData.name || "未入力"}
        </p>
        <p>
          <strong>フリガナ:</strong> {profileData.furigana || "未入力"}
        </p>
        <p>
          <strong>最終学歴:</strong> {profileData.education || "未入力"}
        </p>
        <p>
          <strong>職務経歴:</strong> {profileData.career || "未入力"}
        </p>
        <p>
          <strong>履歴書:</strong> {profileData.resume ? (
            <span
              onClick={() => {
                const fileURL = URL.createObjectURL(profileData.resume);
                window.open(fileURL, "_blank");
              }}
              style={{ cursor: "pointer", color: "#007bff" }}
            >
              📎
            </span>
          ) : (
            "未アップロード"
          )}
        </p>
        <p>
          <strong>職務経歴書:</strong> {profileData.careerSheet ? (
            <span
              onClick={() => {
                const fileURL = URL.createObjectURL(profileData.careerSheet);
                window.open(fileURL, "_blank");
              }}
              style={{ cursor: "pointer", color: "#007bff" }}
            >
              📎
            </span>
          ) : (
            "未アップロード"
          )}
        </p>
      </div>
    </div>
  );
}

export default EntryAdjustmentScreen;
