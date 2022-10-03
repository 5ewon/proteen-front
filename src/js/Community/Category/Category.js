import React, {useState} from 'react';
import Slider from "react-slick";
import './Category.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy from "js/Community/Dummy/Dummy"

const Category = () => {
    const [color, setColor] = useState("white");
    const changeColor = (e) => {
        setColor("red");
        console.log({color});
    }
    console.log(dummy);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6.9,
        slidesToScroll: 2,
        arrows:false
    };
    return (
        <div id="category">
            <Slider {...settings}>
                {/* <div>
                    <div className="filter" onClick={changeColor} style={{backgroundColor:{color}}}>
                        <div className="text">C</div>
                    </div>
                </div>
                <div>
                    <div className="filter" onClick={changeColor} style={{backgroundColor:{color}}}>
                        <div className="text">JS</div>
                    </div>
                </div>
                <div>
                    <div className="filter" onClick={changeColor} style={{backgroundColor:{color}}}>
                        <div className="text">C++</div>
                    </div>
                </div>
                <div>
                    <div className="filter" onClick={changeColor} style={{backgroundColor:{color}}}>
                        <div className="text">React</div>
                    </div>
                </div>
                <div>
                    <div className="filter" onClick={changeColor} style={{backgroundColor:{color}}}>
                        <div className="text">Java</div>
                    </div>
                </div>
                <div>
                    <div className="filter" onClick={changeColor} style={{backgroundColor:{color}}}>
                        <div className="text">Spring</div>
                    </div>
                </div>
                <div>
                    <div className="filter" onClick={changeColor} style={{backgroundColor:{color}}}>
                        <div className="text">Rust</div>
                    </div>
                </div>
                <div>
                    <div className="filter" onClick={changeColor} style={{backgroundColor:{color}}}>
                        <div className="text">Python</div>
                    </div>
                </div>
                <div>
                    <div className="filter" onClick={changeColor} style={{backgroundColor:{color}}}>
                        <div className="text">Css</div>
                    </div>
                </div> */}
                {dummy.options.map((options) => {
                    return (
                        <div>
                            <div key={options.id} className="filter" onClick={changeColor} style={{backgroundColor:{color}}}>
                                <div className="text">
                                    {options.category}
                                </div> 
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default Category;