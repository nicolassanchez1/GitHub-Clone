import React from 'react';
import Profile from '../../components/profile/Profile';
import Repositorie from '../../components/repositories/Repositories';
import './Home.scss';

const Home = () => {

    return (
        <div className="home d-flex">
            <div className="home__profile d-flex justify-content-end">
                <Profile/>
            </div>
            <div className="home__repositories">
                <Repositorie/>
            </div>
        </div>
    )
}

export default Home
