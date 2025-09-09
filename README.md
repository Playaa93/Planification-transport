# TransportPro (Static + Supabase)

Application de planification de transport avec une interface statique (HTML/CSS/JS), Supabase pour la base de données/auth, et Netlify pour l’hébergement. PWA minimale (manifest + service worker) incluse.

## Démo
- Netlify: configurez le dossier de publication sur la racine (.), sans commande de build, ou utilisez `netlify.toml` fourni.

## Démarrer en local
- Servez en HTTP (requis pour SW/manifest):
  - Python: `python -m http.server 5500` puis http://localhost:5500
  - Node: `npx serve -p 5500 .` ou `npx http-server -p 5500 .`
- Ouvrez `index.html` via http://localhost:5500/

## Configuration Supabase
- `supabase-config.js`: contient `window.SUPABASE_URL` et `window.SUPABASE_ANON_KEY` (clé anonyme publique).
- Auth activée: utilisez votre compte (`email + mot de passe`) via le bouton “Se connecter”.
- RLS: vos politiques exigent un utilisateur authentifié pour lire/écrire (`authenticated`).

## Fonctions clés
- Chargement des données depuis Supabase après login: conducteurs, véhicules, contrats, missions.
- Création/modification de missions: écritures dans `missions` ou fallback local si non connecté.
- PWA: `manifest.webmanifest` + `sw.js` (enregistré seulement en https/localhost).
- Debug/ping: bouton “prise” pour tester le SDK et pinger l’API REST; logs détaillés en console.

## Déploiement Netlify
- `netlify.toml`:
  - build.command vide, build.publish `.`
  - redirections SPA vers `index.html` sans casser `sw.js`/`manifest.webmanifest`
- Variables d’environnement Netlify: ajoutez si nécessaire (pas obligatoire pour l’anon key si vous utilisez `supabase-config.js`).

## Structure
- `index.html`, `style.css`, `app.js`: UI statique
- `supabase-config.js`: config publique Supabase
- `netlify.toml`: config de déploiement
- `sw.js`, `manifest.webmanifest`: PWA
- `schema_transport.sql`: schéma SQL pour Supabase (migrations manuelles)

## GitHub — créer et pousser
1) Initialisez le dépôt local (déjà fait si vous suivez ce README):
```
git init
git add -A
git commit -m "Initial commit"
```
2) Créez le repo GitHub:
- Via interface: créez un repo vide (sans README) et récupérez son URL.
- OU via GitHub CLI: `gh repo create <votre-repo> --public --source . --remote origin --push`
3) Liez et poussez:
```
# Remplacez par votre URL HTTPS ou SSH
git remote add origin https://github.com/<votre-user>/<votre-repo>.git
git branch -M main
git push -u origin main
```

## Remarques
- `.env.local` est ignoré par `.gitignore`. L’app lit `supabase-config.js` côté client.
- Ne mettez jamais de `SERVICE_ROLE_KEY` côté client ni dans le dépôt public.
- Si besoin d’un vrai projet Next.js, on pourra migrer progressivement.

