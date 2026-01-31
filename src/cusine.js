const CuisineData = [
    {
        "id": "1",
        "Name": "Indian-Cusine",
        "Starters": "Paneer Tikka(Veg), Chicken Tandoori(Non-veg)",
        "Main": "Masala Dosa, Thepla, Butter Chicken with Roti, Fish Curry and Rice",
        "Dessert" : "Gulab Jamun with Vanilla ice-cream , Jalebi with Rabadi",
        "Photo": "Cuisine_description/images/indian.jpg"
    },
    {
        "id": "2",
        "Name": "French-Cusine",
        "Starters": "Alsatian Cheese Tart, French omlette",
        "Main": "BOEUF BOURGUIGNON(french Beef stew), POTATOES DAUPHINOISE, CASSOULET(casserole), QUICHE LORRAINE",
        "Dessert" : "Choux Pastry,Macarons", 
        "Photo": "Cuisine_description/images/french.jpg"
    },
    {
        "id": "3",
        "Name": "Chineese-Cusine",
        "Starters": "Spring roll (veg/non veg), Dumplings (veg/non veg), Prawn crackers",
        "Main": "Manchurian gravy with steamed rice, Fried rice (veg/ non veg), Chopsuey(veg/ non veg), Noodles (veg/ non veg)",
        "Dessert" : "Moon Cake, Egg tart",
        "Photo": "Cuisine_description/images/chineese.jpg"
    },
    {
        "id": "4",
        "Name": "Indonesian-Cusine",
        "Starters": "Risoles, Tahu Goreng / Fried Tofu",
        "Main": "Nasi goreng, Satay, Gado gado, Bakmi Goreng",
        "Dessert" : "Wingko, Klepon",
        "Photo": "Cuisine_description/images/indonesian.jpg"
    },
    {
        "id": "5",
        "Name": "Italian-Cusine",
        "Starters": "Bruschetta, Jalapeno cheese balls",
        "Main": "Margarita pizza, Cheesy lasagna(veg/ non veg), Pesto Pasta(veg/ non veg), Alfredo spaghetti (veg/ non veg)",
        "Dessert" : "Tiramisu, Gelato, Panna Cotta",
        "Photo": "Cuisine_description/images/italian.jpg"
    },
    {
        "id": "6",
        "Name": "Lebanese-Cusine",
        "Starters": "Hummus kawarma with pita bread, Falafel",
        "Main": "Kibbeh, Fattoush, Kafta, Sfeeha",
        "Dessert" : "Ayesh el Saraya, Jazarieh",
        "Photo": "Cuisine_description/images/lebanese.jpg"
    },
    {
        "id": "7",
        "Name": "Mexican-Cusine",
        "Starters": "Nachos (veg/ non veg), Baked tortilla",
        "Main": "Guacamole with tortillas, Tacos (veg/ non veg), Burrito (veg/ non veg), Cheese quesadillas",
        "Dessert" : "Churros with chocolate sauce/Nutella,Tres leches",
        "Photo": "Cuisine_description/images/mexican.jpg"
    },
    {
        "id": "8",
        "Name": "Thai-Cusine",
        "Starters": "Tam makhuea, Thai Pandan Chicken(Kai ho bai toei)",
        "Main": "Thai green curry with steamed rice, PAD THAI, Khao Soi(thai coconut noodke soup), Thai fish curry with steamed rice",
        "Dessert" : "Mango sticky rice, Mango Sorbet",
        "Photo": "Cuisine_description/images/thai.jpg"
    },
    

];

function CuisineTemplate(Cuisine) {
    return `
      <div class="cuisine">
      <img class = "cuisine-photo" src="${Cuisine.Photo}">
      <h6 class="cuisine-name">${Cuisine.Name}</h6>
      <p><b>Starters:</b> <i>${Cuisine.Starters} </i></p>
      <p><b>Main-Course:</b><i> ${Cuisine.Main} </i></p>
      <p><b>Dessert:</b> <i>${Cuisine.Dessert} </i></p>

      </div>
    `;
  }


document.getElementById("app").innerHTML = `
  <h3>Cuisines (${CuisineData.length} results)</h3>
  ${CuisineData.map(CuisineTemplate).join("")}
  <p>More cuisines will be added shortly</p>
`;
