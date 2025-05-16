import React, { useEffect, useState } from "react";
import axios from "axios";
const Userdetails = () =>{
    const [userData, setUserData] = useState([]);
useEffect(()=>{
    console.log("testing");
        axios.get("http://localhost:7000/api/get-user-data")
          .then((result) =>{
            console.log(result.data);
            setUserData(result.data);
        }).catch((er)=>{
            console.log(er);
        })
    },[])
    return(
    <>
    <div>userdetails</div>
    {
        userData.map((item,index)=>{
        return(
            <div>
                <p>Username: {item.userName}</p>
                <p>UserNumber:{item.userNumber}</p>

            </div>
        )
       })
    }

    {/* <button onClick={mydata}>get user details</button> */}
    </>
    )

}
export default Userdetails



// task   
// cricketors details 
// modal  
// controller  
// router  
//  post  
// get