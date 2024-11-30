let btn = document.querySelector("button");
btn.onclick = function(){
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  let box = document.querySelector(".colorBox");
  let backgroundColor = `(${c1},${c2},${c3})`;
  box.style.backgroundColor = `rgb${backgroundColor}`;
  box.style.border = `rgb${backgroundColor}`;
  box.style.borderRadius = "5rem";
  document.querySelector("h1").innerText = `rgb(${c1},${c2},${c3})`
}