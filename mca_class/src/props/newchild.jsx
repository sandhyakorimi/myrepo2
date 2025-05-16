import React from "react";

const Child1 = ({name,phone,sub_ac})=>{
    if(sub_ac)
    return(
        <div>
            {/* <h1>Child</h1>
            <p>name:{name} </p>
            <button onClick={()=>myFunction("helloooooo")}>Click me</button> */}

            <p>name:{name}</p>
            <p>phone:{phone}</p>
        </div>
    )
    else{
        return <h1>No data found</h1>
    }







    // return sub_ac? <div> <h1>{name}</h1> </div>:  <div> <h1>no</h1> </div>

    // return <div>{
    //     sub_ac ? <div> <h1>{name}</h1></div>:<div>no</div>
    // }</div>

    // return <div className={sub_ac ? "truecls" :"falsecls"}>
    //     {/* <h1>{sub_ac ? name : "no"}</h1> */}
    //     {sub_ac && <h1>{name}</h1>}
    // </div>






    if(sub_ac || name=="engineering")
        return(
    <div>
         <h1>{name}</h1> 
    </div>
    )
    else{
        return(
            <h1>no not match</h1>
        )
    }
}
export default Child1;
