FinancialPoker

<h2>
Step 1: Install Node JS
</h2>
https://nodejs.org/en/

<h2>
Step 2: Install git
</h2>
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

<h2>
Step 3: Clone this repo
</h2>
Ouvre un command prompt et navigue au dossier que tu veux
Windows key + CMD ça va ouvrir la petite boîte noire, ensuite tu navigues avec

dir - liste les dossiers
cd /nomdedossier/ - ça navigue vers ton dossier

Quand tu es à l'endroit ou tu veux travailler, tu roules ça:
git clone https://github.com/BrianMcWilliams/FinancialPoker.git

et ça va télécharger les fichiers.

<h2>
Step 4: Run it locally
</h2>
De ton command prompt, tu navigues au dossier /FinancialPoker/ et tu vas voir financialpoker.js

Ensuite tu roules:

node ./financialpoker.js

Tu vas voir l'output de base, t'es prêt à travailler!

Là il te manque juste à prendre le data que tu veux, et voir comment tu veux l'organiser dans ta base de données.
J'ai mis des commentaires dans financialpoker.js pour expliquer.

Je te suggère de structurer ça en JSON (très programmeur comme suggestion, mais ça va être un peu plus complexe)
Tu te fais un objet par indice d'action que tu veux suivre, et tu met le data dedans pour chaque jour.
https://www.w3schools.com/whatis/whatis_json.asp

Sinon tu peux faire un .csv style excel

Bonne chance!
