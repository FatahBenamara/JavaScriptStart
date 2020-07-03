let dictionnaire = [

{
    nom:"JS",
    definition:"JavaScript est un langage client"
},
{
    nom:"CSS",
    definition:"Cascading Style Sheet est un langage de mise en forme"
},
{
    nom:"HTML",
    definition:"HyperText Markup Langage est un langage universel sur internet"
}

];

let ContentDictionnaire ="";

for (let i = 0; i < 3; i++) {
ContentDictionnaire += "<div>"
ContentDictionnaire += "<h2>"+ dictionnaire[i].nom+ "</h2>";
ContentDictionnaire += "<p>"+ dictionnaire[i].definition+ "</p>";
ContentDictionnaire += "</div>";
}

document.querySelector(".definitions").innerHTML=ContentDictionnaire;
