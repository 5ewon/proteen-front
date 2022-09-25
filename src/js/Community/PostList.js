import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import userIcon from 'images/userIcon.png';
import './Community.scss';
import heart from 'images/heart.png';
import dummy from './Data.json';



const PostList = () => {
    console.log(dummy);
    for(let i of dummy.contents) {
        console.log(i); 
        }           
    <>
        {[1, 2, 3, 4, 5].map((item) => {
            return (
                <div key={item}>a</div>
                // <li key={contents.id} className="list">
                //     <img src={userIcon} alt="" />
                //     {contents.tag}<br />
                //     {contents.title}<br />
                //     {contents.summary}<br />
                //     <img src={heart} alt="" />
                // </li>
            )
        })}
        
        </>
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 2,
    //     vertical: true,
    //     verticalSwiping: true,
    //     centerPadding:"100px"
    // };
    
    // return (
    //     <div className="post-list">
    //         <Slider {...settings} className="postList">
    //             {dummy.contents.map((contents, id, tag, title, summary, proteen, comment) => {
    //                 return (
    //                     <div key={contents.id} className="list">
    //                         <img src={userIcon} alt="" />
    //                         {contents.tag}<br />
    //                         {contents.title}<br />
    //                         {contents.summary}<br />
    //                         <img src={heart} alt="" />
    //                     </div>
    //                 )
    //             })}
    //         </Slider>
    //     </div>
    // );
}

export default PostList;