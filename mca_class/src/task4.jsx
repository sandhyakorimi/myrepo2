import React from "react";
import { useState } from "react";

const Task4 = () =>{
   const myobj= [{image:<img src="../public/img1.jpg" />, id:1, name:"color1", place:"Hyd"},
                 {image:<img src="../public/img2.jpg"/>, id:2, name:"color2", place:"Kkd"},
                 {image:<img src="../public/img3.jpg"/>, id:3, name:"color3", place:"Rjy"},
   ]
   const [test, setTest] = useState(myobj);
   return(
        <>
          <h1>MyObject</h1>
          {
            test.map((item,index)=>{
                return <div key={item.id} className="mydiv">
                    <div className="myone">
                    <div className="myimg">{item.image}</div>
                    <div className="condiv">
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.place}</p>
                    </div>
                </div>
                </div>
            })
          }
        </>
    )
}
export default Task4