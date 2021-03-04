import React, { useState } from "react";
import PlayersCard from "../components/PlayersCard";
import SearchBar from "./SearchBar";

export default function PlayerList({ playerInfo }) {
  const [query, setQuery] = useState(null);
  const [result, setResult] = useState(false);
  const [searchresult, setSearchresult] = useState([]);
  let playerNames =
    playerInfo &&
    playerInfo.map((player, idx) => {
      return <PlayersCard player={player} idx={idx} />;
    });

  const handleQuery = (e) => {
    let str = e.target.value;
    str = str.replace(/\s/g, "");
    setQuery(str);
  };

  const handleSearch = () => {
    let filtered = [];
    filtered = playerInfo.filter((player) => {
      let name = player.PFName;
      name = name.replace(/\s/g, "");
      let pname = player.PFName.toLowerCase();
      let nameArr = pname.split(" ");

      if (name === query) {
        return player;
      } else if (nameArr.includes(query)) {
        return player;
      }
      return;
    });
    if (filtered.length > 0) {
      setSearchresult(filtered);
    }
    if (filtered.length === 0) {
      setResult(false);
    }

    setResult(true);
  };

  const SearchresultData =
    searchresult.length > 0 &&
    searchresult.map((player, idx) => {
      return (
        <div key={idx} className="container offset-4">
          <PlayersCard player={player} idx={idx} />
        </div>
      );
    });
  return (
    <div className="container offset-3">
      <SearchBar handleSearch={handleSearch} handleQuery={handleQuery} />
      {!result ? (
        <>
          {playerNames && playerNames.length > 0 ? (
            <div className="row ml-5">{playerNames}</div>
          ) : (
            <div className="fs-18  py-5">Please wait! Fetching Categories</div>
          )}
        </>
      ) : (
        <>
          {SearchresultData && SearchresultData.length > 0 ? (
            <div>{SearchresultData}</div>
          ) : (
            <div>Searching....</div>
          )}
        </>
      )}
    </div>
  );
}
