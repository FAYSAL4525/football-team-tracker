import React, { useEffect, useState } from 'react';
import FootballTeamDetails from '../FootballTeamDetails/FootballTeamDetails';
import './AllFootballTeam.css'

const AllFootballTeam = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        // fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);
    // console.log(teams);
    return (
        <div className="all-football-team-container">
            {
                teams.map(TeamData => <FootballTeamDetails TeamData={TeamData}></FootballTeamDetails>)
            }
        </div>
    );
};

export default AllFootballTeam;