# TestCaseAtlas #

Version : 0.1

NodeAtlas Version minimale : 1.0.x

**For an international version of this README.md, [see below](#international-version).**



## Avant-propos ##

TestCaseAtlas est un exemple de Documentation d'Interface Utilisateur et de Cas de Test pour maintenir des Interfaces Utilisateur pour des sites web quelque soit la techno Back-end avec [NodeAtlas](http://haeresis.github.io/NodeAtlas/).





## Présentation ##

Le principe est simple, dans un dossier (ici `webapp`) sont stocké les fichiers de votre site web (quelque soit sa techno Back-end) et notamment les fichiers CSS et JS (ici dans le dossier `webapp/src`). Un dossier parallèle embarque NodeAtlas (`doc-test-case`) afin de recréer une liste complète des layouts et composants existant sur votre site `webapp` à partir de vos fichier CSS et JS source (`webapp/src`). Il va également embarquer une documentation JSDoc qui va non seulement documenter les actions JavaScript de l'interface utilisateur mais également tous ses états et variations représentées par des noms de classes CSS.

Si quelqu'un modifie les fichiers CSS ou JS dans le dossier `webapp`, les fichiers de Cas de Test seront immédiatement impacté ce qui vous permettra de visuellement et rapidement voir si l'intégralité des versions et états d'un composant ou d'un layout tient a toujours un design correcte et qu'il n'y a eu aucune regression. La documentation mise à jour en parallèle assurera que les Back-end mettant à jour le site web original le fasse en respectant des nomonclatures précises.





## Exemple ##

1. Rendez-vous sur « http://www.lesieur.name/test-case-atlas/products/munchkin-2.html », ceci représente un agencement de composant pour afficher une page de détaille représentant un « layout ».

2. Avec F12, repérez la liste des composants utilisez grace à la classe `.ui`. Ce sont
  - ribbon
  - header
  - navigation
  - slot
    - sn-share
    - product
    - sn-share
    - slot
      - simple
      - simple
      - simple
    - sn-share
  - footer

3. Nous voulons plus d'information sur le `sn-share`. Nous remontons à l'adresse « http://www.lesieur.name/test-case-atlas/ » et choisissons le composant « http://www.lesieur.name/test-case-atlas/components/sn-share.html ». Nous voyons ainsi toutes les possibilités d'affichage et pour chaqu'une un code exemple avec « Show / Hide Code ». Toutes ses variations et états sont résumé dans la Doc Design « http://www.lesieur.name/test-case-atlas/documentation/design/sn-share.html ».

4. Il existe également une documentation JS pour chaque interface comme avec le `header` « http://www.lesieur.name/test-case-atlas/documentation/design/header.html ». On peut voir ainsi côté CSS toutes les classes de variations et d'états
  - « http://www.lesieur.name/test-case-atlas/documentation/design/header.html »
  - « http://www.lesieur.name/test-case-atlas/documentation/design/header--buy.html »
  - « http://www.lesieur.name/test-case-atlas/documentation/design/header--navigation.html »
  - « http://www.lesieur.name/test-case-atlas/documentation/design/header--navigation--item.html »

Et côté JS avec « http://www.lesieur.name/test-case-atlas/documentation/behaviors/module-munchkin-ws.ui.Header.html »





## Lancer le site en local ##

Pour faire tourner le site en local, il vous faudra installer [NodeAtlas](http://haeresis.github.io/NodeAtlas/) sur votre poste de développement.

Déplacez vous ensuite dans le dossier :


```
\> cd </path/to/test-case>/doc-test-case
```

et utilisez la commande :

```
\> node </path/to/>node-atlas/node-atlas.js --browse
```

ou lancez `doc-test-case/watch-assets.bat` en double cliquant dessus :
- en ayant installé `node-atlas` via `npm install -g node-atlas`
- en étant sur que votre variable d'environnement `NODE_PATH` pointe bien sur le dossier des `node_modules` globaux.

Le site sera accessible ici :

- *http://localhost:7770/*





## Générer la Documentation et des Test Case HTML ##

Il faut lancer les fichiers « .bat » suivant :
- `watch-assets.bat` : faire tourner sur « localhost » afin de tester en directe les modifications CSS et JS faites dans les fichiers du site source.
- `generate-assets.bat` : générer la totalité des « test case » HTML pour pouvoir les testers sans utiliser NodeAtlas.
- `generate-css.bat` : générer la totalité de la documentation Design.
- `generate-js.bat` : générer la totalité de la documentation Behaviors.
- `generate-all.bat` : géréner la totalité des docs et des « test case » HTML.





## Exemple en ligne ##

Vous pouvez voir fonctionner ce repository à l'adresse : [http://blog.lesieur.name/test-case-atlas/](http://blog.lesieur.name/test-case-atlas/).





-----





## International Version ##

### Overview ###

TestCaseAtlas is an example of UI Test Case and UI Documentation to manage UI for website anyway what is the technology behind with [NodeAtlas](http://haeresis.github.io/NodeAtlas/).





### Principle ###

The main goal is simple, in a directory (`webapp` here), files are stored in your website (anyway the Back-end technology) and amongs them CSS and JS (into `webapp/src` here). A directory in same level use NodeAtlas folder tree (`doc-test-case`) for re-create a complete list of layouts and components used by `webapp` from original CSS and JS source (`webapp/src`). This directory will also use JSDoc in order to produce documentation of each JavaScript UI function and also all states and variations represented by Class Name.

If somebody update CSS and JS file in `webapp` directory, Test Case files will be immediatly changed and that allows to quickly to see all visual modification for all variations and states of UI and see if a single layout are still a well design and there are no regression. With update of documentation at same time, all Back-end Developers who update original website will do that with correct architecture.





### Example ###

1. Go on « http://www.lesieur.name/test-case-atlas/products/munchkin-2.html », that represent a list of component which together represent a « layout ».

2. With F12, find all components with the `.ui` class. Comonents are :
  - ribbon
  - header
  - navigation
  - slot
    - sn-share
    - product
    - sn-share
    - slot
      - simple
      - simple
      - simple
    - sn-share
  - footer

3. Imagine you want more informations about `sn-share`. Go back to « http://www.lesieur.name/test-case-atlas/ » and we choose « http://www.lesieur.name/test-case-atlas/components/sn-share.html » component. All usage possibility are shown here with a code example behind « Show / Hide Code ». All variations and states are explained into Design Doc « http://www.lesieur.name/test-case-atlas/documentation/design/sn-share.html ».

4. There is also a JS documentation for each interface like `header` « http://www.lesieur.name/test-case-atlas/documentation/design/header.html ». We will see for CSS all variations and states classes
  - « http://www.lesieur.name/test-case-atlas/documentation/design/header.html »
  - « http://www.lesieur.name/test-case-atlas/documentation/design/header--buy.html »
  - « http://www.lesieur.name/test-case-atlas/documentation/design/header--navigation.html »
  - « http://www.lesieur.name/test-case-atlas/documentation/design/header--navigation--item.html »

And for JS the same with « http://www.lesieur.name/test-case-atlas/documentation/behaviors/module-munchkin-ws.ui.Header.html »





### Run the website in local server ###

To run the website in local, you must install [NodeAtlas](http://haeresis.github.io/NodeAtlas/) on your development machine.

Then you move into the folder:


```
\> cd </path/to/test-case>/doc-test-case
```

and use the command:

```
\> node </path/to/>node-atlas/node-atlas.js --browse
```

or run `doc-test-case/watch-assets.bat` by double clicking and:
- Having installed `node-atlas` via `npm install -g node-atlas`
- Being on your environment variable `NODE_PATH` is pointing to the global `node_modules` folder.

The website will be to:

- *http://localhost:7770/*



### Generate Documentation and HTML Test Case ###

Run the following « .bat »:
- `watch-assets.bat` : run on « localhost » for test in real time all CSS and JS update from source files.
- `generate-assets.bat` : generate all HTML « test case » for use later without NodeAtlas.
- `generate-css.bat` : generate all Design Documentation.
- `generate-js.bat` : generate all Behaviors Documentation.
- `generate-all.bat` : generate all docs and all HTML « test case ».



### Online Example ###

You can see this repository running at: [http://blog.lesieur.name/test-case-atlas/](http://blog.lesieur.name/test-case-atlas/).