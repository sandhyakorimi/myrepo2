import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slick=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    const myobj = [{myimg:<img src="img1.jpg" alt=" img1" className="myimg"/>,Name:"image1"},
        {myimg:<img src="img2.jpg" className="myimg"/>,Name:"image2"},
        {myimg:<img src="img3.jpg" className="myimg"/>,Name:"image3"}
    ];
    return(
        <>
        <Slider {...settings}>
         {
            myobj.map((val,index)=>(
                <div key={index}>
                   <p> {val.myimg}</p>
                   <h1>Name:{val.Name}</h1>
                </div>
            ))
         }
        </Slider>
        </>
    )
}
export default Slick