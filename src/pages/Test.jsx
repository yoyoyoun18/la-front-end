import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        // console.log를 사용하여 네비게이션 시도를 로그로 남깁니다.
        console.log("Attempting to navigate to /result");
        navigate("/result");
      }
      return newCount;
    });
  };

  const dynamicStyle = {
    height: "0.5rem",
    backgroundColor: "#fde047",
    width: `${(clickCount / 5) * 100}%`,
    transition: "width 0.3s ease-in-out",
  };

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center flex-col">
      <div className="w-[450px] h-auto bg-gray-900 border border-gray-400 flex justify-center items-start flex-col p-8 text-[#F9DA9B]">
        <p className="text-2xl mb-4">성향 테스트</p>
        <div className="mb-2 rounded-md" style={dynamicStyle}></div>
        <div className="border border-gray-500 w-full h-auto rounded-md">
          <div className="h-14 border-b border-gray-500 bg-gray-500 text-white flex items-center p-4 font-bold">
            1. 모르는 사람에게 먼저 말을 건다
          </div>
          {[
            "전혀 아니다",
            "별로 아니다",
            "보통이다",
            "약간 그렇다",
            "매우 그렇다",
          ].map((option, index) => (
            <div
              key={index}
              onClick={handleClick}
              className="h-14 cursor-pointer border-b border-gray-500 hover:bg-gray-500 hover:opacity-85 transition-all duration-200 ease-in-out flex items-center p-4"
            >
              {option}
            </div>
          ))}
        </div>
      </div>
      <div className="w-96 h-11 bg-gray-400 flex justify-center items-center">
        AD
      </div>
    </div>
  );
}

export default Test;
