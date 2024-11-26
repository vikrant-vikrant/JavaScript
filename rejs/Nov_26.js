//Try & Catch
try{
  console.log(a);
}catch(err){
  console.log(`Value not fouund
${err}
    `)
}

//Arrow function(1)
const sum = (a,b) =>{
  return a+b;
};
console.log(sum(4,3))

//Arrow function(2)
const cube = a =>{
  return a*a*a;
}
console.log(cube(4))

//Arrow function(3)
const hello = () =>{
  console.log("Hello World");
};
hello()

//Implicit Return in arrow functions(4)
const mul = (a,b) =>(a*b);
console.log(mul(4,5));

//Set timeout
// setTimeout(function,timeout);

setTimeout(() => {
  console.log("Hey vikrant")
}, 4000);

//set Interval
//setInterval(function,timeout)
 
// let id = setInterval(()=>{
//   console.log("komal");
// },1000);

// clearInterval(id); to stop the setInterval