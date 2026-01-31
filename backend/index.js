var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var bodyparser = require("body-parser");

 

var app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded());

app.use(cors()); 
//CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain

 

mongoose.connect(

  "mongodb://localhost:27017/feedback",

  {

    useNewUrlParser: true,

    useUnifiedTopology: true,

  },

  () => {

    console.log("Connection established successfully");

  }

);

const feedbackSchema = new mongoose.Schema({

    food: String,
  
    ambience: String,
  
    service: String,
  
    overall:String,
  
  })

  const feedback = new mongoose.model("Feedback", feedbackSchema);

app.post("/feedback",function(req,res)
{
    const { Food,Service , Ambience,OverallValue} = req.body
    console.log(Food+" "+Service)
    const feed = new feedback({

    food: Food,
  
    ambience: Service,
  
    service: Ambience,
  
    overall:OverallValue,

      });

      feed.save((err) => {

        if (err) {

          console.log(err)

          res.send({message:"err Occured"});

        } else {

         console.log("Data added successfully!!")

         res.send({message:"Submitted!"});
        }

      });
})

app.listen(8000,function(){
    console.log("Server runnning at port 8000!!")
})