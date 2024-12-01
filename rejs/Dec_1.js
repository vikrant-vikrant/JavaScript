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
id.addEventListener("keypress",function(){
  console.log("keypress",id.value)
})