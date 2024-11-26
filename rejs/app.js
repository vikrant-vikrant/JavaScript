// let maxRange = prompt("Enter the maxumin range to start the game");
// let randomNum = Math.floor(Math.random() * maxRange) + 1;
// let guess = prompt("Guess the number ?");
// while(true){
//   if(guess === "quit"){
//     alert("You quit the game");
//     break;
//   }else if(guess == randomNum){
//   console.log(`Congrats you guess right, The number was ${guess}`)
//   break;
// }else if(guess < randomNum){
//  guess = prompt("Hint, Your guess is smaller then atuchal, Guess the number ?");
// }else if(guess > randomNum){
//  guess = prompt("Hint, Your guess is bigger the atuchal, Guess the number ?");
// }else{
//   alert("Error");
//   break;
// }}

// console.log(Math.floor(Math.random() * 6 ) + 1);
// let car = {
//   name:"tata nexon",
//   model:"xuv 365",
//   color:"charcol black"
// }
// console.log(car.name)

// let p = {
//   name:'vikrant',
//   age:21,
//   city:'delhi'
// }
// p.city = 'kaka York';
// p.country = 'United state'
// console.log(p)

// function numAverage(a,b,c){
//   let ave = (a+b+c)/3
//   console.log(Math.floor(ave))
// }
// numAverage(9,4,3)

// function printTable(n){
//   for(let i = 1;i<=10;i++){
//     console.log(`${n} * ${i} = ${n*i}`)
//   }
// }
// printTable(5);

// function addN(n){
//   let totaladd = 0;
//   for(let i = 1;i<=n;i++){
//     totaladd += i
//   }
//   return totaladd;
// }
// console.log(addN(10))

// let arr = ["i","Love","Books","&","myself"];
// function addOfArr(arr){
//   let santence = " ";
//   for(let i = 0;i<=arr.length-1;i++){
//     santence += arr[i] + " ";
//   }
//   console.log(santence);
// }
// addOfArr(arr);

// function call(fun,n){
//   for(let i = 1;i<=n;i++){
//     fun();
//   }
// }
// let kaka = function(){
//   console.log("hey")
// }
// call(kaka,3);

// function oddEvenTest(request){
//   if(request === "odd"){
//     let odd =  function(n){
//       console.log(!(n%2==0));
//     }
//     return odd;
//   }else if(request === "even"){
//     let even = function(n){
//       console.log(n%2==0);
//     }
//     return even
//   }else{
//     console.log("wrong request")
//   }
// };
// let ff = oddEvenTest("odd");
// console.log(ff(9));

// const calculator = {
//   add: function(a,b){
//     return a+b;
//   },
//   sub(a,b){
//     return a-b;
//   },
//   mul: function(a,b){
//     return a*b;
//   },
// }
// console.log(calculator.add(calculator.add(4,4),9))

// let arr = ['vikr','komal','najma','sachin','dev'];
// let n = 4;

// function elementLargerThan(arr,n){
// let ans = [];
// for(let i = 1;i<=arr.length-1 ;i++){
//   if(arr[i].length > n){
//     ans.push(arr[i]);
//   }
// };
// console.log(ans)
// };
// elementLargerThan(arr,5);
// elementLargerThan(['komal','vishal','sachin','najma','ramchanderparsad'],8);

let str = "abcdabcdeffgaaahh";
let ans = "";
for(let i = 0;i<=str.length-1;i++){
  if(!ans.includes(str[i])){
    ans += str[i]
  }
}
// console.log(ans);

// function longestCountry(country){
//   let largestCountry = "";
// for(let i = 0;i<=country.length-1;i++){
//   if(country[i].length > largestCountry.length){
//     largestCountry = country[i];
//   }
// }
// console.log(largestCountry);
// }

// longestCountry(['india','canada','china','austrila']);

let srt = "Aica";
let l = 0;
for(let i = 0;i<=srt.length-1;i++){
  if(
    srt[i] == ("a") ||
    srt[i] == ("e") ||
    srt[i] == ("i") ||
    srt[i] == ("o") ||
    srt[i] == ("u") 
  ){
    l++;
  }
}

function gererateRandom(a,b){
  let x = Math.floor(Math.random() * (b-a))
  console.log(x+ (a));
}
// gererateRandom(5,10);

// FROM HERE CHATGPT QUESTIONS STARTS 
// let arr = [11,21,96,2,-51,1];
// let max = arr[0];
// let min = arr[0];
// for(let i = 0;i<=arr.length-1;i++){
//   if(max<arr[i]){
//     max = arr[i];
//   };
//   if(arr[i] < min){
//     min = arr[i];
//   };
// }
// console.log(max);
// console.log(min);

// let string = 'vikrnat is a good boy';
// function countVowel(string){
//   let vowel = 0;
//   for(let i = 0;i<=string.length-1;i++){
//   if(
//     string[i] == 'a' || 
//     string[i] == 'e' || 
//     string[i] == 'i' || 
//     string[i] == 'o' || 
//     string[i] == 'u'){
//       vowel++;
//     }
// }
// console.log(vowel)
// }
// countVowel(string);



// let a = ['a','b','c'];
// let b = ['a','b','c'];
// let check = "yes";
// for(let i = 0;i<=a.length-1;i++){
//   if(!(a[i] === b[i])){
//     check = "no"
//   }break;
// }
// console.log(check)

// for(let i = 1;i<=100;i++){
//   if((i%5 == 0) && (i%3 == 0)){
//     console.log("FizzBuzz")
//   }else if(i%5 == 0){
//     console.log("Buzz")
//   }else if(i%3 ==0){
//     console.log("Fizz")
//   }else{
//   (console.log(i))
//   };
// }

// let arr = ['vik','kom','vis','sach','kom','vis','kom'];
// let kaka = [];
// for(let i = 0;i<=arr.length-1;i++){
//   if(kaka.includes(arr[i]) == false){
//     kaka.push(arr[i]);
//   }
// }
// console.log(kaka)

// let fri = ['ravi','sonu','manjeet'];
// console.log(kaka.concat(fri))

// let arr = 'vikabcdevikabe';
// let abc = [];
// let asd = '';
// for(let i = 0;i<=arr.length-1;i++){
//   if(abc.includes(arr[i]) ===  false){
//     abc.push(arr[i])}
// }
// console.log(abc.join(''));

// let a = prompt("Enter the frist number");
// let c = prompt("+,-,*,/");
// let b = prompt("Enter the second number");
// console.log(eval(`${a} ${c} ${b}`));

let num = [11,22,33,12,1,121];
for(let i = 0;i<num.length;i++){
  for(let f = 0;f<num.length-i-1;f++){
    if(num[f] > num[f+1]){
      let tem = num[f];
      num[f] = num[f+1];
      num[f+1] = tem ;
    }
  }
}
console.log(num);

// ozi = null ;
let add = (a=9,b=0) =>(
   a+b
);
try{
  console.log(add(add(3,4),add(5,4)))
  // add(4,5)
}catch(err){
  console.log("not here");
  console.log(err)
}