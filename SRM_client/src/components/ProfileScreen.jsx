import React, { useRef } from "react";

function ProfileScreen({ profileData, setProfileData }) {
  const fileInputRef = useRef(null); // ファイル入力フィールドの参照を作成

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

  return (
    <div className="container">
      <h2>エントリー</h2>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        {/* 写真アップロードとプレビュー */}
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
            backgroundSize: "cover", // 枠いっぱいに画像を表示
            backgroundPosition: "center",
            border: "1px solid #ccc",
            marginRight: "20px",
            cursor: "pointer", // マウスカーソルを変更
          }}
          onClick={() => fileInputRef.current.click()} // 四角形をクリックするとファイル選択
        >
          {!photoPreviewUrl && <p>写真未挿入</p>}
        </div>
        {/* 隠されたファイル入力フィールド */}
        <input
          type="file"
          name="photo"
          accept="image/*"
          ref={fileInputRef} // 隠されたファイル入力を参照
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
      </div>

      {/* フリガナと名前入力 */}
      <div style={{ marginBottom: "20px" }}>
        <div>
          <label>フリガナ:</label>
          <input
            type="text"
            name="furigana"
            value={profileData.furigana || ""}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>名前:</label>
          <input
            type="text"
            name="name"
            value={profileData.name || ""}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* 最終学歴と職務経歴 */}
      <div style={{ marginBottom: "20px" }}>
        <div>
          <label>最終学歴:</label>
          <input
            type="text"
            name="education"
            value={profileData.education || ""}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>職務経歴:</label>
          <input
            type="text"
            name="career"
            value={profileData.career || ""}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* 履歴書と職務経歴書のアップロード */}
      <div>
        <div style={{ marginBottom: "10px" }}>
          <label>履歴書:</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileUpload}
          />
        </div>
        <div>
          <label>職務経歴書:</label>
          <input
            type="file"
            name="careerSheet"
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
