import React from "react";
import "./CasualScreen.css";

function CasualScreen({ profileData, casualData, setCasualData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCasualData((prev) => ({ ...prev, [name]: value }));
  };

  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

  return (
    <div className="casual-screen">
      <div className="header">
        <h2>個人プロフィール</h2>
      </div>

      <div className="content">
        {/* 左側: 写真と名前 */}
        <div className="left-section">
          <div className="photo-name">
            <div
              className="photo"
              style={{
                backgroundImage: photoPreviewUrl
                  ? `url(${photoPreviewUrl})`
                  : "none",
              }}
            >
              {!photoPreviewUrl && <p>写真未挿入</p>}
            </div>
            <div className="name">
              <h3 className="furigana">{profileData.furigana || "フリガナ未入力"}</h3>
              <h3 className="kanji-name">{profileData.name || "名前未入力"}</h3>
            </div>
          </div>

          {/* 最終学歴～職務経歴書 */}
          <div className="profile-details">
            <p>
              <strong>最終学歴:</strong> {profileData.education || "未入力"}
            </p>
            <p>
              <strong>職務経歴:</strong> {profileData.career || "未入力"}
            </p>
            <p>
              <strong>履歴書:</strong>{" "}
              {profileData.resume ? (
                <a href={URL.createObjectURL(profileData.resume)} target="_blank" rel="noopener noreferrer">
                  📎 ダウンロード
                </a>
              ) : (
                "未アップロード"
              )}
            </p>
            <p>
              <strong>職務経歴書:</strong>{" "}
              {profileData.careerSheet ? (
                <a href={URL.createObjectURL(profileData.careerSheet)} target="_blank" rel="noopener noreferrer">
                  📎 ダウンロード
                </a>
              ) : (
                "未アップロード"
              )}
            </p>
          </div>
        </div>

        {/* 中央: 判定結果～謙虚さと責任感 */}
        <div className="center-section">
          <div className="evaluation">
            <div className="evaluation-row">
              <label>判定結果</label>
              <input
                type="text"
                name="result"
                value={casualData.result || ""}
                onChange={handleInputChange}
                className="red-input"
              />
            </div>
            <div className="evaluation-row">
              <label>誠実</label>
              <input
                type="text"
                name="honesty"
                value={casualData.honesty || ""}
                onChange={handleInputChange}
                className="red-input"
              />
            </div>
            <div className="evaluation-row">
              <label>チーム愛</label>
              <input
                type="text"
                name="teamLove"
                value={casualData.teamLove || ""}
                onChange={handleInputChange}
                className="red-input"
              />
            </div>
            <div className="evaluation-row">
              <label>愛嬌</label>
              <input
                type="text"
                name="charm"
                value={casualData.charm || ""}
                onChange={handleInputChange}
                className="red-input"
              />
            </div>
            <div className="evaluation-row">
              <label>謙虚さと責任感</label>
              <input
                type="text"
                name="humility"
                value={casualData.humility || ""}
                onChange={handleInputChange}
                className="red-input"
              />
            </div>
          </div>
        </div>

        {/* 右側: 備考記入欄 */}
        <div className="right-section">
          <label>備考記入欄</label>
          <textarea
            name="notes"
            value={casualData.notes || ""}
            onChange={handleInputChange}
            rows="5"
            className="red-textarea"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default CasualScreen;
