import React from "react";

function FinalInterviewScreen({ interviewData, setInterviewData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInterviewData((prev) => ({
      ...prev,
      finalInterview: {
        ...prev.finalInterview,
        [name]: value || "",
      },
    }));
  };

  const finalInterview = interviewData?.finalInterview || {
    technicalSkills: "",
    problemSolving: "",
    logicalThinking: "",
    leadership: "",
    careerVision: "",
  };

  return (
    <div className="container">
      <h2>最終面接</h2>
      <div>
        <label>専門知識・技術力:</label>
        <input
          type="text"
          name="technicalSkills"
          value={finalInterview.technicalSkills}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>問題解決能力:</label>
        <input
          type="text"
          name="problemSolving"
          value={finalInterview.problemSolving}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>論理的思考力:</label>
        <input
          type="text"
          name="logicalThinking"
          value={finalInterview.logicalThinking}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>リーダーシップ・主体性:</label>
        <input
          type="text"
          name="leadership"
          value={finalInterview.leadership}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>キャリアビジョン:</label>
        <input
          type="text"
          name="careerVision"
          value={finalInterview.careerVision}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
    </div>
  );
}

export default FinalInterviewScreen;
