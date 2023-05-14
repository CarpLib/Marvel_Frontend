# Marvel App

![Marvel Logo](https://main--legendary-lolly-da1957.netlify.app/)

Une application React qui permet de découvrir et explorer l'univers Marvel.

## Fonctionnalités

- **Characters** : Affiche tous les personnages de comics sur une page dédiée.
- **Character** : Affiche tous les informations d'un personnage de comics sur une page dédiée.
- **Comics** : Répertorie tous les comics sur une page dédiée.
- **Favoris** : Ajoutez des personnages ou des comics à vos favoris. Tous les favoris sont répertoriés dans la page "Favoris".
- **Recherche** : Possibilité de rechercher des personnages ou des comics à l'aide d'un champ de recherche.
- **Pagination** : Permet de naviguer entre les différentes pages de résultats.
- **Carrousels** : Les favoris sont présentés dans des carrousels sur la page "Favoris".
- **Authentification** : Les utilisateurs peuvent s'enregistrer et se connecter.
- **Gestion des privilèges** : Seuls les utilisateurs connectés peuvent ajouter des favoris.
- **Page d'accueil** : Présente un aperçu de l'univers Marvel, l'histoire des personnages, l'histoire des comics et des anecdotes intéressantes.
- **Gestion des colonnes** : Utilisation de la bibliothèque react-spring pour gérer l'animation et le dépliage des colonnes.
- **Carousel** : Utilisation de react-multi-carousel pour créer des carrousels.
- **Spinners de chargement** : Utilisation de react-spinners pour afficher des indicateurs de chargement pendant les opérations asynchrones.
- **Pagination** : Utilisation de rc-pagination pour afficher une pagination conviviale.
- **Cookies** : Utilisation de js-cookie pour gérer les cookies.

## Backend

Ce projet comprend également un backend développé pour gérer les fonctionnalités de l'application. Le code source du backend peut être trouvé dans le dépôt suivant : [lien_vers_backend](https://github.com/CarpLib/Marvel_backend.git)

## Installation

1. Clonez ce dépôt : `git clone https://github.com/votre-utilisateur/marvel-app.git`
2. Accédez au répertoire du projet : `cd marvel-app`
3. Installez les dépendances : `npm install`

## Configuration

1. Créez un fichier `.env` à la racine du projet.
2. Ajoutez les variables d'environnement suivantes :
   REACT_APP_MARVEL_API_PUBLIC_KEY=<votre_clé_publique_marvel_api>
   REACT_APP_MARVEL_API_PRIVATE_KEY=<votre_clé_privée_marvel_api>

## Utilisation

1. Lancez l'application : `npm start`
2. Ouvrez votre navigateur et accédez à : `http://localhost:3000`

## Crédits

Cette application utilise les ressources de l'API Le Reacteur. Pour plus d'informations, veuillez consulter [API_Le_Reacteur_Marvel](https://lereacteur-marvel-api.netlify.app/documentation).

## Licence

Ce projet est sous licence MIT..
