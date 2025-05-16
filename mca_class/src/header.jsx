import react from "react"
import "./myfirst.css"
 
const Header = ()=>{
    function butn1(){
       
    }
    return(
      <div className="myhead">
      <div className="logo"></div>
      <div className="span1"><span className="span2">Happy Holi</span></div>
      <button className="btn1" onClick={butn1()}>Menu</button>
      <button className="btn2">About</button>
      <button className="btn3">Contact</button>
      </div>
    )
}
export default Header

