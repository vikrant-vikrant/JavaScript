//API request
let url = "https://randomfox.ca/floof/";
function photo(){
  fetch(url)
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log(data.image);
  })
  .catch((err)=>{
    console.log("error occourid",err);
  })
}
// photo();