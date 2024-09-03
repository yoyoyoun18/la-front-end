import React from "react";
import CharacterRankingTable from "../components/CharacterRankingTable";
import { useNavigate } from "react-router-dom";

function AllUserStatistics() {
  const navigate = useNavigate();
  return (
    <div className="h-auto w-full bg-black flex justify-center items-center flex-col p-16">
      <div className="w-[450px] bg-gray-900 p-4 border border-gray-400">
        <CharacterRankingTable />
        <div className="w-full text-center">
          <button
            onClick={() => navigate("/result")}
            className="m-4 text-yellow-400 border border-red-700 bg-red-900 hover:bg-red-800 w-40 h-12 mr-4"
          >
            결과 화면 돌아가기
          </button>
        </div>
      </div>
      <div className="w-96 h-11 bg-gray-400 flex justify-center items-center">
        AD
      </div>
    </div>
  );
}

export default AllUserStatistics;
