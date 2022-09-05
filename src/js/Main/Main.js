import { Routes, Route, Navigate } from 'react-router-dom';

import Header from 'js/Header/Header';
import Chatbot from 'js/Chatbot/Chatbot';
import Home from 'js/Home/Home';
import Profile from 'js/Profile/Profile';
import Planner from 'js/Planner/Planner';
import TwoWeeksStudy from 'js/TwoWeeksStudy/TwoWeeksStudy';
import Community from 'js/Community/Community';
import NotFound from 'js/NotFound/NotFound';

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