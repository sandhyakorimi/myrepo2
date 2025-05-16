// import React from "react";
// import { useState, useEffect } from "react";

// const Test = () => {
//     const[state, setState] = useState(0);
//     const[myState, setMyState] = useState(0);
//     useEffect(()=>{
//         console.log("testing");
//     },[state]);                             // dependencies : ony while click on setState the useEffect will Call " API calling"
//     return(
//         <>
//         <button onClick={()=>setState(state+1)}>CLick</button>
//         <p>value:{state}</p>
//         <button onClick={()=>setMyState(myState+1)}>CLick</button>
//         <p>value:{myState}</p>
//         </>
//     )
// }
// export default Test


// import React from "react";
// import { useState, useEffect } from "react";
// const Test=()=>{
//     const[state, setState] = useState(0);
//     const[myState, setMyState] = useState(0);
//     useEffect(()=>{
//         // console.log("testing");
//         document.title = `mytitle:${myState,state}`
//     },[state,myState]);
//     return(
//         <>
//         <button onClick={()=>setState(state+1)}>CLick</button>
//         <p>value:{state}</p>
//         <button onClick={()=>setMyState(myState+1)}>CLick</button>
//         <p>value:{myState}</p>
//         </>
//     )
// }
// export default Test




import React from "react";
import { useState, useEffect, useRef } from "react";
const Test=()=>{
    const[state, setState] = useState(0);
    // const[myState, setMyState] = useState(0);

    const myref = useRef(null);
    // useEffect(()=>{
    //     myref.current+=1;
    //     // setMyState(myState+1);
    //     // console.log(myref.current);
    // },[state]);
    // console.log(myref.current);

    // console.log("render")
    // useEffect(() => {
    //     if (myref.current) {
    //     // myref.current+=1;
    //         myref.current.focus(); // Focus input when component mounts
    //     }
    // }, []);


    const myfun=()=>{
        if (myref.current) {
            myref.current.focus();  // Call focus on the input element
        }else {
            console.log("myref.current is null");
        }
    }

    return(
        <>
        <button onClick={()=>setState(state+1)}>Click</button>
         {/* <p>value:{state}</p> */}
         <input type="text" ref={myref} />
        {/* <p>my ref value: {myref.current}</p> */}
        <button onClick={myfun}>onclick</button>
        </>
    )
}
export default Test
