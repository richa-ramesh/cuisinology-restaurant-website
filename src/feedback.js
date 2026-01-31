import axios from "axios"
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
  import {useState} from "react";
  import {useEffect} from "react";
function FeedComponent()
{
    const[radio,setRadio]= useState({
        Food:"",Service:"",Ambience:"", OverallValue:"",

        });
        const handlechange=(e)=>{
            const{name,value}=e.target
            setRadio({
                ...radio,
                [name]: value,
              });
    
        }
    
        const feedback=()=>{
          if (window.confirm("Are you sure,You want to submit this feedback?")) {
              console.log("In here radio")
          axios.post("http://localhost:8000/feedback",radio).then((res)=>{
             alert(res.data.message);
          }).catch((err)=>
          {
              console.log(err)
          })
              
          }
      
          else
          {
              alert("You can Submit the form again!!")
          }
                 
          
      }
        console.log(radio)
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
          <div className="header">FEEDBACK</div>
          <div className="question">
            <form method="POST" action="http://localhost:8000/feedback">  
              <br />
              <h5><b> Food </b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h5>
              <br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Food" id="inlineRadio1" defaultValue="option1" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Food">Excellent</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Food" id="inlineRadio1" defaultValue="option1" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Food">Good</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Food" id="inlineRadio2" defaultValue="option2" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Food">Average</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Food" id="inlineRadio3" defaultValue="option3" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Food">Bad</label>
              </div>
              <br />
              <hr />
              <br />
              <h5><b>Service</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h5>
              <br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Service" id="inlineRadio1" defaultValue="option1" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Service">Excellent</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Service" id="inlineRadio1" defaultValue="option1" onChange={handlechange} />
                <label className="form-check-label" htmlFor="Service">Good</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Service" id="inlineRadio2" defaultValue="option2" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Service">Average</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Service" id="inlineRadio3" defaultValue="option3" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Service">Bad</label>
              </div>
              <br />
              <hr />
              <br />
              <h5><b>Ambience</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h5>
              <br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Ambience" id="inlineRadio1" defaultValue="option1" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Ambience">Excellent</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Ambience" id="inlineRadio1" defaultValue="option1" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Ambience">Good</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Ambience" id="inlineRadio2" defaultValue="option2" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Ambience">Average</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Ambience" id="inlineRadio3" defaultValue="option3" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="Ambience">Bad</label>
              </div>
              <br />
              <hr />
              <br />
              <h5><b>OverallValue</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h5>
              <br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="OverallValue" id="inlineRadio1" defaultValue="option1" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="OverallValue">Excellent</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="OverallValue" id="inlineRadio1" defaultValue="option1" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="OverallValue">Good</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="OverallValue" id="inlineRadio2" defaultValue="option2" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="OverallValue">Average</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="OverallValue" id="inlineRadio3" defaultValue="option3" onChange={handlechange}/>
                <label className="form-check-label" htmlFor="OverallValue">Bad</label>
              </div>
              <br />
              <hr />
              <br />
              <div className="form-check form-check-inline">
                <input type="button" defaultValue="Submit" onClick={feedback} />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}


export default FeedComponent;