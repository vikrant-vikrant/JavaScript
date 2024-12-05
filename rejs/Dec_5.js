let inp = document.querySelector("input");
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
  let li = document.createElement("li");
  li.innerText = inp.value;
  let btn = document.createElement("button");
  btn.innerText = "Delete Task";
  document.querySelector("ul").insertAdjacentElement("afterBegin",li)
  document.querySelector("li").insertAdjacentElement("beforeEnd",btn)
  document.querySelector("li button").addEventListener("click",function(){
    this.parentNode.remove();
  })
  inp.value = '';
});

