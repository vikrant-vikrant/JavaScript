//Practice Qs of js part 9
let p = document.createElement('p');
p.innerText = "Hey i'm red!";
p.style.color = "red";
document.querySelector("body").prepend(p);

let h3 = document.createElement('h3');
h3.innerText = "Hey i'm blue h3!";
h3.style.color = "blue";
document.querySelector("body").append(h3);

let div = document.createElement('div');
div.classList.add("bottomDiv");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";
div.style.height = "5rem";
div.style.widows = "4rem";
document.querySelector("body").append(div);

let h1 = document.createElement("h3");
h1.innerText = "I am in div";
let p1 = document.createElement("p");
p1.innerText = "Me too!";
document.querySelector(".bottomDiv").insertAdjacentElement("afterbegin",h1);
document.querySelector(".bottomDiv").insertAdjacentElement("afterbegin",p1);