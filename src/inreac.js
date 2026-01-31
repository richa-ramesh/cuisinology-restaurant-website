import "./style.css"
import "./social-menu.css"
import "./cuisineOnly.css"
import "./bootstrap.min.css"
import homeimg from "./Home.jpg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Component()
     {
      return (
        
  
        <div className="wrapper">
          <div className="sidebar">
            <i className />
            <h2>Cuisinology</h2>
            <ul>
              <li><Link to="/"><i className="fas fa-home" />Home</Link></li>
              <li><Link to="/menu"><i className="fas fa-ellipsis-v" />Menu</Link></li>
              <li><Link to="/feedback"><i className="fas fa-comments-dollar" />Feedback</Link></li>
              <li><Link to="/aboutus"><i className="fas fa-address-card" />About Us</Link></li>
              <li><Link to="/contact"><i className="fas fa-phone" />Contact us </Link></li>
            </ul> 
          </div>
          
          <div className="main_content image">
          
            <div className="info" style={{position:'absolute',bottom:'0px'}}>
            <div style={{display:'flex',flexDirection:'row'}}>
          <ul style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
              <li style={{marginRight:'10px'}}><Link to="/indian">Indian</Link></li>

              <li style={{marginRight:'10px'}}><Link to="/chinese">Chinese</Link></li>
              <li style={{marginRight:'10px'}}><Link to="/french">French</Link></li>
              <li style={{marginRight:'10px'}}><Link to="/thai">Thai</Link></li>
              <li style={{marginRight:'10px'}}><Link to="/lebanese">Lebanese</Link></li>
              <li style={{marginRight:'10px'}}><Link to="/mexican">Mexican</Link></li>
              <li style={{marginRight:'10px'}}><Link to="/indonesian">Indonesian</Link></li>
              <li style={{marginRight:'10px'}}><Link to="/italian">Italian</Link></li>
            </ul> 
          </div>
              <div />
              <div />
              <div />
            </div>
          </div>
      </div>
    
        
        
      );
   
  }
  export default Component
 