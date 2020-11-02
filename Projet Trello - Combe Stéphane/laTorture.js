function log() {
    window.location.href = "Accueil.html";
}
function logOut() {
    window.location.href = "Avant_Accueil.html";
}

var nbClick = 4;

var nb_task = 1;

var color_actuel = 1

var modif = 1;

function limite_colone() {
    
    if (nbClick >= nbClickMax) {
        document.getElementById('ajout_colone').disabled = true;
    }
}


function ajout_carte(id_contenu, id_input) {
    //On crée un élément de type p
    var newgendiv = document.createElement('div');
    var newdiv = document.createElement('div');
    //On crée un noeud de type texte
    var newtitre = document.createElement('p');
    var newdescription = document.createElement('p');
    var ligne = document.createElement('hr');
    var suprbouton = document.createElement('button');
    var editbouton = document.createElement('button');
    var movebouton = document.createElement('button');

    var pastille = document.createElement('div');
    var text_pastille = document.createElement('p');
    var contenu_pastille = document.createTextNode('.');

    var titre = document.createTextNode('Task ' + nb_task);
    var desc = document.createTextNode(document.getElementById(id_input).value);
    var move = document.createTextNode('Couleur');
    var supr = document.createTextNode('X');
    var edit = document.createTextNode('Modifier');


    //On ajoute un attribut id à notre paragraphe
    newgendiv.id = 'contenu_carte' + nb_task;
    newdiv.className = 'colone_corps';
    newdiv.id = 'colone_corps' + nb_task;
    newtitre.className = 'tache';

    newtitre.id = 'titre_carte' + nb_task;
    newdescription.id = 'description_carte' + nb_task;

    newdescription.className = 'description_tache';
    suprbouton.className = "btn btn-outline-danger my-2 my-sm-0 bouton";
    editbouton.className = "btn btn-outline-info my-2 my-sm-0 bouton";
    movebouton.className = "btn btn-outline-dark my-2 my-sm-0 bouton";

    pastille.className = "pastille";
    pastille.id = "pastille" + nb_task;
    text_pastille.className = "text_pastille";
    text_pastille.id = "text_pastille" + nb_task;

    suprbouton.id = "bonjour" + nb_task;

    suprbouton.addEventListener("click", function () { supr_carte(newgendiv.id) }, false);

    editbouton.addEventListener("click", function () { edit_carte(newtitre.id,newdescription.id) }, false);

    movebouton.addEventListener("click", function () { change_color(pastille.id, color_actuel, text_pastille.id, newdiv.id) }, false);

    //On insère le texte dans notre paragraphe
    newtitre.appendChild(titre);
    newdescription.appendChild(desc);
    suprbouton.appendChild(supr);
    editbouton.appendChild(edit);
    movebouton.appendChild(move);

    text_pastille.appendChild(contenu_pastille);
    pastille.appendChild(text_pastille);
    newdiv.appendChild(pastille);

    newdiv.appendChild(newtitre);
    newdiv.appendChild(newdescription);
    newdiv.appendChild(ligne);
    newdiv.appendChild(suprbouton);
    newdiv.appendChild(editbouton);
    newdiv.appendChild(movebouton);
    newgendiv.appendChild(newdiv);


    //var test = "contenu_" + id_contenu;

    var placement = document.getElementById(id_contenu);

    placement.appendChild(newgendiv);
    nb_task++;

}



function ajout_colone() {
    //essayer d'ajouter une condition de nom
    var tire_de_la_colone = document.getElementById("ajout_titre").value;

    var newcol = document.createElement('div');
    var col = document.createElement('div');
    var newcolone = document.createElement('div');
    var newcolone_nom = document.createElement('div');
    var new_button_supr = document.createElement('button');
    var newtitre = document.createElement('p');
    var titre = document.createTextNode(tire_de_la_colone);

    var newcontenu = document.createElement('div');

    var newajout_carte = document.createElement('div');
    var newinput_group = document.createElement('div');
    var newinput = document.createElement('input');
    var newinput2 = document.createElement('div');
    var newbutton = document.createElement('button');
    var text_button = document.createTextNode('+');
    var text_button_supr = document.createTextNode('X');

    newcol.id = "colone_"+nbClick;
    newcol.className = "test";
    col.className = "test_space";
    newcolone.className = "colone";
    newcolone_nom.className = "colone_nom";
    newtitre.className = "colone_titre";
    newcontenu.className = "scrollbar";
    newcontenu.id = "contenu_"+nbClick;
    newajout_carte.className = "colone_ajout";
    newinput_group.className = "input-group";
    newinput.className = "form-control";
    newinput.id = "ajout_description"+nbClick;
    newinput2.className = "input-group-prepend";
    newbutton.className = "btn btn-dark my-2 my-sm-0 fill_gris";
    newinput.placeholder = "Ajouter une Tâche";
    new_button_supr.className = "btn btn-outline-danger btn-sm button_supr";

    newbutton.addEventListener("click", function () { ajout_carte(newcontenu.id, newinput.id) }, false);
    new_button_supr.addEventListener("click", function () { supr_colone(newcol.id) }, false);

    
    newinput2.appendChild(newbutton);
    newinput_group.appendChild(newinput2);
    newajout_carte.appendChild(newinput_group);
    newcolone.appendChild(newajout_carte);
    newinput_group.appendChild(newinput);

    new_button_supr.appendChild(text_button_supr);
    newcolone_nom.appendChild(new_button_supr);
    newtitre.appendChild(titre);
    newcolone_nom.appendChild(newtitre);
    newcolone.appendChild(newcolone_nom);
    newcolone.appendChild(newcontenu);

    newbutton.appendChild(text_button);
    newinput2.appendChild(newbutton);
    newinput_group.appendChild(newinput);
    newinput_group.appendChild(newinput2);
    newajout_carte.appendChild(newinput_group);
    newcolone.appendChild(newajout_carte);

    col.appendChild(newcolone);
    newcol.appendChild(col);

    var placement = document.getElementById("main");
    placement.appendChild(newcol);
    nbClick++;
}




function supr_carte(id_carte) {

    var element = document.getElementById(id_carte);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function supr_colone(id_colone) {

    var element = document.getElementById(id_colone);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function edit_carte(titre_carte, description_carte){

    if(modif==1){
    var titre_card = titre_carte;
    var description_card = description_carte;

    var zone_affichage = document.createElement('div');
    var champ_text1 = document.createElement('input');
    var champ_text2 = document.createElement('input');
    var button_envoyer = document.createElement('button');


    var text_button = document.createTextNode('modifer');


    zone_affichage.className = 'zone_affichage row';
    champ_text1.className = 'form-control form_modif col';
    champ_text1.id = 'titre_carte'+nb_task;
    champ_text1.placeholder = "Titre de la Tâche";
    champ_text2.className = 'form-control form_modif col';
    champ_text2.id = 'description_carte'+nb_task;
    champ_text2.placeholder = "Description de la Tâche";
    button_envoyer.className = 'btn btn-info my-2 my-sm-0 bouton_modif col-1';

    button_envoyer.addEventListener("click", function () { remplacement_carte(titre_card, description_card, champ_text1.id, champ_text2.id) }, false);

    
    zone_affichage.appendChild(champ_text1);
    zone_affichage.appendChild(champ_text2);
    zone_affichage.appendChild(button_envoyer);

    button_envoyer.appendChild(text_button);

    var placement = document.getElementById("main_principal");
    placement.appendChild(zone_affichage);
    modif++;
    }
    else{
        alert("veuillez modifier d'abord cette tache !");
    }
}

function remplacement_carte(id_titre,id_description,label_1, label_2){
    

    document.getElementById(id_titre).textContent = document.getElementById(label_1).value;
    document.getElementById(id_description).textContent = document.getElementById(label_2).value;

    var element = document.getElementById("main_principal");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    modif=1;
}


function change_color(id_pastille, color, id_text, couleur_bordure) {

    if (color == 1) {
        var newcolor = "#27CDF5"; //Tranquille
        var blanc = "#ffffff"
        document.getElementById(id_pastille).style.backgroundColor = newcolor;
        document.getElementById(couleur_bordure).style.borderColor = newcolor;
        document.getElementById(id_text).style.color = blanc;

        document.getElementById(id_text).textContent = "Tranquille";

        color_actuel++;
    }
    else if (color == 2) {
        var newcolor = "#95EA34"; //on a le temps
        document.getElementById(id_pastille).style.backgroundColor = newcolor;
        document.getElementById(couleur_bordure).style.borderColor = newcolor;

        document.getElementById(id_text).textContent = "Normal";

        color_actuel++;
    }
    else if (color == 3) {
        var newcolor = "#F7B14E"; //Modéré
        document.getElementById(id_pastille).style.backgroundColor = newcolor;
        document.getElementById(couleur_bordure).style.borderColor = newcolor;

        document.getElementById(id_text).textContent = "Modéré";

        color_actuel++;
    }
    else if (color == 4) {
        var newcolor = "#CF7263"; //important
        document.getElementById(id_pastille).style.backgroundColor = newcolor;
        document.getElementById(couleur_bordure).style.borderColor = newcolor;

        document.getElementById(id_text).textContent = "Important";

        color_actuel++;
    }
    else{
        var newcolor = "#FFFFFF"; //Reset
        document.getElementById(id_pastille).style.backgroundColor = newcolor;
        document.getElementById(couleur_bordure).style.borderColor = "#707070";


        color_actuel=1;
    }

}

function allowDrop(ev) {     
    ev.preventDefault();   }  


function drag(ev) {     
    ev.dataTransfer.setData("contenu_2", ev.target.id);   }  
    
    

function drop(ev) {  
    console.log(ev);    
    ev.preventDefault();   
    var data = ev.dataTransfer.getData("contenu_2");     
    ev.target.appendChild(document.getElementById(data));
    console.log(ev);   }    


    // draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)" ondrop="drop(event)"
    