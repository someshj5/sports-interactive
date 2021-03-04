import { useEffect, useState } from "react";
import "./App.css";
import PlayerList from "./components/PlayerList";
import Navbar from "./components/Navbar";
import { getInfo } from "./service/productService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [playerInfo, setPlayerInfo] = useState(null);
  const [teamInfo, setTeamInfo] = useState(null);

  const getPlayerInfo = async () => {
    try {
      const resp = await getInfo();
      if (resp) {
        setPlayerInfo(resp.playerList);
        setTeamInfo(resp.teamsList);
      }
    } catch (err) {
      console.log(err, `Something went wrong! ${err}`);
    }
  };

  useEffect(() => {
    getPlayerInfo();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <PlayerList
              teamInfo={teamInfo && teamInfo}
              playerInfo={playerInfo && playerInfo}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
