import react from "react"
import Child from "./child"
const Parent=()=>{
    const myname = "Sandhya";
    // const myobj = {
    //     name: "Android",
    //     colour:"green",
    //     cost:"20000"
    // }

   const myarr = [{ name: "Android",colour:"green", cost:"20000"},
    { name: "Vivo",colour:"black", cost:"30000"},
    { name: "Samsung",colour:"white", cost:"50000"}
]
//    const myarr = [1,3,4,5,6];
    return(
        <>
        {/* <Child name="aditya"/> */}
        <Child myname = {myname} myarr={myarr}/>
        </>
    )
}
export default Parent