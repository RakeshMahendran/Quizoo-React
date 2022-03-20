const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require('./routes/users');
const cors = require("cors");
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
let server;

app.use(cors());
app.use(bodyParser.urlencoded({extended :true,limit:'20mb' }));
app.use(bodyParser.json({limit:'20mb'}));



mongoose
.connect('mongodb+srv://flakers:abcd1234@cluster0.ma8g9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
   {useNewUrlParser: true})
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use('api/users', routes);

server = app.listen(PORT, () => {
  console.log("Backend is running on Port : 3000" )
});
