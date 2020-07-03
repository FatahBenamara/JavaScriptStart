let menu="<ul>"
menu +="<li>Accueil</li>";
menu +="<li>Présentation</li>";
menu +="<li>Contact</li>";
menu +="<ul>";

document.querySelector(".menu").innerHTML=menu;
//console.log(document.querySelector("p").classList)
document.querySelector("button").addEventListener("click",function(){
//alert("j'ai cliqué");
document.querySelector(".menu").classList.toggle("show");
});