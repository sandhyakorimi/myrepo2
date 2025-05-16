import React from "react";
import { useState } from "react";

const Task3 = () =>{
    const [count, setCount] = useState(0);
    const Increment=()=>{
         count<20? setCount(count+1):alert("Greater than 20")
    }
    const Decrement=()=>{
        count>0? setCount(count-1):alert("Less than 0")
    }
//     const Reset=()=>{
//         setCount(0)
//    }
   return(
        <>
            <h1>UseState:</h1>
          <p>MyCount :{count}</p>
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
          <button onClick={()=>setCount(count=>{
            if(count>0){
                return 0
            }
          })}>Reset</button>          
        </>
    )
}
export default Task3


// import React from "react";
// // import { useState } from "react";

// const Task3 = () =>{
   
//    return(
//         <>
//             <h1>Hello</h1>
//           {/* <p>{count}</p> */}
       
          
//         </>
//     )
// }
// export default Task3