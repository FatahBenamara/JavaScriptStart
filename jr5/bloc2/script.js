let menu =" <img src=\"http://via.placeholder.com/100x50\" >    ";
menu += "<h1> Titre </h1>";
document.querySelector("header").innerHTML = menu;


let main="";
for (let i = 0; i < 30; i++) {
    
    main += " <img src=\"http://via.placeholder.com/100x100\" >    ";
    
}
document.querySelector(".galerie").innerHTML=main;
