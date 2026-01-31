import "./style.css"
import "./social-menu.css"
import "./cuisineOnly.css"
import "./bootstrap.min.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function  Contactcompo()
{


    function showAlert(){
        alert("Our Mail ID---> cuisinology@gmail.com"); 
    }
    
    function showAlert1(){
        alert("You can ping us up here -> 91+ ")
    }

    return(
        <div className="wrapper">
        <div className="sidebar">
          <h2>Cuisinology</h2>
          <ul>
          <li><Link to="/"><i className="fas fa-home" />Home</Link></li>
              <li><Link to="/menu"><i className="fas fa-ellipsis-v" />Menu</Link></li>
              <li><Link to="/feedback"><i className="fas fa-comments-dollar" />Feedback</Link></li>
              <li><Link to="/aboutus"><i className="fas fa-address-card" />About Us</Link></li>
              <li><Link to="/contact"><i className="fas fa-phone" />Contact us </Link></li>
          </ul> 
        </div>
        <div className="main_content">
          <div className="header">CONTACT US</div>  
          <div className="info">
            <div className="connect_us">
              <div className="inner">
                <p>
                  We would love to connect with you and hear your stories and experiences!
                  Feel free to conncet with us through any of the options..
                </p>
              </div>
              <br />
              <br />
              <div className="social-menu">
                <ul>
                  <li><a href="https://instagram.com/icespice2020?utm_medium=copy_link" target="_blank">  <i className="fa fa-instagram" /></a></li>
                  <li><a href="https://youtu.be/epAv0DAVv1k" target="_blank">  <i className="fa fa-youtube" /> </a></li>
                  <li><a href="" target="_blank">  <i className="fa fa-mail-bulk" onClick={showAlert} /> </a></li>
                  <li><a href="" target="_blank"> <i className="fa fa-mobile-alt" onClick={showAlert1} /> </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Contactcompo