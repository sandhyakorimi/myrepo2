import React from "react"
import { useLocation } from "react-router-dom"
const New =()=>{
    const myparams = useLocation();
    const SearchParams = new URLSearchParams(myparams.search);
    const name = SearchParams.get("name");
    const id=SearchParams.get("id");
    console.log(name,"",id)
    return(
        <>
        <h1>HELLO new</h1>
        name:
         <h1>{name}</h1>
        </>
    )
}
export default New