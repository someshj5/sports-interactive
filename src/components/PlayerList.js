import React, { useEffect, useState } from "react";
import PlayersCard from "../components/PlayersCard";
import SearchBar from "./SearchBar";

export default function PlayerList({ playerInfo }) {
  const [query, setQuery] = useState(null);
  const [result, setResult] = useState(false);
  const [searchresult, setSearchresult] = useState([]);

  const sorted =
    playerInfo &&
    playerInfo.sort((a, b) => {
      return a.Value - b.Value;
    });

  let playerNames =
    sorted &&
    sorted.map((player, idx) => {
      return <PlayersCard player={player} idx={idx} />;
    });

  const data = () => {};

  const handleQuery = (e) => {
    setQuery(e.target.value);

    if (query && query.length > 1) {
      let filtered = [];
      filtered = playerInfo.filter((player) => {
        let name = player.PFName;
        // name = name.replace(/\s/g, "");
        let pname = player.PFName.toLowerCase();
        let nameArr = pname.split(" ");

        if (query === name) {
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
    }

    setResult(true);
  };

  useEffect(() => {
    if (query && query.length > 1) {
      let filtered = [];
      filtered = playerInfo.filter((player) => {
        let name = player.PFName;
        // name = name.replace(/\s/g, "");
        let pname = player.PFName.toLowerCase();
        let nameArr = pname.split(" ");

        if (query === name) {
          return player;
        } else if (nameArr.includes(query)) {
          return player;
        }
        return;
      });
      if (filtered.length > 0) {
        setSearchresult(filtered);
      }
    }
  }, [handleQuery]);

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
        <div key={idx} className="">
          <PlayersCard player={player} idx={idx} />
        </div>
      );
    });
  return (
    <div className="">
      <SearchBar handleSearch={handleSearch} handleQuery={handleQuery} />
      {!result ? (
        <>
          {playerNames && playerNames.length > 0 ? (
            <div className="container ">
              <div className="row">{playerNames}</div>
            </div>
          ) : (
            <div className="fs-18  py-5">
              Please wait! Fetching Players list
            </div>
          )}
        </>
      ) : (
        <>
          {SearchresultData && SearchresultData.length > 0 ? (
            <div className="container offset-3">
              <div className="row">{SearchresultData}</div>
            </div>
          ) : (
            <div>Searching....</div>
          )}
        </>
      )}
    </div>
  );
}
