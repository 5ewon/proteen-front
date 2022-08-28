import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header/Header';
import Chatbot from '../Chatbot/Chatbot';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Planner from '../Planner/Planner';
import TwoWeeksStudy from '../TwoWeeksStudy/TwoWeeksStudy';
import Community from '../Community/Community';
import NotFound from '../NotFound/NotFound';

function Main({isLogined}) {
    return (
        <div>
            <Header isLogined={isLogined} />
            <Chatbot />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="planner" element={<Planner />} />
                <Route path="twoweeksstudy" element={<TwoWeeksStudy />} />
                <Route path="community" element={<Community />} />
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default Main;