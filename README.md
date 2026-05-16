## pour construire l'image
```
docker build -t gigi76/hello-node:latest .
```

Pour tester localement:
```bash
# Installer les dépendances
npm install

# Compiler TypeScript → dist/
npm run build

# Lancer l'app
npm start

# OU en dev sans compiler
npx ts-node src/app.ts
```

Structure
```
node/
├── src/
│   └── app.ts
├── dist/           ← généré par tsc (ne pas commiter)
├── package.json
├── tsconfig.json
├── Dockerfile
└── .dockerignore
```


run dev - ts-node-dev
C'est l'outil le plus adapté : il surveille les fichiers .ts et redémarre automatiquement à chaque modification.

```
"dev": "ts-node-dev --respawn --transpile-only src/app.ts"
```
```
--respawn — redémarre le process si le fichier crashe
--transpile-only — skip la vérification de types pour un rechargement plus rapide
```

## image docker
Ce dont ton app a besoin pour tourner
app.js utilise express, c'est la seule dépendance. Donc au runtime, il faut :

* app.js — le code applicatif
* node_modules/ — contient express et ses dépendances (installées via npm install)
* le runtime Node.js — fourni par l'image de base
```
npm prune --omit=dev supprime les devDependencies de node_modules après le build — il ne reste plus qu'express et ses dépendances.
```