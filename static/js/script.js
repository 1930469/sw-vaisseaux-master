$("#alert").hide();
var RandomPage;
var nbRandom;

$("#btn").click(function (){
    $("#btn").effect("shake");

    try {
        RandomPage=Math.floor(Math.random()*4)+1;
        $.get("https://swapi.dev/api/starships/?page="+RandomPage,result);
        document.getElementById('alert').className="alert alert-success";
        $("#alert").text("Vaisseaux charger !");
        $("#alert").show();
    }
    catch (e) {
        document.getElementById('alert').className="alert alert-danger";
        $("#alert").text("Erreur");
        $("#alert").show();
    }
})
function result(donnee,status){
    console.log(donnee);
    nbRandom=random();
    $("#btn").attr("disabled", true);
    //désactive le bouton pendant le processus
    $("#nomVaisseaux").text(donnee.results[nbRandom].name);
    $("#modeleVaiseaux").text(donnee.results[nbRandom].model);
    $("#classeVaiseaux").text(donnee.results[nbRandom].starship_class);
    $("#fabricantVaisseaux").text(donnee.results[nbRandom].manufacturer);
    $("#coutVaisseaux").text(donnee.results[nbRandom].cost_in_credits);
    $("#tailleVaisseaux").text(donnee.results[nbRandom].length);
    $("#nbrMembreVaisseaux").text(donnee.results[nbRandom].crew);
    $("#nbrPassagerVaisseaux").text(donnee.results[nbRandom].passengers);
    $("#capaciteVaisseaux").text(donnee.results[nbRandom].cargo_capacity);
    //affichage des données du vaisseaux demandé
    var Pilote = document.getElementById("tablePerso");
    //séléctionne la table des pilotes
    while(Pilote.hasChildNodes())
    {
        Pilote.removeChild(Pilote.firstChild);
    }
    //Une boucle pour supprimer les pilotes déja afficher
    $("#tablePerso").append("<tr><th>Nom</th><th>Genre</th></tr>");
    //crée les titres de la table des pilotes
    donnee.results[nbRandom].pilots.forEach(function(item,index){
        $.get(item,loadPilote)
        //récupère les pilotes sur l'API
    });
    var Film = document.getElementById("tableFilm");
    //séléctionne la table des films
    while(Film.hasChildNodes())
    {
        Film.removeChild(Film.firstChild);
    }
    //Une boucle pour supprimer les films déja afficher
    $("#tableFilm").append("<tr><th>Titre</th><th>Directeur</th><th>Date de sortie</th></tr>");
    //crée les titres de la table des films
    donnee.results[nbRandom].films.forEach(function(item,index){
        $.get(item,loadFilms)
        //récupère les films sur l'API
    });
    $('#btn').attr("disabled", false);
    //réactive le bouton
};
function loadPilote(donnee,status) {
    var txt2 = "<tr>";
    var txt3 = $("<td></td>").text(donnee.name);
    var txt4 = $("<td></td>").text(donnee.gender);
    var txt5= "</tr>";
    $("#tablePerso").append(txt2,txt3,txt4,txt5);
    //crée les conteneus du tableau
};


function loadFilms(donnee,status) {
    console.log(donnee);
    var txt2 = "<tr>";
    var txt3 = $("<td></td>").text(donnee.title);
    var txt4 = $("<td></td>").text(donnee.director);
    var txt5 = $("<td></td>").text(donnee.release_date);
    var txt6= "</tr>";
    $("#tableFilm").append(txt2,txt3,txt4,txt5,txt6);
    //crée les conteneus du tableau

};




function random()
{
    if(RandomPage===4)
    {
        return Math.floor(Math.random() * 6);
    }
    else{
        return Math.floor(Math.random() * 10);
    }
    //permet de choisir aléatoirement les données d'une page trouvé aléatoirement
};