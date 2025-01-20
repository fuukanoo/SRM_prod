import React from "react";

function CasualScreen({ casualData, setCasualData, onPrevious, onNext, isLastStep, isFirstStep }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCasualData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      {/* ヘッダー */}
      <div className="flex-row">
        <div className="profile-image" />
        <div>
          <h2>やまだ たろう</h2>
          <h2>山田 太郎 (30)</h2>
        </div>
      </div>

      {/* ステップ部分 */}
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

      {/* 判定結果 */}
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
          />
        </div>
        <div>
          <label>チーム愛:</label>
          <input
            type="text"
            name="teamLove"
            value={casualData.teamLove || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>愛嬌:</label>
          <input
            type="text"
            name="charm"
            value={casualData.charm || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>謙虚さと責任感:</label>
          <input
            type="text"
            name="humility"
            value={casualData.humility || ""}
            onChange={handleInputChange}
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

      {/* 前へ・次へボタン */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button
          onClick={onPrevious}
          disabled={isFirstStep}
          style={{
            padding: "10px 20px",
            backgroundColor: isFirstStep ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: isFirstStep ? "not-allowed" : "pointer",
          }}
        >
          前へ
        </button>
        <button
          onClick={onNext}
          disabled={isLastStep}
          style={{
            padding: "10px 20px",
            backgroundColor: isLastStep ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: isLastStep ? "not-allowed" : "pointer",
          }}
        >
          次へ
        </button>
      </div>
    </div>
  );
}

export default CasualScreen;
