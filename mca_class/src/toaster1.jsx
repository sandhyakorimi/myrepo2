


import React, { useState, useRef } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { motion, AnimatePresence } from "framer-motion";

const Toast1 = () => {
    const [isRegister, setIsRegister] = useState(false);

    const [formData, setFormData] = useState({ 
        Username: "",
         Password: "" });

    const [test, setTest] = useState({
        FirstName:"",
        SecondName:"",
        Password:"",
        Con_Password:""
    });

    const myref = useRef(null);
    const myref2 = useRef(null);

    const myref3 = useRef(null);
    const myref4 = useRef(null);
    const myref5 = useRef(null);
    const myref6 = useRef(null);

    // const myline= useRef(null);

    const mybtn1 = (event) => {
        event.preventDefault();
        const UserRegex = /^(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
        const PasswordRegex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-`~!@#$%^&*()_+={}[\]/"';:,.<>?|]).{8,}$/;

        if (formData.Username === "") {
            myref.current.focus();
        } else if (!UserRegex.test(formData.Username)) {
            toast.error("Enter a valid Username");
        } else if (formData.Password === "") {
            myref2.current.focus();
        } else if (!PasswordRegex1.test(formData.Password)) {
            toast.error("Password incorrect");
        }

        else {
            toast.success(`🎉 ${isRegister ? "Registered" : "Logged in"} successfully!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    };


    const mybtn2 = (event) => {
        event.preventDefault();
        const UserRegex = /^(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
        const PasswordRegex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-`~!@#$%^&*()_+={}[\]/"';:,.<>?|]).{8,}$/;

        if (test.FirstName === "") {
            myref3.current.focus();
        } else if (!UserRegex.test(test.FirstName)) {
            toast.error("Enter a valid FirstName");
        } 
          else if (test.SecondName === "") {
            myref4.current.focus();
        } else if (!UserRegex.test(test.SecondName)) {
            toast.error("Enter a valid SecondName");
        } else if (test.Password === "") {
            myref5.current.focus();
        }else if (!PasswordRegex1.test(test.Password)) {
            toast.error("Enter a valid Password");
        }
        else if (test.Con_Password === "") {
            myref6.current.focus();
        }  
        else if (test.Password!==test.Con_Password){
            toast.error("Password and Con_Password must Same");
        }
        else {
            toast.success(`🎉 ${isRegister ? "Registered" : "Logged in"} successfully!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    };
    return (

        <div className="container">
        <div className="div1">
            <>
            {  isRegister ? (
                <>
<div className="left-panel">
    <div className="subh2">
      <div className="icon">💼 </div>
      <h3> Empowering Job Seekers</h3>
      <p className="myp">Helping you discover private and government job opportunities across India with a single click.</p>
    </div>
    <div className="subh2">
      <div className="icon">🌐</div>
      <h3>All-In-One Access</h3>
      <p className="myp">Browse verified job portals, official websites, and latest job openings—all in one place.</p>
    </div> 
  </div>
                </>
                ):(
                    <>
                            <h1 className="subh1">Your journey begins with One Stop</h1>
                            <h3  className="subh2">Connect . Explore . Achieve</h3>
                    </>
                )}
            </>           
        </div>
  <div className="div2">
{isRegister ? (
    <form className="form1">
        <h1>Register</h1>
        {/* <div className="fdiv1"> */}
            {/* <div className="sdiv1"> */}
        <label className="rlab">First Name:</label>
        <input type="text" placeholder="Firstname" className="rin" ref={myref3} onChange={(e) => setTest({ ...test, FirstName: e.target.value })} />
        <label className="rlab">Second Name:</label>  
        <input type="text" placeholder="Secondname" className="rin" ref={myref4} onChange={(e) => setTest({ ...test, SecondName: e.target.value })} />
         {/* </div> */}
        {/* <div className="sdiv2">  */}
             <label className="rlab">Password:</label>
        <input type="password" placeholder="Password" className="rin" ref={myref5} onChange={(e) => setTest({ ...test, Password: e.target.value })} />
        <label className="rlab">Con_Password:</label>
        <input type="password" placeholder="Con_Password" className="rin" ref={myref6} onChange={(e) => setTest({ ...test, Con_Password: e.target.value })} />
        {/* </div> */}
        {/* // </div> */}
        <button onClick={mybtn2} className="btn1">Register</button>
        <p>Already have an account? <a href="#" onClick={() => setIsRegister(false)}>Sign In</a></p>
        
    </form>
) : (
    <form className="form2">
        <h1>Login</h1>
        <label>Username:</label>
        <input type="text" placeholder="Username" ref={myref} onChange={(e) => setFormData({ ...formData, Username: e.target.value })} />
        <label>Password:</label>
        <input type="password" placeholder="Password" ref={myref2} onChange={(e) => setFormData({ ...formData, Password: e.target.value })} />
        <button onClick={mybtn1} className="btn2">Login</button>
        {/* <p>Don't have an account? <a href="#" onClick={() => setIsRegister(true)}>Sign Up</a></p> */}

        <div className="ordiv"><span>OR</span></div>
       <div className="cdiv">
         <div className="gdiv"></div>
         <div className="fdiv"></div>
        <div className="ldiv"></div></div> 

<center><p>Don't have an account? <a href="#" onClick={() => setIsRegister(true)}>Sign Up</a></p>
</center>
    </form>
)}    <ToastContainer position="top-right" autoClose={2500} limit={1} transition={Zoom} />
        </div>
    </div>
    );
   
};
export default Toast1; 


