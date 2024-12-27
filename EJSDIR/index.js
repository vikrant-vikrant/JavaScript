const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");

app.set("View engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));


app.get("/rollDice", (req, res) => {
  let value = Math.floor(Math.random()*6 + 1);
  res.render("home.ejs",{value});
});

app.get("/insta/:name", (req, res) => {
  const instaData = require("./data.json");
  let {name} = req.params;
  const data = instaData[name];
  if(data){
    res.render("insta.ejs",{data});
  }else{
    res.render("error.ejs")
  }
});


app.get("*", (req, res) => {
  res.send("Page not found");
});

app.listen(8080, () => {
  console.log("app is listening to port 8080");
});
app.use((req, res) => {
  console.log("request resived");
});
