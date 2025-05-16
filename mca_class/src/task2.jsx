// import React from "react";
// import { useState } from "react";
// const MyTask=()=>{
//     const [test, setTest] = useState(false);
//     const Change=()=>{
//      setTest(true);
//     }
//     const Reset=()=>{
//       setTest(true);
//      }

//  return(
//     <div>
//     <div className={test?"truecls":"falsecls"}></div> 
//      <button onClick={Change} >Change</button>
//      <button onClick={Reset}>Reset</button>
     
//     </div>
//  )
// }
// export default MyTask



// import React from "react";
// import { useState } from "react";
// const MyTask=()=>{
//     const [test, setTest] = useState(false);
//     const Change=()=>{
//      setTest(!test);
//     }
//  return(
//     <div>
//     <div className={test?"truecls":"falsecls"}></div> 
//      <button onClick={Change} >Change</button>     
//     </div>
//  )
// }
// export default MyTask


//random images in react(1)..............................

// import React from "react";
// import { useState } from "react";
// const MyTask=()=>{
//     const [test, setTest] = useState(<img src="../public/img1.jpg"/>);
//    // const myarray = [
//    //    <img src="../public/img1.jpg"/>,<img src="../public/img2.jpg"/>,
//    //    <img src="../public/img3.jpg"/>,<img src="../public/img4.jpg"/>
//    // ];
//    const Change=()=>{
//       let myran = Math.floor(Math.random()*4-0)+1;
//       setTest( <img src={`../public/img${myran}.jpg` } alt={myran} height={400} width={400} /> );
//    }
//  return(
//     <div>
//     <div className="defaultdiv"> {test}
//       </div> 
//     <button onClick={Change}>Change</button>     
//     </div>
//  )
// }
// export default MyTask




//random images in react(2).......................................

import React from "react";
import { useState } from "react";
const MyTask=()=>{
    const [test, setTest] = useState(<img src="../public/img1.jpg"  height={400} width={400}/>);
   const myarray = [
      <img src="../public/img1.jpg" height={400} width={400}/>,<img src="../public/img2.jpg" height={400} width={400}/>,
      <img src="../public/img3.jpg" height={400} width={400}/>,<img src="../public/img4.jpg"  height={400} width={400}/>
   ];
   const Change=()=>{
      let myran = Math.floor(Math.random()*3-1)+1;
      setTest( myarray[myran]);
   }
 return(
    <div>
    <div className="defaultdiv"> {test}
      </div> 
    <button onClick={Change}>Change</button>     
    </div>
 )
}
export default MyTask