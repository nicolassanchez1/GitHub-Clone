import React from 'react';
import Nav from '../../components/nav/Nav';
import Profile from '../../components/profile/Profile';
import Repositorie from '../../components/repositories/Repositories';
import './Home.scss';

const Home = () => {

    return (
        <div className="home d-flex flex-wrap">
            <div className="home__nav">
                <Nav/>
            </div>
            <div className="home__profile d-flex">
                <Profile/>
            </div>
            <div className="home__repositories">
                <Repositorie/>
            </div>
        </div>
    )
}

export default Home
