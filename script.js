

 //declaration  du tableau d'objet
 let tab = [
 {blo:"blue" ,titre:"brown"},

{blo:"yellow" ,titre: "white"
},
{blo:"white" ,titre:"green"
},
{blo:"green" ,titre: "yellow"
},
{blo:"brown" ,titre: "blue"
},
{blo:"yellow" ,titre: "brow"
},
 ];
 //declaration du compteur du tableau
 let comptCouleur = 0
 //declaration du temp d'interval
 const interval =2000

//declaration de la fontion qu'on doit appeles dans lattribut click
 const fonf = () => {
    //on stock tout les valeur du tableau sur une variable recup
    const recup = tab[comptCouleur]
    //on recupere les valeur de la classe blo sur une variable contblocs
    const contblocs = document.querySelectorAll('.blo')
    //on recupere les valeur de la classe titre sur une valeur context
    const context = document.querySelectorAll(".titre")
    //on donne le style background a tout les elements de blo du tableau recup a l'aide du boucle forEach
    
    contblocs.forEach((a) => {
       a.style.backgroundColor = recup.blo
    })
    //on donne le style color a tout les elements de titre du tableau recup a l'aide de la boucle forEach
context.forEach((b) => {
b.style.color = recup.titre
})
//on incremente le compteur qui parcour le tableau et verifie le modulo 
comptCouleur = (comptCouleur + 1) % tab.length;
}
// utilisation du fonction setinterval pour appliqée notre instruction sur chaque intervale
setInterval(() => {fonf ()
   
}, interval);


 








