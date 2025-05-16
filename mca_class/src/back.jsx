// import React from "react"

// import { useState } from "react"
// import axios from "axios"
// const Back =()=>{
//     const [username, setUsername] = useState("");
//     const [userpassword,setUserpassword]=useState("");
//     const usernamefun=(event)=>{
//             setUsername(event.target.value);
//     }
//     const userpasswordfun=(event)=>{
//         setUserpassword(event.target.value);
//     }
//     const submitdata=()=>{
//         const myuserdata={
//             userName: username,
//             userNumber:userpassword
//         }
//         axios.post("http://localhost:7000/api/add-user",myuserdata)
//         .then((result)=>{
//             console.log(result.data);
//         })
//         .catch((er)=>{
//             console.log(er);
//         })
//         // axios.get("http://localhost:7000/api/get-user-data")
//         // .then((result)=>{
//         //     console.log(result.data);
//         // })
//         // .catch((er)=>{
//         //     console.log(er);
//         // })

//         console.log(myuserdata);
//     }
//     return(
//         <>
//             <div>
//                 <input type="text" placeholder="enter name" onChange={usernamefun} /> <br />
//                 <input type="password" name="" id=""  placeholder="enter password" onChange={userpasswordfun}/>
//                 <button onClick={submitdata}>submit
//                 </button>
//             </div>
//         </>
//     )
// }
// export default Back

// import React from "react"

// import { useState } from "react"
// import axios from "axios"
// const Back =()=>{
//     const [userData,setUserData] = useState({
//         userName:"" ,
//         userNumber:""
//     })
//    const adduser =(event) =>{
//     const {name,value}=event.target;
//     // const name = event.target.name;
//     // const value  = event.target.value;
//     setUserData((pre)=>({
//         ...pre, [name]:value
//     }));
//    }

//     const submitdata=()=>{
        
//         axios.post("http://localhost:7000/api/add-user",userData)
//         .then((result)=>{
//             console.log(result.data);
//         })
//         .catch((er)=>{
//             console.log(er);
//         })
      
//         console.log(userData);
//     }
//     return(
//         <>
//             <div>
//               UserName:  <input type="text" name= "userName" placeholder="enter name" onChange={adduser} /> <br />
//                UserNumber: <input type="password" name = "userNumber"  id=""  placeholder="enter password" onChange={adduser}/>
//                 <button onClick={submitdata}>submit
//                 </button>
//             </div>
//         </>
//     )
// }
// export default Back






// import React, { useState } from "react";
// import axios from "axios";
// const Back = () => {
//   const [username, setUsername] = useState("");
//   const [userpassword, setUserpassword] = useState("");
//   const [userId, setUserId] = useState(""); // To store the user ID for update
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const usernamefun = (event) => {
//     setUsername(event.target.value);
//   };

//   const userpasswordfun = (event) => {
//     setUserpassword(event.target.value);
//   };

//   const submitdata = () => {
//     const myuserdata = {
//       userName: username,
//       userNumber: userpassword,
//     };

//     setLoading(true);
//     setError(null);

//     axios
//       .post("http://localhost:7000/api/add-user", myuserdata)
//       .then((result) => {
//         console.log(result.data);
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.log(er);
//         setLoading(false);
//         setError("Error adding user");
//       });
//   };

//   // Update user data
//   const updateUserData = () => {
//     const updatedUserData = {
//       userName: username,
//       userNumber: userpassword,
//     };

//     if (!userId) {
//       setError("User ID is required to update");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     // Axios PUT request
//     axios
//       .put(`http://localhost:7000/api/update-user/${userId}`, updatedUserData)
//       .then((result) => {
//         console.log(result.data);
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.log(er);
//         setLoading(false);
//         setError("Error updating user");
//       });
//   };

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter name"
//           onChange={usernamefun}
//           value={username}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Enter password"
//           onChange={userpasswordfun}
//           value={userpassword}
//         />
//         <br />
//         <button onClick={submitdata} disabled={loading}>
//           {loading ? "Submitting..." : "Submit"}
//         </button>

//         {/* You can trigger update here */}
//         <button onClick={updateUserData} disabled={loading || !userId}>
//           {loading ? "Updating..." : "Update User"}
//         </button>

//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     </>
//   );
// };

// export default Back;




import React, { useState } from "react";
import axios from "axios";

const Back = () => {
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [userId, setUserId] = useState(""); // For updating a user

  const usernamefun = (event) => setUsername(event.target.value);
  const userpasswordfun = (event) => setUserpassword(event.target.value);

  const submitdata = () => {
    const myuserdata = {
      userName: username,
      userNumber: userpassword,
    };

    axios
      .post("http://localhost:7000/api/add-user", myuserdata)
      .then((result) => {
        console.log("User Added:", result.data);
      })
      .catch((er) => console.log(er));
  };

  const updateUser = () => {
    if (!userId) {
      alert("Please enter a user ID to update");
      return;
    }

    const updatedUser = {
      userName: username,
      userNumber: userpassword,
    };

    axios
      .put(`http://localhost:7000/api/update-user/${userId}`, updatedUser)
      .then((res) => console.log("User Updated:", res.data))
      .catch((err) => console.log(err));
  };

  const deleteUser = () => {
  if (!userId) {
    alert("Please enter user Id to delete");
    return;
  }

  const deletedUser = {
    userName: username,
    userNumber: userpassword,
  };

  axios
    .delete(`http://localhost:7000/api/delete-user/${userId}`,
       {data: deletedUser,
    })
    .then((res) => console.log("User deleted:", res.data))
    .catch((er) => console.log(er));
};


  return (
    <div>
      <input type="text" placeholder="Enter Name" onChange={usernamefun} />
      <br />
      <input type="password" placeholder="Enter Password" onChange={userpasswordfun} />
      <br />
      <input
        type="text"
        placeholder="Enter User ID to Update"
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <button onClick={submitdata}>Submit</button> <br /><br />
      <button onClick={updateUser}>Update</button>  <br /><br />
      <button onClick={deleteUser}>delete</button>
    </div>
  );
};

export default Back;
