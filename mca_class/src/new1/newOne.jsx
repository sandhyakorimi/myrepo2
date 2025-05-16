import React from "react";
import '../new1/new.css'
import { useState, useRef } from "react";
const NewOne=()=>{
    const [inputs, setInputs] = useState(0);
    const [entered , setEntered] = useState(false);
    const [data, setData] = useState({
        Rollno : "",
        UserName: "",
        Age:""
    });
    const [inputValue, setInputValue] = useState("");
  function newbtn() {
    setEntered(false);
    if (!inputValue) {
      alert("Please enter a value");
      return;
    }

    if (inputs === 0) {
      setData(prev => ({ ...prev, Rollno: inputValue }));
    } else if (inputs === 1) {
      setData(prev => ({ ...prev, UserName: inputValue }));
    } else if (inputs === 2) {
      setData(prev => ({ ...prev, Age: inputValue }));
    }

    setInputValue("");
    if (inputs < 2) {
      setInputs(prev => prev + 1);
    }
    else {
        setInputs(0)
    }
  }
    function enterbtn(){
        setEntered(true);
    }
    const placeholder=()=>{
        if(inputs===0) return "Enter your Roll no"
       else if(inputs===1) return "Enter your UserName"
       else return "Enter your age";
    }
    return(
        <>
        <div className="newContainer">
            <div className="newdiv1">
                <input type="text" placeholder= {placeholder()} value={inputValue} onChange={(e) => setInputValue(e.target.value) }/>
            </div>
            <button className="newbutton"  onClick={newbtn}>ADD</button>

        <button onClick={enterbtn}> entered data</button>
        {
            entered &&(
                <>
                <p>RollNo:{data.Rollno}</p>
                <p>UserName:{data.UserName}</p>
                <p>AGE:{data.Age}</p>
                </>
            )
        }
        </div>
        </>
    )
}
export default NewOne