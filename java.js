var div1;
var div2;
var div3;
var div4;
var div5;
var div6;

window.onload = function(){
    div1 = document.getElementById("div1");
    div2 = document.getElementById("div2");
    div3 = document.getElementById("div3");
    div4 = document.getElementById("div4");
    div5 = document.getElementById("div5");
    div6 = document.getElementById("div6");

    var bt1 = document.getElementById("bt1");
    bt1.onclick = mostrarDiv1;
    var bt2 = document.getElementById("bt2");
    bt2.onclick = mostrarDiv2;
    var bt3 = document.getElementById("bt3");
    bt3.onclick = mostrarDiv3;
    var bt4 = document.getElementById("bt4");
    bt4.onclick = mostrarDiv4;
    var bt5 = document.getElementById("bt5");
    bt5.onclick = mostrarDiv5;
    var bt6 = document.getElementById("bt6");
    bt6.onclick = mostrarDiv6;

    div2.classList.add("escondido");
    div3.classList.add("escondido");
    div4.classList.add("escondido");
    div5.classList.add("escondido");
    div6.classList.add("escondido");
    

}
function mostrarDiv1(){
    div1.classList.remove("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
    div4.classList.add("escondido");
    div5.classList.add("escondido");
    div6.classList.add("escondido");
}
function mostrarDiv2(){
    div1.classList.add("escondido");
    div2.classList.remove("escondido");
    div3.classList.add("escondido");
    div4.classList.add("escondido");
    div5.classList.add("escondido");
    div6.classList.add("escondido");
    
}
function mostrarDiv3(){
    div1.classList.add("escondido");
    div2.classList.add("escondido");
    div3.classList.remove("escondido");
    div4.classList.add("escondido");
    div5.classList.add("escondido");
    div6.classList.add("escondido");
}
function mostrarDiv4(){
    div1.classList.add("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
    div4.classList.remove("escondido");
    div5.classList.add("escondido");
    div6.classList.add("escondido");
}
function mostrarDiv5(){
    div1.classList.add("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
    div4.classList.add("escondido");
    div5.classList.remove("escondido");
    div6.classList.add("escondido");
}
function mostrarDiv6(){
    div1.classList.add("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
    div4.classList.add("escondido");
    div5.classList.add("escondido");
    div6.classList.remove("escondido");
    
}