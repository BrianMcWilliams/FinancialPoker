const request = require("request");
var fs = require("fs");

console.log(
  "Hey Vi! J'ai fait un petit logiciel qui fetch du data de finnhub.io et te dompe ça dans un fichier. \n"
);

/*
La documentation de l'api est ici:
https://finnhub.io/docs/api#introduction

En gros tu choisis quel data tu veux et tu peux faire la requete comme ça ici
*/

console.log(
  "La documentation de l'api est ici: https://finnhub.io/docs/api#introduction \n En gros tu choisis quel data tu veux et tu peux faire la requete comme ça ici"
);
request(
  "https://finnhub.io/api/v1/quote?symbol=AAPL&token=bte0tiv48v6p1d4qlup0", // ici tu as l'URL et la clef API.
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log(body);

    fs.appendFile("TaBaseDeDonnees.txt", JSON.stringify(body), function (err) {
      //JSON.stringify(body) c'est pour transformer body en text, sinon ça log [Object], je t'expliquerai au besoin
      if (err) throw err;
    });

    console.log(
      "J'écris le tout dans un fichier text : TaBaseDeDonnees.txt, a voir si tu veux mettre ça en .csv ou whatever :)!"
    );
  }
);

/* 
Je suis allé me chercher une clef API gratuite : bte0tiv48v6p1d4qlup0

Si tu veux les fonctions payantes tu peux voir le pricing sur leur site web.


si tu veux faire un request différent, en gros c'est juste de changer la première partie de l'URL

      [============URL DE LA REQUÊTE==============]         [API Key, c'est pour t'authenfier]
       https://finnhub.io/api/v1/quote?symbol=AAPL          &token=bte0tiv48v6p1d4qlup0

Et dans la documentation sur https://finnhub.io/docs/api#quote

Dans les exemples de code tu as exactement les requêtes à faire.
);
       */
