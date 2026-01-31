
import "./style.css"
import "./social-menu.css"
import "./cuisineOnly.css"
import "./bootstrap.min.css"
import { useEffect } from "react"
import chineese from './images/chineese.jpg'
import indian from './images/indian.jpg'
import french from './images/french.jpg'
import indonesian from './images/indonesian.jpg'
import lebanese from './images/lebanese.jpg'
import mexican from './images/mexican.jpg'
import thai from './images/thai.jpg'
import italian from './images/italian.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import menuimg from "./Menu.jpeg"

function MenuComponent()
{


    const cuisineData = [
        {
            "id": "1",
            "Name": "Indian-Cusine",
            "Starters": "Paneer Tikka(Veg), Chicken Tandoori(Non-veg)",
            "Main": "Masala Dosa, Thepla, Butter Chicken with Roti, Fish Curry and Rice",
            "Dessert" : "Gulab Jamun with Vanilla ice-cream , Jalebi with Rabadi",
            "Photo": indian
        },
        {
            "id": "2",
            "Name": "French-Cusine",
            "Starters": "Alsatian Cheese Tart, French omlette",
            "Main": "BOEUF BOURGUIGNON(french Beef stew), POTATOES DAUPHINOISE, CASSOULET(casserole), QUICHE LORRAINE",
            "Dessert" : "Choux Pastry,Macarons", 
            "Photo": french
        },
        {
            "id": "3",
            "Name": "Chineese-Cusine",
            "Starters": "Spring roll (veg/non veg), Dumplings (veg/non veg), Prawn crackers",
            "Main": "Manchurian gravy with steamed rice, Fried rice (veg/ non veg), Chopsuey(veg/ non veg), Noodles (veg/ non veg)",
            "Dessert" : "Moon Cake, Egg tart",
            "Photo": chineese
        },
        {
            "id": "4",
            "Name": "Indonesian-Cusine",
            "Starters": "Risoles, Tahu Goreng / Fried Tofu",
            "Main": "Nasi goreng, Satay, Gado gado, Bakmi Goreng",
            "Dessert" : "Wingko, Klepon",
            "Photo": indonesian
        },
        {
            "id": "5",
            "Name": "Italian-Cusine",
            "Starters": "Bruschetta, Jalapeno cheese balls",
            "Main": "Margarita pizza, Cheesy lasagna(veg/ non veg), Pesto Pasta(veg/ non veg), Alfredo spaghetti (veg/ non veg)",
            "Dessert" : "Tiramisu, Gelato, Panna Cotta",
            "Photo": italian
        },
        {
            "id": "6",
            "Name": "Lebanese-Cusine",
            "Starters": "Hummus kawarma with pita bread, Falafel",
            "Main": "Kibbeh, Fattoush, Kafta, Sfeeha",
            "Dessert" : "Ayesh el Saraya, Jazarieh",
            "Photo": lebanese
        },
        {
            "id": "7",
            "Name": "Mexican-Cusine",
            "Starters": "Nachos (veg/ non veg), Baked tortilla",
            "Main": "Guacamole with tortillas, Tacos (veg/ non veg), Burrito (veg/ non veg), Cheese quesadillas",
            "Dessert" : "Churros with chocolate sauce/Nutella,Tres leches",
            "Photo": mexican
        },
        {
            "id": "8",
            "Name": "Thai-Cusine",
            "Starters": "Tam makhuea, Thai Pandan Chicken(Kai ho bai toei)",
            "Main": "Thai green curry with steamed rice, PAD THAI, Khao Soi(thai coconut noodke soup), Thai fish curry with steamed rice",
            "Dessert" : "Mango sticky rice, Mango Sorbet",
            "Photo": thai
        },
        
    
    ];
    
    function cuisineTemplate(cuisine) {
        return `
          <div class="cuisine">
          <img class = "cuisine-photo" src="${cuisine.Photo}">
          <h6 class="cuisine-name">${cuisine.Name}</h6>
          <p><b>Starters:</b> <i>${cuisine.Starters} </i></p>
          <p><b>Main-Course:</b><i> ${cuisine.Main} </i></p>
          <p><b>Dessert:</b> <i>${cuisine.Dessert} </i></p>
    
          </div>
        `;
      }
    
    useEffect(()=>{
        document.getElementById("app").innerHTML = `
        <h3>Cuisines (${cuisineData.length} results)</h3>
        ${cuisineData.map(cuisineTemplate).join("")}
        <p>More cuisines will be added shortly</p>
      `;
    })
    


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
        <div className="main_content img">
           
          <div className="info">


            <div id="app">
            </div>
          </div>
        </div>
      </div>
    );


    
}
export default MenuComponent