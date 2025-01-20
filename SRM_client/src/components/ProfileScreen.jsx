import React from "react";

function ProfileScreen({ profileData, setProfileData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: files[0] }));
  };

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
          {!photoPreviewUrl && <p>写真を挿入</p>}
          <input
            type="file"
            accept="image/*"
            name="photo"
            onChange={(e) => handleFileChange({ ...e, name: "photo" })}
          />
        </div>
        <div>
          <div>
            <input
              type="text"
              name="furigana"
              value={profileData.furigana || ""}
              onChange={handleInputChange}
              placeholder="フリガナを入力"
              style={{
                fontSize: "1.2rem",
                fontWeight: "normal",
                border: "none",
                borderBottom: "2px solid #ccc",
                marginBottom: "10px",
                outline: "none",
                width: "200px",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={profileData.name || ""}
              onChange={handleInputChange}
              placeholder="漢字を入力"
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                border: "none",
                borderBottom: "2px solid #ccc",
                marginBottom: "10px",
                outline: "none",
                width: "200px",
              }}
            />
          </div>
        </div>
      </div>

      {/* 最終学歴、職務経歴、ファイル添付 */}
      <div className="info-section">
        <div>
          <label>最終学歴: </label>
          <input
            type="text"
            name="education"
            value={profileData.education}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>職務経歴: </label>
          <input
            type="text"
            name="career"
            value={profileData.career}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>履歴書: </label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label>職務経歴書: </label>
          <input
            type="file"
            name="careerSheet"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
