import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../header/Header';
import Chatbot from '../chatbot/Chatbot';

import Home from '../home/Home';
import Profile from '../profile/Profile';
import Planner from '../planner/Planner';
import TwoWeeksStudy from '../twoweeksstudy/TwoWeeksStudy';
import Community from '../community/Community';
import NotFound from '../notfound/NotFound';

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