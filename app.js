const express = require('express');
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"), {
  maxAge: "1d"
}));

app.get("/",(req,res)=>{
  res.render("index.ejs");
})

app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

app.use((req, res) => {
  res.status(404).redirect("/");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Portfolio is running on port ${port}`);
});
