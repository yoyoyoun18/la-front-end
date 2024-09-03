import React from "react";

function Test() {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center flex-col">
      <div className="w-[450px] h-auto bg-[#373737]  mb-4 flex justify-center items-start flex-col p-8 text-[#F9DA9B]">
        <p className="text-2xl mb-4">성향 테스트</p>
        <div className="border border-gray-500 w-full h-auto rounded-md">
          <div className="h-14 border-b border-gray-500 bg-gray-500 text-white flex items-center p-4 font-bold">
            1. 모르는 사람에게 먼저 말을 건다
          </div>
          <div className="h-14 cursor-pointer border-b border-gray-500 hover:bg-gray-500 hover:opacity-85 transition-all duration-200 ease-in-out flex items-center p-4">
            전혀 아니다
          </div>
          <div className="h-14 cursor-pointer border-b border-gray-500 hover:bg-gray-500 hover:opacity-85 transition-all duration-200 ease-in-out flex items-center p-4">
            별로 아니다
          </div>
          <div className="h-14 cursor-pointer border-b border-gray-500 hover:bg-gray-500 hover:opacity-85 transition-all duration-200 ease-in-out flex items-center p-4">
            보통이다
          </div>
          <div className="h-14 cursor-pointer border-b border-gray-500 hover:bg-gray-500 hover:opacity-85 transition-all duration-200 ease-in-out flex items-center p-4">
            약간 그렇다
          </div>
          <div className="h-14 cursor-pointer border-b border-gray-500 hover:bg-gray-500 hover:opacity-85 transition-all duration-200 ease-in-out flex items-center p-4">
            매우 그렇다
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
