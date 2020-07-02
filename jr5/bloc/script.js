/*HEADER */
let textMenu="<img src=\"  http://via.placeholder.com/100x100  \">";
textMenu += "<ul>";
textMenu += "<li>Accueil</li>";
textMenu += "<li>Connexion</li>";
textMenu += "<li>Inscription</li>";
textMenu += "</ul>";

document.querySelector("header").innerHTML=textMenu;

/* BODY */
let textMain ="";
for (let i = 0; i < 8; i++) {
    
    textMain += "<div>";
    textMain += "<h2> Titre Article </h2>";
    textMain += "<img src=\"  http://via.placeholder.com/200x200  \">";
    textMain += "<p>lorem ipsum </p>";
    textMain += "</div>";
}

document.querySelector("div").innerHTML = textMain;

/*FOOTER */
let textFooter= "Fatah "+ (new Date()).getFullYear();

document.querySelector("footer").innerHTML=textFooter;


