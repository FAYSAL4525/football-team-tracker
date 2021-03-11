import React from 'react';
import { Link } from 'react-router-dom';
import './FootballTeamDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrow, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const FootballTeamDetails = (props) => {
    // console.log(props.TeamData);
    const { strTeam, strTeamBadge, strSport, intFormedYear,idTeam } = props.TeamData;
    return (
        <div className="all-team-container">
           <div className="team-container">
           <img src={strTeamBadge} alt="" />
            <h3>{strTeam}</h3>
            <p>Sport Type:Football</p>
            <Link to ={`/Team/${idTeam}`}><button className="btn btn-primary mt-3">Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>
           </div>
        </div>
    );
};

export default FootballTeamDetails;