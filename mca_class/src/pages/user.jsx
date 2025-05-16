import React from "react";
import { Link } from "react-router-dom";
const User=()=>{
    return(
        <>
        <h1>User</h1>
        <ol>
            <li><Link to="/user-details">user-1</Link></li>
            <li><Link to="/user-details">user-2</Link></li>
            <li><Link to="/user-details">user-3</Link></li>
            <li><Link to="/user-details">user-4</Link></li>
        </ol>
        </>
    )
}
export default User;