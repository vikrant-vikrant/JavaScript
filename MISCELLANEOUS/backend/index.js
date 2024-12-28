const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
  let {user,password} = req.query;
  res.send(`standard GET response ${user}`);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("standard POST response");
});

app.listen(3000, () => {
  console.log("App is listening to port 3000");
});

app.use((req, res) => {
  console.log("request resived");
});
