import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import userIcon from 'images/userIcon.png';
import './Community.scss';
import fire from 'images/fire.png';
import arrow from 'images/arrow.png';
import dummy from './Data.json';

const Slide = () => {
    console.log(dummy);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2
    };
    return (
        <div id="float-post">
            <div id="ment">답변을 기다리고 있어요<img src={fire} alt="" /><img src={arrow} alt="" /></div>
                <Slider {...settings} className="postList">
                    {dummy.users.map((users, id) => {
                        return (
                            <div key={users.id} className="detail">
                                <img src={userIcon} alt="" />
                                {users.user}
                            </div>
                        );
                    })}
                    {dummy.contents.map((contents, id, tag, title, summary, proteen, comment) => {
                        return (
                            <div key={contents.id} className="detail">
                                {contents.tag}<br />
                                {contents.title}<br />
                                {contents.summary}
                            </div>
                        )
                    })}
                </Slider>
        </div>
    );
}

export default Slide;
