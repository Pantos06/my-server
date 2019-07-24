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


## RoutenService

Die RoutenService is auf diese URL <a href='http://localhost:8030/'>http://localhost:8030/</a> abzurufen und stellt die folgenden Schnittstellen zur Verfügung:
<table>
 <tr>
  <th colspan="2"><center>Alle Routen des Systems Abfragen</center></th>
 </tr>
  <tr> <th>URl:</th><td><a href='http://localhost:8030/routen-service/v1/all'>/routen-service/v1/all</a></td></tr>
 <tr> <th>Method:</th><td>GET</a></td> </tr>
 <tr> <th>URL Params:</th><td>None</td> </tr>
 <tr> <th>Data Params:</th><td>None</td> </tr>
 <tr> 
  <th>Success Response:</th>
 <td>
	<ul>
	<li>Code: 200</li>
	<li>Content:
	   <code>[{id: 1, name: 'Route1', dauer: 10, beschreibung: 'Eine beschreibung', 
	   stationen: [{routeId: 1, stationId: 1, position:2, 
	    station: {id:1, dauer: 5, kuztext: 'Fußbalmuseum'}}, ...]}, ...]</code>
	</li>
	</ul>
  </td> 
 </tr>
 <tr> <th>Error Response:</th><td>Not implemented</a></td> </tr>
</table>

<table>
 <tr>
  <th colspan="2"><center>Suchen eine Route nach ihrer Id</center></th>
 </tr>
  <tr> <th>URl:</th><td><a href='http://localhost:8030/routen-service/v1/1'>/routen-service/v1/{routeId}</a></td></tr>
 <tr> <th>Method:</th><td>GET</a></td> </tr>
 <tr> <th>URL Params:</th><td>None</td> </tr>
 <tr> <th>Data Params:</th><td>Required:<code>routeId = [Long]</code></td> </tr>
 <tr> 
  <th>Success Response:</th>
 <td>
	<ul>
	<li>Code: 200</li>
	<li>Content:
	   <code>{id: 1, name: 'Route1', dauer: 10, beschreibung: 'Eine beschreibung', 
	   stationen: [{routeId: 1, stationId: 1, position:2, 
	    station: {id:1, dauer: 5, kuztext: 'Fußbalmuseum'}}]}</code>
	</li>
	</ul>
  </td> 
 </tr>
 <tr> <th>Error Response:</th><td>Not implemented</a></td> </tr>
</table>

<table>
 <tr>
  <th colspan="2"><center>Eine route Bewerten</center></th>
 </tr>
  <tr> <th>URl:</th><td><a href='http://localhost:8030/routen-service/v1/1:rating=4'>/routen-service/v1/{routeId}:rating</a></td></tr>
 <tr> <th>Method:</th><td>POST</a></td> </tr>
 <tr> <th>URL Params:</th><td>Required: <code>rating=[Integer]</code></td> </tr>
 <tr> <th>Data Params:</th><td>Required: <code>routeId=[Long]</code></td> </tr>
 <tr> 
  <th>Success Response:</th>
 <td>
	<ul>
	<li>Code: 200</li>
	<li>Content:
	   <code>"Rating has been updated"</code>
	</li>
	</ul>
  </td> 
 </tr>
 <tr> <th>Error Response:</th><td>Not implemented</a></td> </tr>
</table>

<table>
 <tr>
  <th colspan="2"><center>Die Bewertung eine Route Abfragen</center></th>
 </tr>
  <tr> <th>URl:</th><td><a href='http://localhost:8030/routen-service/v1/1/rating'>/routen-service/v1/{routeId}/rating</a></td></tr>
 <tr> <th>Method:</th><td>GET</a></td> </tr>
 <tr> <th>URL Params:</th><td>None</code></td> </tr>
 <tr> <th>Data Params:</th><td>Required: <code>routeId=[Long]</code></td> </tr>
 <tr> 
  <th>Success Response:</th>
 <td>
	<ul>
	<li>Code: 200</li>
	<li>Content:
	   <code>Integer</code>
	</li>
	</ul>
  </td> 
 </tr>
 <tr> <th>Error Response:</th><td>Not implemented</a></td> </tr>
