const express = require('express');
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let port = 8080;
app.listen(port,(req,res)=>{
  console.log("Port is listening");
})
app.get("/",(req,res)=>{
  res.send("Welcome to the portfolio");
})