import React from "react";

function CasualScreen({ profileData, casualData, setCasualData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCasualData((prev) => ({ ...prev, [name]: value }));
  };

  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

  return (
    <div className="container">
      <h2>カジュアル</h2>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        {/* 写真表示 */}
        <div
          style={{
            width: "120px", // 横幅
            height: "160px", // 縦幅 (4:3比率)
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
        <div>
          <p>
            <strong>フリガナ:</strong> {profileData.furigana || "未入力"}
          </p>
          <p>
            <strong>名前:</strong> {profileData.name || "未入力"}
          </p>
        </div>
      </div>

      {/* 評価項目の入力 */}
      <div style={{ marginBottom: "20px" }}>
        <div>
          <label>判定結果:</label>
          <input
            type="text"
            name="result"
            value={casualData.result || ""}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>誠実:</label>
          <input
            type="text"
            name="honesty"
            value={casualData.honesty || ""}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>チーム愛:</label>
          <input
            type="text"
            name="teamLove"
            value={casualData.teamLove || ""}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>愛嬌:</label>
          <input
            type="text"
            name="charm"
            value={casualData.charm || ""}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>謙虚さ:</label>
          <input
            type="text"
            name="modesty"
            value={casualData.modesty || ""}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>責任感:</label>
          <input
            type="text"
            name="responsibility"
            value={casualData.responsibility || ""}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default CasualScreen;
