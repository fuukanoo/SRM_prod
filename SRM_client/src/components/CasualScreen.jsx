import React from "react";

function CasualScreen({ profileData = {} }) {
  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

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

      {/* エントリー画面の情報 */}
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
            <a
              href={URL.createObjectURL(profileData.resume)}
              download={profileData.resume.name}
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              📎
            </a>
          ) : (
            "未アップロード"
          )}
        </p>
        <p>
          <strong>職務経歴書:</strong>{" "}
          {profileData.careerSheet ? (
            <a
              href={URL.createObjectURL(profileData.careerSheet)}
              download={profileData.careerSheet.name}
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              📎
            </a>
          ) : (
            "未アップロード"
          )}
        </p>
      </div>
    </div>
  );
}

export default CasualScreen;
