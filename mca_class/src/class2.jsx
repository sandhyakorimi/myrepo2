import { useState } from "react";
import React from "react";

const MyState = ()=>{
    const [test, setTest] = useState(0);
    // const [test, setTest] = useState(["sandhya","sudha","myone"]);
    // const myname="sandhya";
    // const mydata = [];

    // const increment = ()=>{
    //     setTest(test);

    //     // setTest(test+1);
    //     // setTest(test+1);

    // //   setTest(prev=>prev+1);
    // //   setTest(prev=>prev+1);
    //     //  setTest(prev=>prev+1)

    // }
    
    const increment = ()=>{
        setTest(prev=>prev+1)
    }
    const decrement=()=>{
        if(test>0){
        setTest(prev=>prev-1)
        }
    }
    const reset=()=>{
        setTest(0)
    }
    return(
        <div>
            <h1>MyState:</h1>
            <p>{test}</p>
            {/* {
                test.map((val,index)=>{
                    return <div key={index}>
                        <h1>{val}</h1>
                    </div>
                })
            } */}

            {/* <h1>number:{mynum}</h1> */}
            {/* <button onClick={()=>setTest(test+1)}>Increment</button> */}
            {/* <button onClick={increment}>Increment</button> */}





            <button onClick={increment}>Increment</button> 
            <button onClick={decrement}>Decrement</button>
             <button onClick={reset}>Reset</button>


        </div>
    )
}
export default MyState