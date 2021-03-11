import React from 'react';
import './TeamDetails.css'
import male from '../../images/male.png';
import female from '../../images/female.png'
import founded from '../../images/found 1.png'
import flag from '../../images/flag (1) 1.png'
import football from '../../images/football (1) 1.png'
import genders from '../../images/male-gender-sign 1.png'
import { Link } from 'react-router-dom';

const TeamDetails = (props) => {
    // console.log(props);
    const { strTeam, idTeam, intFormedYear, strCountry, strTeamBadge, strGender, strInstagram, strTwitter, strWebsite, strYoutube, strFacebook, strStadiumDescription, strDescriptionEN, strTeamFanart3 } = props.teamData;
    let gender;
    if (strGender === "Male") {
        gender = strTeamFanart3;
    }
    else {
        gender = female;
    }
console.log(strInstagram);
    return (
        <div className="team">
            <div className="team-data-header">
                <img src={strTeamBadge} alt="" />
            </div>
            <div className="team-data-container">
                <div className="team-data">
                    <div className="team-data-detail">
                        <h3>{strTeam}</h3>
                        <h6><img src={founded} />Founded: {intFormedYear}</h6>
                        <h6><img src={flag} />Country: {strCountry}</h6>
                        <h6><img src={football} />Sport Type: Football</h6>
                        <h6><img src={genders} />Gender: {strGender}</h6>


                    </div >
                    <div className="team-data-img">
                        <img src={gender} alt="Logo" />
                    </div>
                </div>
                <div className="team-data-text">
                    <p>{strDescriptionEN}</p><br></br><br></br>
                    <p>{strStadiumDescription}</p>
                </div>
            </div >
            <div className="social">
                <Link to={`/facebook/${strFacebook}`}><i className="fab fa-facebook fa-2x p-2 m-1"></i></Link>
                <Link to={`/youtube/${strYoutube}`}><i className="fab fa-youtube fa-2x p-2 m-1"></i></Link>
                <Link to={`/instagram/${strInstagram}`}><i className="fab fa-instagram fa-2x p-2 m-1"></i></Link>
                <Link to={`/twitter/${strFacebook}`}><i className="fab fa-twitter fa-2x p-2 m-1"></i></Link>
            </div>
        </div>

    );
};

export default TeamDetails;