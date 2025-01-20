import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProfileScreen from "./components/ProfileScreen";
import InterviewScreen from "./components/InterviewScreen";
import ScheduleScreen from "./components/ScheduleScreen";

function App() {
  // グローバル状態
  const [profileData, setProfileData] = useState({
    education: "",
    career: "",
    resume: null,
    careerSheet: null,
  });

  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", background: "#333" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>プロフィール</Link>
        <Link to="/interview" style={{ color: "#fff", marginRight: "1rem" }}>面談結果</Link>
        <Link to="/schedule" style={{ color: "#fff" }}>スケジュール</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ProfileScreen profileData={profileData} setProfileData={setProfileData} />
          }
        />
        <Route
          path="/interview"
          element={<InterviewScreen profileData={profileData} />}
        />
        <Route
          path="/schedule"
          element={<ScheduleScreen profileData={profileData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
