//use headers in API
async function photo() {
  try{
    // const config = {Headers:{Accept:"application/json"}}
    const config = {Headers:{Accept:"User-Agent: Mozilla/5.0"}}
    let url = "https://randomfox.ca/floof/";
    let res = await fetch(url,config);
    let data = await res.json();
    // document.querySelector("img").src = data.image;
    console.log(data)
  }catch(e){
    console.log("Error -", e)
  }
  }
photo();