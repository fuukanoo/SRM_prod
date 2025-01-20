import React from "react";

function OtherScreens({ profileData }) {
  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

  const downloadFile = (file) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.click();
  };

  return (
    <div className="container">
      {/* 名前と写真 */}
      <div className="flex-row">
        <div
          className="profile-photo"
          style={{
            backgroundImage: photoPreviewUrl ? `url(${photoPreviewUrl})` : "none",
          }}
        >
          {!photoPreviewUrl && <p>写真未挿入</p>}
        </div>
        <div>
          <h3>{profileData.furigana || "フリガナ未入力"}</h3>
          <h2>{profileData.name || "名前未入力"}</h2>
        </div>
      </div>

      {/* 最終学歴、職務経歴、ファイルダウンロード */}
      <div className="info-section">
        <p>
          <strong>最終学歴:</strong> {profileData.education || "未入力"}
        </p>
        <p>
          <strong>職務経歴:</strong> {profileData.career || "未入力"}
        </p>
        <p>
          <strong>履歴書:</strong>{" "}
          {profileData.resume ? (
            <span
              onClick={() => downloadFile(profileData.resume)}
              style={{ cursor: "pointer", color: "#007bff" }}
            >
              📎
            </span>
          ) : (
            "未アップロード"
          )}
        </p>
        <p>
          <strong>職務経歴書:</strong>{" "}
          {profileData.careerSheet ? (
            <span
              onClick={() => downloadFile(profileData.careerSheet)}
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

export default OtherScreens;
