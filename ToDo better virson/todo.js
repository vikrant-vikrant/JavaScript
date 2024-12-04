document.querySelector(".push").onclick = function(){
  if(document.querySelector(".newtask input").value.length == 0){
    alert("Plese enter a Task");
  }else {
    console.log(document.querySelector(".newtask input").value)
    document.querySelector(".newtask input").value = '';
  }
  }

  
