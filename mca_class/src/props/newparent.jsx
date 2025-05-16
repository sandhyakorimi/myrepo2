import React from "react";
import Child1 from "./newchild";
 
const Parent1 =()=>{
    const myFun=(a)=>{
        console.log("testing",a);
    }
    return(
        <div>
            {/* <h1 onClick={()=>myFun("hello")}>Parent</h1>
            <Child1 name="Aditya" myFunction={myFun}/> */}
           < Child1 user_id={1} name={"aditya"} phone={2456657} sub_ac={true}/>     
           < Child1 user_id={2} name={"engineering"} phone={245658} sub_ac={false}/>     
           < Child1 user_id={3} name={"college"} phone={2456659} sub_ac={true}/>     
           < Child1 user_id={4} name={"Surampalem"} phone={2456660} sub_ac={false}/>     
            </div>
    )
}
export default Parent1;