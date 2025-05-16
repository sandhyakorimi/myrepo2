import React from "react";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { useState, useRef} from "react";

const Toast2=()=>{
    const [test, setTest]= useState({
        Username:"",
        Password:""
    })
        const myref = useRef(null);
        const myref2= useRef(null);
    const mybtn=(event)=>{
        event.preventDefault();
        const UserRegex = /^(?=.*[a-z])(?=.*[A-Z]).{4,}$/; 
        const PasswordRegex1 =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-`~!@#$%^&*()_+={}[\]/"';:,.<>?|]).{8,}$/;
        if(test.Username===""){
            myref.current.focus();
        }
        else if(!UserRegex.test(test.Username)){
            toast.error("Enter a valid UserName")
        }
        else if(test.Password===""){
            myref2.current.focus();
        }
        else if(!PasswordRegex1.test(test.Password)){
            toast.error("Password incorrect");
        }
        else{
            toast.success('🦄 Form submitted successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }
    return(
        <div className="maindiv">
            <form action="" className="myform">
            <h1 className="h1">Login</h1>
            <label htmlFor="">UserName:</label>
            <input className="name" type="text" placeholder="Username" ref={myref} onChange={(e)=>setTest({...test,Username:e.target.value})}/>
            <label htmlFor="">Password:</label>
            <input  className="name" type="password" placeholder="Password" ref={myref2} onChange={(e)=>setTest({...test,Password:e.target.value})}/>
            <button onClick={mybtn} className="btn">Login</button>
            <ToastContainer
            // position="top-left" 
            // autoClose={2500} 
            // limit={1} 
            // transition={Zoom} 
            />
            <p>Don't have an account? <a href="./toaster2.jsx" target="_blank" className="myanchor">Sign Up</a></p>
            </form>
        </div>
    )
}
export default Toast2