import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import '../toaster.css'
import Header from "./header";
import Footer from "./footer";
// import New from "./new";
const HomePage=()=>{
    const navigate = useNavigate();
    const myfun=()=>{
        navigate("/new");
    }
    return(
        <>
        <Header/>
        <h1>My Home Page</h1>
        <ul>
            <li> <Link to="/aboutpage">About</Link></li>
            <li> <Link to="/contactpage">Contact</Link></li>
            <li> <Link to="/user">User</Link></li>
            <li> <Link to="/user-details">user-details</Link></li>
            <li><Link to="/new?name=Sandhya&id=5566">newlink</Link></li> 
        </ul>
                                                   {/* go to link when click button */}
        <button onClick={myfun}>Hello</button> 
                                                       
        <Outlet/>
        <Footer/>
        </>
    )
}
export default HomePage