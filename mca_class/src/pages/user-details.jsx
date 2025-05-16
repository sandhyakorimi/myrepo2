import React from "react";
import { useParams } from "react-router-dom";
const UserDetails=()=>{
    const {id} = useParams();
    console.log("user",id);

    return(
        <>
        <h1>User-Details</h1>
        <h1>user-{id}</h1>
        </>
    )
}
export default UserDetails