//Event Listeners for Elements
let h1 = document.querySelector("h1")
h1.addEventListener("click",function(){
  console.log("Don't touch me")
})
h1.addEventListener("dblclick",function(){
  console.log("I don't wannd listen you, you are rude ")
})
//this in Event Listeners
h1.addEventListener("mouseenter",function(){
  // console.log(this.innerText)
  console.log("Leave me alone i don't wanna talk")
});
// Keyboad Event
// let btn =  document.querySelector("button");
// btn.addEventListener("click",function(event){
//   // console.log(event)
//   console.log("clicked")
// })


//form event
let input = document.querySelector("input");
input.addEventListener("keydown",function(event){
  if(event.code == "ArrowUp"){
    console.log("up")
  }else if(event.code == "ArrowDown"){
    console.log("down")
  }else if(event.code == "ArrowLeft"){
    console.log("left")
  }else if(event.code == "ArrowRight"){
    console.log("right")
  }
  // console.log(event.code)
  // console.log("key wass press")
})
// input.addEventListener("keyup",function(){
//   console.log("key wass relesed")
// })

