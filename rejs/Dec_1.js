//extracting form data
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
  event.preventDefault();
  let input = document.querySelector("#user");
  // let pass = document.querySelector("#pass");
  // console.log(input.value);
  // console.log(pass.value);
  // alert(`Hey ${input.value} your password is ${pass.value}`)

  alert(`Hey ${this.elements[0].value} your password is ${this.elements[1].value}`)
})

//Input & change event
let id = document.querySelector("#kaka");
id.addEventListener("change",function(){
  console.log("change event",id.value)
})
id.addEventListener("input",function(){
  console.log("inputevent",id.value)
})
//keypress
id.addEventListener("keypress",function(){
  console.log("keypress",id.value)
})
//mouseout
let h1 = document.querySelector("h1")
h1.addEventListener("mouseout",function(){
  console.log("go away")
});
let btn = document.querySelector("button")
btn.addEventListener("click",function(){
  scroll(500,500);
  btn.style.backgroundColor="green"
})
document.querySelector("body").onload = function(){
  console.log("hey")
}

// let input = document.querySelector("#kaka")
id.addEventListener("input",function(){
  let p = document.querySelector("p")
  p.innerText = id.value;
})
