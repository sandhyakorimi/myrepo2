import react from "react";
// import "./mycomponent.css"
import style from "./mycomponent.module.css"
const MyComponent = () =>{
    return(
        // <h1>hey this sandhya</h1> // only single tag
        // <div>
        //     <h1>hey this sandhya</h1> 
        //     <h1>hey this sandhya</h1>
        // </div>
        <>
                 <h1>hey  this sandhya</h1> 
                 <h1>hey this sandhya</h1>
                 <p className={style.main}>Hello</p>
        </>
    )
};

export default MyComponent