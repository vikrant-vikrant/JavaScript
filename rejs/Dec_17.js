async function photo() {
  try{
    let url = "https://randomfox.ca/floof/";
    let res = await fetch(url);
    let data = await res.json();
    document.querySelector("img").src = data.image;
    // console.log(data.image);
  }catch(e){
    console.log("Error -", e)
  }
  }
// photo();
async function emojihub() {
  try{
    let url2 = "https://emojihub.yurace.pro/api/random";
    let res = await axios.get(url2);
    document.querySelector("h1").innerHTML = `Vikrant ${res.data.htmlCode[0]}`;
  }catch(e){
    console.log(e)
  }
}
emojihub();
async function cat() {
  try{
    let url2 = "https://cat.yurace.pro/api/random";
    let res = await fetch(url2);
    let data = await res.json();
    document.querySelector("h1").innerHTML = `Vikrant ${data.htmlCode[0]}`;
  }catch(e){
    console.log("Emoji not found", e)
  }
}
// cat();