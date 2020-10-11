# Serveur WebSocket Intermédiaire

## Installation du projet
```npm
npm install
npm run start
```

## Note rendu intermédiaire - 2/3

### Description
C'est le serveur NodeJS qui sert d'intermédiaire entre les interfaces webs et l'application IOS.

### Structure
Le serveur est composé d'un router `Core/route/WsRouter.js` qui permet de réceptioner les données et de les rediriger vers les controlleurs `Core/route/controllers`

### Explication de l'envoie des données à l'application IOS

Au moment d'initialiser le routeur (voir la méthode `init` de la classe `WsRouter.js`), ce dernier va ouvrir la communication WebSocket et va écouter les données entrantes des interfaces Web.
Une fois que ceci est fait, il va se connecter au téléphone avec la libraire PeerTalk et va injecter l'instance de cette connexion dans tous les controlleurs.
Le routeur peut donc faire la correspondance entre un message provenant des interfaces web avec le bon controlleur et il va pouvoir envoyer les données à l'application IOS qui écoute aussi les données entrantes.