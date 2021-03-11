import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetails from '../TeamDetails/TeamDetails';



const AllTeamDetails = () => {
    const {teamid}=useParams();
    const [teamDetail,setTeamDetail]=useState([]);
    const {idTeam}=teamDetail;
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamid}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeamDetail(data.teams))
    },[]);
    return (
        <div>
          {
              teamDetail.map(teamData=> <TeamDetails teamData={teamData}></TeamDetails>)
          }
        </div>
    );
};

export default AllTeamDetails;