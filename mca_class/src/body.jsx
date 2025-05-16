import React from "react";
import "./myfirst.css"

const Body= () =>{
    const mydivs = [{image:"/img1.jpg",name:" Holi1",color:" Blue",place:" Hyderabad"},
        {image:"/img2.jpg",name:" Holi2",color:" Green",place:" Bangloore"},
        {image:"/img3.jpg",name:" Holi3",color:" Red",place:" Maharastra"}
    ];
 
    return(
        <div className="mybody">
            <div className="video1">
                <video src="../public/VID-20250313-WA0001.mp4"  autoPlay  loop muted playsInline className="vid"></video>
                </div>
           <div className="card1">
           { mydivs.map((card,index)=>(
                <div key={index} className="card2">
                    <div className="card-content">
                    <img src={card.image} alt="card" className="card-img" />
                    <p>Name:<i>{card.name}</i></p>
                    <p>Colour:<i>{card.color}</i></p>
                    <p>Place:<i>{card.place}</i></p>
                </div>
                </div>
            ))}
        </div>
        </div>
    );
}
export default Body