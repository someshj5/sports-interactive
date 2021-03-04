import React from "react";

export default function PlayersCard({ player, idx }) {
  let pName = player.PFName;
  let skill = player.SkillDesc;
  let value = player.Value;
  let upcoming = player.UpComingMatchesList[0];
  return (
    <div key={idx} className="card  border-radius-8 col-3 my-3 p-4 mx-3">
      <img
        className="border-radius-50 "
        src={`${process.env.PUBLIC_URL}/player-images/${player.Id}.jpg`}
        alt={`${player.Id}`}
      />
      <div className="mt-2">
        Name: <span className="fc-red">{pName}</span>
      </div>
      <div className="fc-blue">Skill: {skill}</div>
      <div>
        player value: <span className="fc-red">${value}</span>
      </div>
      <div className="mt-1">
        Upcoming match
        <div>
          <span className="fc-red">{upcoming.CCode}</span> vs{" "}
          <span className="fc-grey">{upcoming.VsCCode}</span>
          <div className="fs-14 fc-brick">{upcoming.MDate}</div>
        </div>
      </div>
    </div>
  );
}
