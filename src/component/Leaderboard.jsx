import React from 'react'
import "../assets/css/leaderboard.css"
import radiant from "../assets/images/Radiant.jpeg"
import clove from "../assets/images/clove.jpeg"
import jett from "../assets/images/jett.jpeg"
import kj from "../assets/images/kj.jpeg"
import neon from "../assets/images/neon.jpeg"
import reyna from "../assets/images/reyna.jpeg"
import reyna2 from "../assets/images/reyna2.jpeg"
import sage from "../assets/images/sage.jpeg"
import viper from "../assets/images/viper.jpeg"
import Yoru from "../assets/images/Yoru.jpeg"
export const Leaderboard = () => {

  const players = [
  {
    rank: 1,
    rating: 1037,
    name: "T1A PeGaSus",
    title: "Premier Ignition Champion",
    wins: 92,
    avatar: Yoru,
  },
  {
    rank: 2,
    rating: 942,
    name: "AQ Youjun",
    title: "UwU",
    wins: 75,
    avatar:clove ,
  },
  {
    rank: 3,
    rating: 918,
    name: "T1 Satoru",
    title: "Superstar",
    wins: 88,
    avatar:sage ,
  },
    {
    rank: 4,
    rating: 907,
    name: "00000|cortiskorea",
    title: "Super Shy",
    wins: 54,
    avatar: reyna2,
  },
    {
    rank: 5,
    rating: 904,
    name: "snappyAUU",
    title: "NPC",
    wins: 94,
    avatar: neon,
  },
    {
    rank: 6,
    rating: 902,
    name: "zxcvbnm123456789",
    title: "=^._.^=",
    wins: 106,
    avatar:viper,
  },
    {
    rank: 7,
    rating: 871,
    name: "AQ Youze",
    title: ":3",
    wins: 73,
    avatar:reyna,
  },
    {
    rank: 8,
    rating: 858,
    name: "OAS whitecatw",
    title: "Goinmul",
    wins: 85,
    avatar:jett ,
  },
    {
    rank: 9,
    rating: 848,
    name: "이타도리 유지 虎杖 悠仁.",
    title: "UwU",
    wins: 77,
    avatar:kj ,
  },
];
  return (
    <div>
      <div className="leaderboard-header-bar">
        <div className="left-badge">
          <img src={radiant} alt="Rank Badge" />
        </div>

        <div className="leaderboard-header">
          <span className="small-title">LEADERBOARD</span>
          <h1 className="main-title">TOP 500</h1>
        </div>

        <div className="act-box">
          <span className="act-label">V26</span>
          <strong>ACT I</strong>
        </div>
      </div>


      <div className="leaderboard-container">
        <div className="table-header">
          <span>RANK</span>
          <span>RATING</span>
          <span>PLAYER</span>
          <span>GAMES WON</span>
        </div>

        <div className="table-body">
          {players.map((player) => (
            <div className="table-row" key={player.rank}>

              <div className="rank-cell">
                <strong>{player.rank}</strong>
              </div>

              <div className="rating-cell">{player.rating}</div>

              <div className="player-cell">
                <img
                  src={player.avatar}
                  alt="avatar"
                />
                <div>
                  <div className="player-name">{player.name}</div>
                  <div className="player-title">{player.title}</div>
                </div>
              </div>

              <div className="wins-cell">{player.wins}</div>
            </div>
          ))}
        </div>
      </div>
  </div>
  );
};
  
