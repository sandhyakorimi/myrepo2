import react from "react"
import "./myfirst.css"

const Footer= () =>{
    return(
        <div className="footer">
            <div className="footdiv1">
                <h2>Contact Us</h2>
                <div className="myp2">
                <div className="pdiv">1-1, Namavaram, AndhraPradesh, India</div>
                <div className="pdiv">E-mail:<a href="#" target="_blank"> sandhyakorimi5566@gmail.com</a></div>
                <div className="pdiv">Phone: +91 ...0055 </div>
                </div>
            </div>
            <div className="footdiv2">
                <h2>Follow Us</h2>
                <p className="myp">
                <a href="#"><i className="fa-brands fa-facebook fa-2xl" style={{color:"rgb(0, 115, 255)"}} ></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter fa-2xl" style={{color:"rgb(0, 88, 230)"}}></i></a>
                <a href="#"><i className="fa-brands fa-square-instagram fa-2xl" style={{color:"rgb(206,0,206)"}} ></i></a>
                <a href="#"><i className="fa-brands fa-linkedin fa-2xl" style={{color:"rgb(19, 119, 250)"}}></i></a>
                </p>
            </div>
        </div>
    )
}
export default Footer
