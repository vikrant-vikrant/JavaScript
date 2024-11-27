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

//Map
let double = arr.map(function(el){
  return el*2;
})
// console.log(double);

let gpa = boys.map((marks)=>{
  return marks.marks / 10 ;
})
// console.log(gpa);

//Filter
let nums = [12,3,4,5,6,7];
let even = nums.filter((num)=>(num % 2 == 0));
let odd = nums.filter((num)=>(num % 2 != 0));
let g = nums.filter((num)=>(num > 3));
// console.log(even,odd,g)

//Every(AND)
let small = nums.every((n)=>(n<10));
// console.log(small)

//Some(OR)
let big = nums.some((n)=>(n>10))
// console.log(big)

//Reduce
// console.log(nums.reduce((res,el)=>(res+el)));

let max = nums.reduce((max,el) =>{
  if(max < el){
    return el;
  }else{
    return max;
  }
});

// Practice Qs 
// console.log([10,20,110,210].every((n)=>(n % 10 == 0)));

let min = nums.reduce((min,el)=>{
  if(min < el){
    return min;
  }else{
    return el;
  }
});
// console.log(min);

//Default Parameters
let mul = (a,b=1) =>{
  return a*b;
}
// console.log(mul(4,3));

//spread

// console.log(..."vikrant")
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))