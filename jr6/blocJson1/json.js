
let articles = [
    {
        titre : "titre1",
        p : "contenu de l'article 1",
        url : "http://via.placeholder.com/200x150?text=article1"
    },

    {
        titre : "titre2",
        p : "contenu de l'article 2",
        url : "http://via.placeholder.com/300x250?text=article2"
    }
];

let contenuArticle="";
for (let i = 0; i < 2; i++) {
    contenuArticle += "<div>";
    contenuArticle += "<h2>"+ articles[i].titre+ "</h2>";
    contenuArticle += " <img src=\"  "+articles[i].url+ "   \" alt=\"\"   ";
    contenuArticle += "<p>"+ articles[i].p+"</p>";
    contenuArticle += "</div>";

    
}

document.querySelector(".main").innerHTML = contenuArticle;
