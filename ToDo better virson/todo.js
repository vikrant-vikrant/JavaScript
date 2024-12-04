let tasks = JSON.parse(localStorage.getItem('work')) || [];
let btn = document.querySelector("#addTask");
let inputTask = document.querySelector("#taskInput")
btn.addEventListener("click",function(){
  let task = inputTask.value;
  tasks.push(task);
  inputTask.value = '';
  localStorage.setItem('work',JSON.stringify(tasks));
  window.location.reload();
});

// for(task of tasks){
//   let newTask = document.createElement("li")
//   newTask.innerText = task;
//   let ul = document.querySelector("ul")
//   ul.insertAdjacentElement("afterbegin",newTask)
  // let btn = document.createElement("button")
  // btn.innerText = "Delete task";
  // document.querySelector("li").insertAdjacentElement("beforeend",btn)
  // btn.addEventListener("click",function(){
    
  //   console.log("hey")
  // })
// }