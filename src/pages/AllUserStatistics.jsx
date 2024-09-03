import React from "react";
import CharacterRankingTable from "../components/CharacterRankingTable";
import { useNavigate } from "react-router-dom";

function AllUserStatistics() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center flex-col">
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
  );
}

export default AllUserStatistics;
