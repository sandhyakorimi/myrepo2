import React from "react";
import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
const Forms=()=>{
    const [test, setTest] = useState({
        Firstname:"",
        Secondname:"",
        email:"",
        PhoneNumber:"",
        DateOfBirth:"",
        Password:"",
        image:""
    })

  const ImageRef = useRef(null)

  const handleImage=()=>{
    ImageRef.current.click();
  }


    const myfun=()=>{
        const EmailRegex = /[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]/
        const PasswordRegex1 = /[a-z]/
        const PasswordRegex2 = /[A-Z]/
        const PasswordRegex3 = /[0-9]/
        const PasswordRegex4 = /[-`~!@#$%^&*()_+={}[\]/"';:,.<>?|]/
        // const regex = /[-`~!@#$%^&*()_+={}[\]/"';:,.<>?|]/
        if(test.Firstname===""){alert("Enter First name")}
        else if(test.Secondname===""){alert("Enter Second name"); }

        else if(test.email===""){alert("Enter your Email"); }
          else if(!EmailRegex.test(test.email)){
            alert("enter a valid mail");
          }

        else if(test.PhoneNumber===""){alert("Enter Mobile Number"); }
          else if(test.PhoneNumber.length!=10){
            alert("enter a 10 digit mobile number");
          }

        else if(test.DateOfBirth===""){alert("Enter DOB"); }

        else if(test.Password===""){alert("Enter Password"); }
           else if(test.Password.length<8){ alert("enter a valid password");}
           else if(!PasswordRegex1.test(test.Password)){alert("enter a valid password with atleast one small alphabet");}
          else if(!PasswordRegex2.test(test.Password)){ alert("enter a valid password with one Capital Letter");}
          else if(!PasswordRegex3.test(test.Password)){alert("enter a valid password with one number");}
          else if(!PasswordRegex4.test(test.Password)){alert("enter a valid password with one Special Character");}

           else {alert("form submitted successfully");
            console.log(test);           }
      }

      const mybtn=()=>{
        toast.error('🦄 Wow so easy!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
          });
      }
    
    return(
        <div className="mydiv">
        <input type="text" placeholder="First Name" onChange={(e)=>setTest({...test,Firstname:e.target.value})}/>
        <input type="text" placeholder="Last Name" onChange={(e)=>setTest({...test,Secondname:e.target.value})}/>
        <input type="email" placeholder="enter Email" onChange={(e)=>setTest({...test,email:e.target.value})}/>
        <input type="number" placeholder="Enter Mobile Number" onChange={(e)=>setTest({...test,PhoneNumber:e.target.value})}/>
        <input type="date" placeholder="Enter date of Birth" onChange={(e)=>setTest({...test,DateOfBirth:e.target.value})}/>
        <input type="password" placeholder="Enter Password" onChange={(e)=>setTest({...test,Password:e.target.value})}/>

        <button onClick={()=>{myfun()}}>Submit</button>

{test.image ? <img className= "imagechangeInput" onClick={handleImage}  src={URL.createObjectURL(test.image)} /> : <img onClick={handleImage} src='https://gatax.in/_next/image?url=https%3A%2F%2Fapi.gatax.in%2Fpublic%2Fimages%2Fnull2.png&w=640&q=75'/>}
      <input className='imageinput' ref={ImageRef} type="file" accept='.jpg, .png, .jpeg, .webp' onChange={(e)=>{setTest({...test,image:e.target.files[0]})}}/>


      <button onClick={mybtn}>clickme</button>
      <ToastContainer/>
        </div>
    )
}
export default Forms