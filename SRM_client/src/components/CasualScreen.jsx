import React from "react";

function CasualScreen({ profileData, casualData = {}, setCasualData }) {
  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCasualData((prev) => ({ ...prev, [name]: value }));
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

      {/* 判定結果および各項目の入力欄 */}
      <div className="info-section">
        <div>
          <label>判定結果:</label>
          <input
            type="text"
            name="result"
            value={casualData.result || ""}
            onChange={handleInputChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>誠実:</label>
          <input
            type="text"
            name="honesty"
            value={casualData.honesty || ""}
            onChange={handleInputChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>チーム愛:</label>
          <input
            type="text"
            name="teamLove"
            value={casualData.teamLove || ""}
            onChange={handleInputChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>愛嬌:</label>
          <input
            type="text"
            name="charm"
            value={casualData.charm || ""}
            onChange={handleInputChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>謙虚さと責任感:</label>
          <input
            type="text"
            name="humility"
            value={casualData.humility || ""}
            onChange={handleInputChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>備考記入欄:</label>
          <textarea
            name="notes"
            value={casualData.notes || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default CasualScreen;
