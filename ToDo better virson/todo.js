document.querySelector(".push").onclick = function(){
  if(document.querySelector(".newtask input").value.length == 0){
    alert("Plese enter a Task");
  }else {
    document.querySelector(".tasks").innerHTML += `
        <div class="task">
          <span id="taskname">
            ${document.querySelector('.newtask input').value}
          </span>
          <button class="detele">
              <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
    `;
    document.querySelector(".newtask input").value = '';
    for(task of document.querySelectorAll(".task button")){
      task.onclick = function(){
        this.parentNode.remove();
      }
    }
    for(task of document.querySelectorAll(".task #taskname")){
      task.onclick = function(){
        this.style.textDecoration = "line-through";
      }
    }
  }
}



  
