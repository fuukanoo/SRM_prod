import React from "react";

function SecondInterviewScreen({ secondInterviewData, setSecondInterviewData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSecondInterviewData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <h2>二次面接</h2>
      <div className="info-section">
        <div>
          <label>専門知識・技術力:</label>
          <textarea
            name="technicalSkills"
            value={secondInterviewData.technicalSkills || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>問題解決能力:</label>
          <textarea
            name="problemSolving"
            value={secondInterviewData.problemSolving || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>論理的思考力:</label>
          <textarea
            name="logicalThinking"
            value={secondInterviewData.logicalThinking || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>リーダーシップ・主体性:</label>
          <textarea
            name="leadership"
            value={secondInterviewData.leadership || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>キャリアビジョン:</label>
          <textarea
            name="careerVision"
            value={secondInterviewData.careerVision || ""}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SecondInterviewScreen;
