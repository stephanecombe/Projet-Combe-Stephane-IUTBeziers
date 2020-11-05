function log() {
    if (document.getElementById('exampleInputPassword1').value != '' && document.getElementById('exampleInputEmail1').value != '') {
        window.location.href = "Accueil.html";

    }
    else {
        document.getElementById('exampleInputPassword1').style.borderColor = 'red';
        document.getElementById('exampleInputEmail1').style.borderColor = 'red';
    }
}

    function logOut() {
        window.location.href = "Avant_Accueil.html";
    }

    var nbClick = 4;

    var nb_task = 1;

    var color_actuel = 1

    var modif = 1;



    function ajout_carte(id_contenu, id_input) {

        if (document.getElementById(id_input).value !== '') {
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
        newgendiv.className = 'portlet';
        newdiv.className = 'colone_corps portlet-header';
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

        editbouton.addEventListener("click", function () { edit_carte(newtitre.id, newdescription.id) }, false);

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
        document.getElementById(id_input).value = '';
        nb_task++;
        drag();
        document.getElementById(id_input).style.borderColor = '';
        }
        else{
            document.getElementById(id_input).style.borderColor = ' #CF7263';
        }
    }



    function ajout_colone(colone_input) {
        //essayer d'ajouter une condition de nom
        var tire_de_la_colone = document.getElementById(colone_input).value;

        if (tire_de_la_colone !== '') {
            supr_colone("non");
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



            newcol.id = "colone_" + nbClick;
            newcol.className = "test";
            col.className = "test_space";
            newcolone.className = "colone";
            newcolone_nom.className = "colone_nom";
            newtitre.className = "colone_titre";
            newcontenu.className = "scrollbar prout ui-sortable";
            newcontenu.id = "contenu_" + nbClick;
            newajout_carte.className = "colone_ajout";
            newinput_group.className = "input-group";
            newinput.className = "form-control";
            newinput.id = "ajout_description" + nbClick;
            newinput2.className = "input-group-prepend";
            newbutton.className = "btn btn-dark my-2 my-sm-0 fill_gris";
            newinput.placeholder = "Ajouter une Tâche";
            newtitre.contentEditable = "true";

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
            drag();
        }
        else {
            document.getElementById("colonne_input").style.borderColor = ' #CF7263';
        }

    }



    function supr_carte(id_carte) {

        var element = document.getElementById(id_carte);

        element.remove();

    }

    function supr_colone(id_colone) {

        var element = document.getElementById(id_colone);
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        document.getElementById("non").style.visibility = "hidden";
    }

    function edit_carte(titre_carte, description_carte) {

        document.getElementById("non").style.visibility = "visible";
        var titre_card = titre_carte;
        var description_card = description_carte;

        var reception = document.createElement('div');
        var zone_titre = document.createElement('div');
        var text_titre = document.createElement('p');
        var champ_titre = document.createTextNode('Modifier');

        var zone_contenu = document.createElement('div');

        var form_login = document.createElement('div');

        var form_group1 = document.createElement('div');
        var label1 = document.createElement('label');
        var label1_text = document.createTextNode('Titre de la Carte');
        var input1 = document.createElement('input');

        var form_group2 = document.createElement('div');
        var label2 = document.createElement('label');
        var label2_text = document.createTextNode('Description de la Carte');
        var input2 = document.createElement('input');

        var button_modif = document.createElement('button');
        var text_button = document.createTextNode("Modifier");

        var new_button_supr = document.createElement('button');
        var text_button_supr = document.createTextNode('X');

        new_button_supr.className = "btn btn-outline-danger btn-sm button_supr";
        new_button_supr.addEventListener("click", function () { supr_colone("non") }, false);

        zone_titre.className = 'alert_titre';
        champ_titre.className = 'colone_titre';

        zone_contenu.className = 'alert_contenu';
        form_login.className = 'form_login';
        input1.placeholder = "Aller faire des courses";
        input2.placeholder = "Promotion à Auchan";

        form_group1.className = 'form-group';
        input1.className = "form-control";
        input1.id = "titre_carte";

        form_group2.className = 'form-group';
        input2.className = "form-control";
        input2.id = "description_carte";

        button_modif.className = 'btn btn-info';
        button_modif.addEventListener("click", function () { remplacement_carte(titre_card, description_card, input1.id, input2.id) }, false);

        new_button_supr.appendChild(text_button_supr);
        zone_titre.appendChild(new_button_supr);
        text_titre.appendChild(champ_titre);
        zone_titre.appendChild(text_titre);
        
        label1.appendChild(label1_text);
        form_group1.appendChild(label1);
        form_group1.appendChild(input1);
        form_login.appendChild(form_group1);

        label2.appendChild(label2_text);
        form_group2.appendChild(label2);
        form_group2.appendChild(input2);
        form_login.appendChild(form_group2);

        button_modif.appendChild(text_button);
        form_login.appendChild(button_modif);

        zone_contenu.appendChild(form_login);

        reception.appendChild(zone_titre);
        reception.appendChild(zone_contenu);

        var placement = document.getElementById("non");
        placement.appendChild(reception);

    }

    function popup() {

        document.getElementById("non").style.visibility = "visible";

        var reception = document.createElement('div');
        var zone_titre = document.createElement('div');
        var text_titre = document.createElement('p');
        var champ_titre = document.createTextNode('Colonne Ajout');

        var zone_contenu = document.createElement('div');

        var form_login = document.createElement('div');

        var form_group1 = document.createElement('div');
        var label1 = document.createElement('h6');
        var label1_text = document.createTextNode('Veuillez mettre un nom à votre colonne');


        var form_group2 = document.createElement('div');
        var label2 = document.createElement('input');


        var button_modif = document.createElement('button');
        var text_button = document.createTextNode("Envoyer");

        var new_button_supr = document.createElement('button');
        var text_button_supr = document.createTextNode('X');
        
        new_button_supr.className = "btn btn-outline-danger btn-sm button_supr";
        new_button_supr.addEventListener("click", function () { supr_colone("non") }, false);

        zone_titre.className = 'alert_titre';
        champ_titre.className = 'colone_titre';

        zone_contenu.className = 'alert_contenu';
        form_login.className = 'form_login';

        form_group1.className = 'form-group';

        form_group2.className = 'form-group';
        label2.className = "form-control";
        label2.id = "colonne_input"
        label2.placeholder = "Nom de la colonne";

        button_modif.className = 'btn btn-info';
        button_modif.addEventListener("click", function () { ajout_colone(label2.id) }, false);

        new_button_supr.appendChild(text_button_supr);
        zone_titre.appendChild(new_button_supr);
        text_titre.appendChild(champ_titre);
        zone_titre.appendChild(text_titre);

        label1.appendChild(label1_text);
        form_group1.appendChild(label1);

        form_login.appendChild(form_group1);

        form_group2.appendChild(label2);

        form_login.appendChild(form_group2);

        button_modif.appendChild(text_button);
        form_login.appendChild(button_modif);

        zone_contenu.appendChild(form_login);

        reception.appendChild(zone_titre);
        reception.appendChild(zone_contenu);

        var placement = document.getElementById("non");
        placement.appendChild(reception);

    }

    function remplacement_carte(id_titre, id_description, label_1, label_2) {

        if (document.getElementById(label_1).value !== '' && document.getElementById(label_2).value !== '') {
            document.getElementById(id_titre).textContent = document.getElementById(label_1).value;
            document.getElementById(id_description).textContent = document.getElementById(label_2).value;

            var element = document.getElementById("non");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            document.getElementById("non").style.visibility = "hidden";
        }
        else {
            document.getElementById(label_1).style.borderColor = ' #CF7263';
            document.getElementById(label_2).style.borderColor = ' #CF7263';
        }
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
        else {
            var newcolor = "#FFFFFF"; //Reset
            document.getElementById(id_pastille).style.backgroundColor = newcolor;
            document.getElementById(couleur_bordure).style.borderColor = "#707070";


            color_actuel = 1;
        }

    }



    /* Zone de Test a l'aide */

    function drag() {
        $(".prout").sortable({
            connectWith: ".prout",
            handle: ".portlet-header",
            cancel: ".portlet-toggle",
            placeholder: "portlet-placeholder ui-corner-all"
        });

        $(".portlet")
            .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
            .find(".portlet-header")
            .addClass("ui-widget-header ui-corner-all")


        $(".portlet-toggle").click(function () {
            var icon = $(this);
            icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
            icon.closest(".portlet").find(".portlet-content").toggle();
        });
    }