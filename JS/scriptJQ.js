var listeFilms = [
  {
    titre: "Flash",
    annee: 2018,
    realisateur : "Bebert"
  },
  {
    titre: "Thor",
    annee: 2015,
    realisateur : "Morice"
  },
  {
    titre: "Les gendarmes",
    annee: 1985,
    realisateur : "Albert"
  },
  {
    titre: "Bidasse",
    annee: 1996,
    realisateur : "Robert"
  }
];
//////////////////////////////////////////////////////////////////////////////////////////////////
                                  // AFFICHER TABLEAU //
//////////////////////////////////////////////////////////////////////////////////////////////////

  var tbodyElt = $('tbody'); //on récupére le contenu du tableau dans le DOC
  afficher()                                      //on appel la fonction qui affiche le tableau
//////////////////////////////////FIN EVENEMENT///////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////
                            //CREATION D'UN BOUTON AJOUTER//
////////////////////////////////////////////////////////////////////////////////////////////////
  var divajout = $('#ajout');  //on récupére l'espace préétablit en HTML
   // on créer un bouton
  divajout.append('<button>');                     //on apparent l'espace au bouton créé
  $('button').addClass = "btn btn-primary"                //on change la couleur du bouton
  $('button').text('Ajouter');                    //on intégre un texte à l'interieur du bouton
//////////////////////////////////FIN EVENEMENT////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////
                        //AFFICHER 4 INPUT AU CLIQUE DU BOUTON//
///////////////////////////////////////////////////////////////////////////////////////////////
  btnAdd.click (function(){  //on assigne un événement au clique du bouton
    var form = $('<form></form>');   //on créer un formulaire

    var inpt = $('<input></input>');  // on crée un input pour le titre
    inpt.placeholder ="Titre";
    inpt.required ='required';                   //on oblige l'utilisateur à remplir l'input

    var inpt2 = $('<input></input>'); // on crée un input pour la date
    inpt2.placeholder ="Date";
    inpt2.required ='required';                  //on oblige l'utilisateur à remplir l'input
    // inpt2.!^((?:19|20)\d{2})$!

    var inpt3 = $('<input></input>'); // on crée un input pour le réalisateur
    inpt3.placeholder ="Realisateur";
    inpt3.required ='required';                  //on oblige l'utilisateur à remplir l'input

    var inpt4 = $('<input></input>'); //on créé un bouton d'envoi de formulaire
    inpt4.type ='submit';

    inpt4.className="btn btn-primary"            //on change la couleur du bouton d'envoi
    form.append(inpt);                      //on apparente inpt au formulaire
    form.append(inpt2);                     //on apparente  inpt2 au formulaire
    form.append(inpt3);                     //on apparente  inpt3 au formulaire
    form.append(inpt4);                     //on apparente  inpt4 au formulaire
    divajout.replaceChild(form,btnAdd);          //en cliquant sur le bouton ajout, on le remplace par le formulaire

    form.addEventListener("submit", function(e){ //on créé l'évenement lors du clique sur l'input submit
      e.preventDefault();                        //l'événement ne se déclenche que sous certaines conditions

      var film = {                    //on créer un tableau identique au premiermais sous forme de variables
        titre: inpt.value,            //le titre affiché sera le contenu(value) rempli dans l'inpt du formulaire
        annee: Number (inpt2.value),  //la date affichée sera le contenu(value) rempli dans l'inpt2 du formulaire
        realisateur: inpt3.value    //le réalisateur affiché sera le contenu(value) rempli dans l'inpt3 du formulaire
      }
      listeFilms.push(film);          //push ajoute un élement (définit ici dans la var film)  dans le tableau

      afficher()                      //on appel la fonction afficher() pour mettre à jour le tableau
      alertAjout()                    // on appel la fonction alertAjout pour faire apparaitre une information
    })
  })
//////////////////////////////////FIN EVENEMENT///////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
                                        //  FILTRE//
//////////////////////////////////////////////////////////////////////////////////////////
  document.getElementById('trier').addEventListener('change', function () {
    filtre();   //on récupére l'onglet de tri et on appel la fonction filtre
  })
//////////////////////////////////FIN EVENEMENT///////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
                              //FONCTION AFFICHER//
//////////////////////////////////////////////////////////////////////////////////////////
function afficher(){  //fonction d'intégration des éléments du tableau listeFIlms dans la page HTML
  var i = 0;          // on déclare une variable i
  tbodyElt.innerHTML = '';
  for (var film of listeFilms) {

    trElt = $('<tr></tr>');       //Cree une ligne
    tdEltTitre = $('<td>Titre</td>');  //cree une cellule pour le Titre
    tdEltTitre.textContent = film.titre;        //recupere les valeurs de la liste pour les affecter dans les cellules correspondantes
    tdEltAnnee = $('<td>Année</td>');  //cree une cellule pour l'annee
    tdEltAnnee.textContent = film.annee;        //recupere les valeurs de la liste pour les affecter dans les cellules correspondantes
    tdEltReal = $('<td>Réalisateur</td>');    //cree une cellule pour le realisateur
    tdEltReal.textContent = film.realisateur;    //recupere les valeurs de la liste pour les affecter dans les cellules correspondantes
    tdEltSuppr = $('<td>Supprimer</td>');  //Creation d'une cellule pour le bouton supprimer

    btnSuppr = $('<button>Supprimer</button>');//création du bouton supprimer
    btnSuppr.textContent = "Supprimer";         //ajout du texte
    btnSuppr.className="btn btn-danger";        //ajouter de la couleur
    btnSuppr.value = i;                         //on assigne la variable i (0) au bouton
    i++;                                        //on incrémente
    tdEltSuppr.append(btnSuppr)            //on apparente le bouton supprimer à sa cellule

    btnSuppr.addEventListener('click', function(){//on affecte la fontion supprimer au clique du bouton supprimer
      supprimer(this.value)             //this.value= supression de la
    })
    //Affecter les cellules a ma ligne
    trElt.append(tdEltTitre)
    trElt.append(tdEltAnnee)
    trElt.append(tdEltReal)
    trElt.append(tdEltSuppr)
    tbodyElt.append(trElt)
  }}
//////////////////////////////////FIN DE FONCTION///////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////
                                  //FONCTION SUPPRIMER//
////////////////////////////////////////////////////////////////////////////////////////////
  function supprimer(index){
    listeFilms.splice(index, 1);    //supprime élement d'un seul (1) élement du tableau, la ligne sur le quel le bouton est cliqué(index)
    afficher()                      //on affiche le tableau mis à jour
    alertSuppr()                   //on affiche une alerte qui confirme l'événement
  }
//////////////////////////////////FIN DE FONCTION///////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////
                                  //FONCTION FILTRE//
////////////////////////////////////////////////////////////////////////////////////////////
  function filtre() {
    if (document.getElementById('trier').selectedIndex == 2) { //Si l'onglet identifié 'trier' à le deuxieme bouton de selectionné
      listeFilms.sort(function (a, b) { //on applique la méthode 'sort' au tableau, qui range les chiffres et chaines de caractères par ordre de grandeur
        var titreA = a.titre.toLowerCase(); //retourne contenu affiché en minuscules
        var titreB = b.titre.toLowerCase(); //retourne contenu affiché en minuscules
        if (titreA < titreB) {              //si le premier a une valeur inferieur au deuxième
          return -1;                        //on lui assigne une vaeur négative
        }
        if (titreA > titreB) {              //si le premier a une valeur supérieur au deuxième
          return 1;                         //on lui assigne une valeur positive
        }
        return 0;                           //par défaut on lui assigne une valeur neutre (et donc pas de mouvement)
      });
      afficher()                             //on affiche le tableau mis à jour

} else if (document.getElementById('trier').selectedIndex == 1) { //Sinon, si l'onglet identifié 'trier' à le premier bouton de selectionné

      listeFilms.sort(function (a, b) { //on applique la methode 'sort'
        return a.annee - b.annee; // et on soustrait le premier élement à son second afin d'identifier les valeurs positives et négatives
      });
      afficher() //on affiche le tableau mis à jour
    }
  }



//////////////////////////////////FIN DE FONCTION///////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////
                                  //FONCTION ALERTAJOUT//
////////////////////////////////////////////////////////////////////////////////////////////
  function alertAjout(texte,classe){
    var divinfo = document.getElementById('infoAjout');
    var pInfo = $('<p>votre film a été ajouté</p>');
    pInfo.className ="alert alert-success";
    divinfo.append(pInfo);
    setTimeout(function(){
divinfo.removeChild(pInfo);
    },3000);
    }
//////////////////////////////////FIN DE FONCTION///////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////
                                  //FONCTION ALERTSUPPR//
////////////////////////////////////////////////////////////////////////////////////////////
   function alertSuppr(texte,classe){
    var divSuppr = document.getElementById('infoAjout');
    var pSuppr = $('<p>votre film a été supprimé</p>');
    pSuppr.className ="alert alert-danger";
    divSuppr.append(pSuppr);
    setTimeout(function(){
divSuppr.removeChild(pSuppr);
    },3000);
    }
//////////////////////////////////FIN DE FONCTION///////////////////////////////////////////
