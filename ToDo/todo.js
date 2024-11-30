let tasks = [];
let req = prompt("Enter the request");
while(true){
  if(req === "quit"){
    console.log("Quiting todo")
    break;
  }else if(req === "add"){
    let task = prompt("Enter the task you want to add");
    tasks.push(task);
    console.log("Task added");
    localStorage.setItem(tasks,tasks);
    // break;
  }else if(req === "list"){
    console.log("--------------------")
    for(let i = 0;i<=tasks.length-1;i++){
      console.log(i , tasks[i]);
    }
    console.log("--------------------")
    // break;
  }else if(req === "delete"){
    let index = prompt("Enter the index you want to delete");
    tasks.splice(index,1);
    console.log("Task deleted")
  }
  else{console.log("unviled request");
    // break;
  }
  req = prompt("Enter the request");
}

