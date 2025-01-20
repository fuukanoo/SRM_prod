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

  return (
    <div className="container">
      <div className="flex-row">
        <div className="profile-image" />
        <div>
          <h2>やまだ たろう</h2>
          <h2>山田 太郎 (30)</h2>
        </div>
      </div>

      <div className="step-container">
        <div className="step">エントリー</div>
        <div className="step">調整中</div>
        <div className="step highlight">カジュアル</div>
        <div className="step">調整中</div>
        <div className="step">1次</div>
        <div className="step">調整中</div>
        <div className="step">2次</div>
        <div className="step">調整中</div>
        <div className="step">最終</div>
        <div className="step">調整中</div>
      </div>

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
