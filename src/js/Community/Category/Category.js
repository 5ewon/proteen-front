import React, {useState} from 'react';
import Slider from "react-slick";
import './Category.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy from "js/Community/Dummy/Dummy"
import PostList from '../PostList/PostList';

const Category = () => {
    const [tag, setTag] = useState("C");

    function selectTag(e) {
        setTag(e.target.outerText)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        arrows:false
    };
    return (
        <div id="category">
            <Slider {...settings}>
                {dummy.options.map((options) => {
                    return (
                        <div>
                            <div key={options.id} className="filter" onClick={selectTag} >
                                <div className="text">
                                    {options.category}
                                </div> 
                            </div>
                        </div>
                    )
                })}
            </Slider>
            <div>
                <PostList
                    lang={tag}
                />
            </div>
        </div>
    );
}

export default Category;