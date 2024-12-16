//async function
async function kaka() {
  // throw "kaka";
  // console.log(a)
}
// kaka()
//   .then((resolve) => {
//     console.log("printed successfully");
//   })
//   .catch((rejected) => {
//     console.log("not printed");
//   });

let vikrnat = async function vikrnat() {
  return "vikrant";
};
// vikrnat()
//   .then(() => {
//     console.log("solved");
//   })
//   .catch(() => {
//     console.log("error found");
//   });
//await keyword
function getNum() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log(Math.floor(Math.random() * 10) + 1);
      resolve();
      rejected();
    }, 1000);
  });
}

// getNum();
async function demo() {
  await getNum();
  await getNum();
  await getNum();
  getNum();
}
// demo();

let komal = document.querySelector("h1");
function colorChange(color, delay) {
  return new Promise((resolve,rejected)=>{
    setTimeout(() => {
      let num = Math.floor(Math.random()*10)+1;
      if(num > 7){
        rejected("error occourid")
      }
      komal.style.color = color;
      resolve("color changed");
      console.log(num)
    }, delay);
  })
}

async function color() {
  try{
    await colorChange("red", 1000);
    await colorChange("green", 1000);
    colorChange("blue", 1000);
  }
  catch(err){
    console.log(err)
  }

  let a = 5;
  console.log(a)
}
// color();

//API
async function getNeko() {
  const response = await fetch('https://nekos.best/api/v2/neko')
  const json = await response.json()
  console.log(json.results[0].url)
}