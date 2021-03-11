import AllFootballTeam from '../AllFootballTeam/AllFootballTeam';

import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="header-img"></div>
            <div className="home-container-football">
                <AllFootballTeam></AllFootballTeam>
            </div>
        </div>
    );
};
export default Home;