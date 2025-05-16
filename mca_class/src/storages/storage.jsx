import React from "react";

const Storage=()=>{
    // localStorage.setItem("name","Aditya")  /* even  it comment the name stores aditya in it */
   let myname = localStorage.getItem("name");
   console.log(myname);

   //JSON.Stringify
   //JSON.parse()
let myobj={
    color:"blue",
    rollNo:"23"
}
localStorage.setItem("myobject",JSON.stringify(myobj))
let getobj = JSON.parse(localStorage.getItem("myobject"));
console.log(getobj);

let myarr = [1,2,3,4,5,"Sandhya"];
localStorage.setItem("myarray",JSON.stringify(myarr));
let getarr = JSON.parse(localStorage.getItem("myarray"));
console.log(getarr);

    return(
        <>
        <h1>Hello</h1>
        <h2>{myname}</h2>
        <h3 className="bg-red-700">{getobj.color}</h3>
        <h3>{getarr[0]}</h3>
        </>
    )
}
export default Storage