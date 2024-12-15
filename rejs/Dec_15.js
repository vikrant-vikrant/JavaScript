//async function
async function kaka() {
  // throw "kaka";
  // console.log(a)
}
kaka()
  .then((resolve) => {
    console.log("printed successfully");
  })
  .catch((rejected) => {
    console.log("not printed");
  });

let vikrnat = async function vikrnat() {
  return "vikrant";
};
vikrnat()
  .then(() => {
    console.log("solved");
  })
  .catch(() => {
    console.log("error found");
  });
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
demo();
