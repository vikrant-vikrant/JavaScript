//this with arrow function
function regularFunction() {
  console.log(this); // Depends on the caller
}
const arrowFunction = () => {
  console.log(this); // Inherits `this` from the surrounding scope
};

// In a browser's global scope
// regularFunction(); // Logs: Window
// arrowFunction();   // Logs: Window

// Inside an object
const obj = {
  method: regularFunction,
  arrow: arrowFunction,
};

// obj.method(); // Logs: obj
// obj.arrow();  // Logs: Window (or outer `this`)



//practice Qs
const squ = a =>(a*a);
// console.log(squ(5))

// let id = setInterval(()=>{
//   console.log('Hello World')
// },2000)

// setTimeout(() => {
//   clearInterval(id)
//   console.log("celar interval ran")
// }, 10000);

//Assignment question
//1st
let arrayAverage = (a) =>{
  let total = 0;
  for(let num of a){
    total += num;
  }
  return total / a.length 
}
let a = [4,4,10]
// console.log(arrayAverage(a))

// 2nd
let isEven = a =>((a%2==0?console.log("Even"):console.log("Odd")));
// isEven(12);


//forEach
let arr = [1,2,3,4,5];

function print(x){
  console.log(x);
};

// arr.forEach(print)
// arr.forEach((n) => console.log(n*n))

let boys = [{
  name:"vikrant",
  marks: 95,
},{
  name:"komal",
  marks: 96,
},{
  name:"vishal",
  marks: 99,
}]

// boys.forEach((student)=>{
//   console.log(student.marks)
// })
