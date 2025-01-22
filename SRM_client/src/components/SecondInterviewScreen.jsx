import React from "react";

function SecondInterviewScreen({ interviewData, setInterviewData }) {
  // デフォルト値を設定し、undefinedを防ぐ
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInterviewData((prev) => ({
      ...prev,
      secondInterview: {
        ...prev.secondInterview,
        [name]: value || "", // 値が空の場合もデフォルト値を設定
      },
    }));
  };

  // デフォルト値の確認
  const secondInterview = interviewData?.secondInterview || {
    technicalSkills: "",
    problemSolving: "",
    logicalThinking: "",
    leadership: "",
    careerVision: "",
  };

  return (
    <div className="container">
      <h2>二次面接</h2>
      <div>
        <label>専門知識・技術力:</label>
        <input
          type="text"
          name="technicalSkills"
          value={secondInterview.technicalSkills}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>問題解決能力:</label>
        <input
          type="text"
          name="problemSolving"
          value={secondInterview.problemSolving}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>論理的思考力:</label>
        <input
          type="text"
          name="logicalThinking"
          value={secondInterview.logicalThinking}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>リーダーシップ・主体性:</label>
        <input
          type="text"
          name="leadership"
          value={secondInterview.leadership}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>キャリアビジョン:</label>
        <input
          type="text"
          name="careerVision"
          value={secondInterview.careerVision}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
    </div>
  );
}

export default SecondInterviewScreen;
