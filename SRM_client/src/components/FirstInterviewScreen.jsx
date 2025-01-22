import React from "react";

function FirstInterviewScreen({ firstInterviewData, setFirstInterviewData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFirstInterviewData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <h2>一次面接</h2>
      <div className="info-section">
        <div>
          <label>専門知識・技術力:</label>
          <textarea
            name="technicalSkills"
            value={firstInterviewData.technicalSkills || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>問題解決能力:</label>
          <textarea
            name="problemSolving"
            value={firstInterviewData.problemSolving || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>論理的思考力:</label>
          <textarea
            name="logicalThinking"
            value={firstInterviewData.logicalThinking || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>リーダーシップ・主体性:</label>
          <textarea
            name="leadership"
            value={firstInterviewData.leadership || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>キャリアビジョン:</label>
          <textarea
            name="careerVision"
            value={firstInterviewData.careerVision || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default FirstInterviewScreen;
