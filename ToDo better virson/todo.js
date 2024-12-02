let tasks = [];
let btn = document.querySelector("#addTask");
let inputTask = document.querySelector("#taskInput")
btn.addEventListener("click",function(){
  let task = inputTask.value;
  tasks.push(task);
  inputTask.value = '';
  let newTask = document.createElement("li")
  newTask.innerText = task;
  let ul = document.querySelector("ul")
  ul.insertAdjacentElement("afterbegin",newTask)
});
// localStorage.setItem("work", tasks);

