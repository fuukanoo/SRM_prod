// FirstInterviewScreen.jsx

import React from "react";

function FirstInterviewScreen({ firstInterviewData, setFirstInterviewData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFirstInterviewData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  return (
    <div className="container">
      <h2>一次面接</h2>
      <div>
        <label>専門知識・技術力:</label>
        <input
          type="text"
          name="technicalSkills"
          value={firstInterviewData.technicalSkills}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>問題解決能力:</label>
        <input
          type="text"
          name="problemSolving"
          value={firstInterviewData.problemSolving}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>論理的思考力:</label>
        <input
          type="text"
          name="logicalThinking"
          value={firstInterviewData.logicalThinking}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>リーダーシップ・主体性:</label>
        <input
          type="text"
          name="leadership"
          value={firstInterviewData.leadership}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>キャリアビジョン:</label>
        <input
          type="text"
          name="careerVision"
          value={firstInterviewData.careerVision}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
    </div>
  );
}

export default FirstInterviewScreen;
