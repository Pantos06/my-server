# My-Server

my-server es une application client serveur permettant de partager les fichiers.

Le but principale de ce projet est didactique. Le projet permet d'avoir un apercu sur
les application client serveur et les REST.

Les technolgies utilisées pour realiser le projet sont les suivantes:
- NodeJs: NodeJs permet de realiser les serveur de manier rapide en Javascript. 
- Express: Express est un module de NodeJs qui facilte l'ecriture de requetes HTTP et les REST services.
- HTML : pour linterface web ou le GUI (client)
- AJAX: pour consommer ou excécuter les requetes ecrites dans le serveur au niveau du client 

### Installation

my-server requiet Node.js v4+ pour fonctionner 
([installation de Node.js](https://nodejs.org/en/download/))

- cloner le project dans un repertoir quelconque que nous allons appeler ici /racine et ce deplacer dans le /racine
```sh
$ git clone https://github.com/Pantos06/my-server.git
```
- Installer les dépendances
```sh
$ npm install
```
- Demarrer le serveur
```sh
$ node server.js
```
- Rendez-vous a l'adresse http://localhost:8181/ et vous verez l'application en excution

|               |                                                                    |
|---------------|--------------------------------------------------------------------|
| __URL__       | [/routen-service/v1/all](http://localhost:8030/routen-service/all) |
|__Method__     | __GET__|
|__URL Params__ | None|
|__Data Params__| None|
|__Success Response__| 
 - __Code__: 200 
 - __Conten__: {}|



| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

<table>
 <tr>
  <th colspan="2">Get all rroute in the system</th>
 </tr>
  <tr> <td>URl:</td><td><a href='http://localhost:8030/routen-service/all'>/routen-service/v1/all</a></td></tr>
 <tr> <td>Method:</td><td>GET</a></td> </tr>
 <tr> <td>URL Params:</td><td>None</td> </tr>
 <tr> <td>Data Params:</td><td>None</td> </tr>
 <tr> 
  <td>Success Response:</td>
 <td>
  <ul>
   <li>Code: 200</li>
   <li>Content: [<br/>
   {id: 1, name: 'Route1', dauer: 10, beschreibung: 'Eine beschreibung', stationen: [
    {routeId: 1, stationId: 1, position:2, station: {id:1, dauer: 5, kuztext: 'Fußbalmuseum'}, ...]} <br/>
	{id: 1, name: 'Route1', dauer: 10, beschreibung: 'Eine beschreibung', stationen: [
    routeId: 1, stationId: 1, position:2, station: {id:1, dauer: 5, kuztext: 'Fußbalmuseum'}}, <br/>
	...
	]</li>
  </ul>
  </td> 
 </tr>
 <tr> <td>Error Response:</td><td>None</a></td> </tr>
</table>
