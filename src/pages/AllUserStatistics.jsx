import React from "react";
import CharacterRankingTable from "../components/CharacterRankingTable";

function AllUserStatistics() {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center flex-col">
      <CharacterRankingTable />
    </div>
  );
}

export default AllUserStatistics;
