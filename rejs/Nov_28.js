//Spread
let arr = [..."vikrant"];
console.log(arr)
console.log(...arr)

console.log(Math.min(1,22,33));
console.log(Math.max(1,22,33));

let nums = [12,3,4,5,6,7];
console.log(Math.min(...nums));
console.log(Math.max(...nums));
console.log(...nums);

//Spread with array literals
let newNums = [...nums];
console.log(newNums);
console.log([..."Vishal"]);

//to combine two array
let kaka = [...arr,...nums];
console.log(kaka)

//Spread with object literals
let data = {
  email: "IronMan@gimal.com",
  pass: 123,
}
let dataCopy = {...data,id:123,country:"pok"};
console.log(dataCopy)

let obj1 = {...arr};
console.log(obj1)

//Rest- it collect all data into array
//arguments
function sum(...args){
  for(i of args){
    console.log(`You gave us : ${i}`)
  }
}
sum(1,2,1122,322,22)

function min(a,b,c){
  console.log(arguments)
}
min(3,4,2)

function sum(...args){
  return args.reduce((sum,el) => sum + el);
}
console.log(sum(3,4,23,121))

function min(msg,...args){
  console.log(msg)
  return args.reduce((min,el)=>{
    if(min>el){
      return el;
    }else{
      return min;
    }
  })
}
console.log(min("vikrant",2,23,12,32,-4));

//Destructuring
let students = ['shahil','annu','asths','shivam']
let [frist,second,...others] = students;
console.log(frist)
console.log(second)
console.log(others)

//Destructuring in object
let stu1 = {
  name:"vikrant",
  age:21,
  skill:['coding','cammunication','body language'],
  username:"vikrant@123",
  pass: 12321,
  city:"pune"
}
let {username: user,pass: key,city: place = "delhi"} = stu1;
console.log(user)
console.log(key)
console.log(place)

//Practice Questoins js part 8
let squSumAvge = (...n) => {
let fix = n.reduce((num,el)=>(num + el*el))
return(fix/n.length)
}
console.log(squSumAvge(3,6,9));

let plue5 = nums.map((num)=>{
  return num + 5;
})
console.log(nums)
console.log(plue5)

let uppercase = students.map((student)=>{
  return student.toUpperCase();
})
console.log(uppercase)


const mergeObj = (obj2,obj3)=>({...obj2,...obj3})
console.log(mergeObj({a:1,b:2},{c:3,d:4}))