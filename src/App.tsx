import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Results from "./pages/Results";
import AllUserStatistics from "./pages/AllUserStatistics";
import DataStatistics from "./pages/DataStatistics";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 기본 경로: "/" */}
        <Route path="/" element={<Home />} />

        {/* "/test" 경로 */}
        <Route path="/test" element={<Test />} />

        {/* "/result" 경로 */}
        <Route path="/result" element={<Results />} />

        {/* "/statistics/alluser" 경로 */}
        <Route path="/statistics/alluser" element={<AllUserStatistics />} />

        {/* "/statistics/data" 경로 */}
        <Route path="/statistics/data" element={<DataStatistics />} />
      </Routes>
    </Router>
  );
};

export default App;
