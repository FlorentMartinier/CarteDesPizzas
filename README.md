# 🍕 Carte des Pizzas

Bienvenue sur le dépôt de la **Carte des Pizzas** ! Une application interactive conçue pour présenter des créations culinaires avec un système de gestion saisonnier intelligent.

🌐 **[Voir le site en direct sur Netlify](https://pizzas-de-florent.netlify.app/)**

---

## 🚀 Fonctionnalités principales

* **Filtrage saisonnier automatique :** L'application détecte la date du jour et n'affiche par défaut que les pizzas "de saison".
* **Sélecteur de mois :** L'utilisateur peut modifier le filtre pour consulter les pizzas disponibles à n'importe quel autre mois de l'année.
* **Effet Flip interactif :** Un survol de la carte déclenche une animation 3D pour révéler les ingrédients au verso.
* **Interface Responsive :** Une expérience fluide sur tous les types d'écrans.

---

## 🛠️ Architecture Technique

* **Framework :** Angular 19 🚀
* **Style :** TailwindCSS
* **Gestion des données :** Sans base de données (Static Data Driven)
* **Hébergement :** Netlify

---

## ⚙️ Personnalisation facile (No-DB)

Le projet a été conçu pour être **entièrement réutilisable**. Toutes les pizzas et leurs disponibilités sont configurées dans un fichier unique. 

Pour modifier les pizzas ou en ajouter de nouvelles, il suffit d'éditer le fichier suivant :
`src/app/model/Pizza.ts`

Il n'y a **aucune base de données à configurer**. Modifier ce JSON mettra instantanément à jour la galerie et le système de filtrage par mois.

---

## 💻 Installation et exécution locale

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/](https://github.com/)[VOTRE_PSEUDO_GITHUB]/[NOM_DE_VOTRE_REPO].git
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   ng serve
   ```
Rendez-vous sur `http://localhost:4200/`.

---

👨‍🍳 *Projet réalisé avec passion par Florent.*
