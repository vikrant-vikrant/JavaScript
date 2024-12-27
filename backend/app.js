const express = require("express");
const app = express();

// console.log(app)





app.listen(3000,()=>{
  console.log("lestening port 3000")
});

app.use((req,res)=>{
  console.log("request recived")
})