import "./style.css"
import "./social-menu.css"
import "./cuisineOnly.css"
import "./bootstrap.min.css"
import Sejal from "./images/Sejal.jpg"
import richa from "./images/richa.jpg"
import Apoorva from "./images/Apoorva.jpg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function  Aboutcompo()
{
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
          <div className="header">ABOUT US</div>  
          <div className="info">
            <div className="card" style={{width: '18rem'}}>
            <img src={richa} alt="richa"  alt="richa" width={250} height={350} />
              <div className="card-body">
                <h5 className="card-title">Richa Ramesh</h5>
                <p className="card-text">
                  Semester:3rd Sem.<br />
                  Section:'L'.
                  <br />
                  SRN: PES1UG20CS712
                </p>  
              </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
            <img src={Sejal} alt="Sejal"  alt="Sejal" width={250} height={350} />
            <div className="card-body">
                <h5 className="card-title">Sejal Singhania</h5>
                <p className="card-text">
                  Semester:3rd Sem.<br />
                  Section:'L'.<br />
                  SRN: PES1UG20CS719
                </p>  
              </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
            <img src={Apoorva} alt="Apoorva"  alt="Apoorva" width={250} height={350} />
              <div className="card-body">
                <h5 className="card-title">Apoorva Sarvade</h5>
                <p className="card-text">
                  Semester:3rd Sem.<br />
                  Section:'L'.<br />
                  SRN: PES1UG20CS728
                </p>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Aboutcompo