var div = document.getElementById("test");//task 1
div.innerHTML = "Last";

var im = document.getElementById("images");//task 2
im.src = "cat.jpg";

const p = document.querySelectorAll("p");//task 3
for(let i = 0; i < 3; i++)
{
    p[i].textContent = `Selector text ` + i + `: ` + p[i].textContent;
}

const l = document.querySelectorAll("li");//task 4
var par = document.getElementById("paragraph");
par.textContent = `Результат виводу: `;
let i = 0, j = 4;
for(i = 0; i < 3; i++)
{
    par.textContent = par.textContent + ` ` + l[i].textContent;
    if(i < 2){par.textContent = par.textContent + ` ` + l[j].textContent;}
    j--;
}

const h = document.querySelector("h1");//task 5
h.style.backgroundColor = "lightgreen";
var d = document.getElementById("myDiv").querySelectorAll("p");
d[0].style.fontWeight = "bold";
d[1].style.color = "red";
d[2].style.textDecoration = "underline";
d[3].style.fontStyle = "italic";
var list = document.getElementById("myList").querySelectorAll("li");
var pa = document.getElementById("pa");
pa.textContent = ``;
for(let i = 0; i < 3; i++)
{
    pa.textContent = pa.textContent + ` ` + list[i].textContent;
}
const sp = document.querySelector("span");
sp.style.display = "none";

let call = prompt("Enter the call");//task 6
let call_2 = prompt("Enter the call 2");
document.getElementById("input1").value = call;
document.getElementById("input2").value = call_2;
function Click()
{
    document.getElementById("input1").value = call_2;
    document.getElementById("input2").value = call;
}

const ppp = document.createElement('p');//task 7
ppp.innerHTML = "Goodbye!"
document.getElementById("myDiv2").appendChild(ppp);
