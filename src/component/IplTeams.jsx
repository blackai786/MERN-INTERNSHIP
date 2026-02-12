import React from 'react'
import Csk from "../assets/images/Csk.jpg"
import Delhi from "../assets/images/Delhi.jpg"
import GT from "../assets/images/GT.jpg"
import KKR from "../assets/images/KKR.jpg"
import LSG from "../assets/images/LSG.jpg"
import Mi from "../assets/images/Mi.jpg"
import PBKS from "../assets/images/PBKS.jpg"
import RCB from "../assets/images/RCB.jpg"
import RR from "../assets/images/RR.jpg"
import SRH from "../assets/images/SRH.jpg"
import "../assets/css/teams.css"
import { Link } from 'react-router-dom'
export const IplTeams = () => {

    var teams=[
        {
            teamid:1,
            teamname:"Chennai Super Kings(CSK)",
            logo: Csk
        },
        {
            teamid:2,
            teamname:"Delhi Capitals (DC)",
            logo: Delhi
        },
        {
            teamid:3,
            teamname:"Gujarat Titans (GT)",
            logo: GT
        },
        {
            teamid:4,
            teamname:"Kolkata Knight Riders (KKR)",
            logo: KKR
        },
        {
            teamid:5,
            teamname:"Lucknow Super Giants (LSG)",
            logo: LSG
        },
        {
            teamid:6,
            teamname:"Mumbai Indians (MI)",
            logo: Mi
        },
        {
            teamid:7,
            teamname:"Punjab Kings (PBKS)",
            logo: PBKS
        },
        {
            teamid:8,
            teamname:"Rajasthan Royals (RR)",
            logo: RR
        },
        {
            teamid:9,
            teamname:"Royal Challengers Bengaluru (RCB)",
            logo: RCB
        },
        {
            teamid:10,
            teamname:"Sunrisers Hyderabad (SRH)",
            logo: SRH
        },
    ];
  return (
    <div className='teams'>

        <h1>IPL Teams</h1>

        {
            teams.map((team)=>
            {
                return <ul><li
                  key={team.teamname}
                    style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    margin: "10px",
                width: "250px"
          }}
                >
                <Link to={`/details/${team.teamname}`}>
                <img src={team.logo} alt={team.teamname}></img>
                <br/>
                <br/>
                </Link>
                {team.teamname}
                </li></ul>
            }

            )
        }

    </div>
  )
}
