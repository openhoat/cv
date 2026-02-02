# CV - Olivier Penhoat

CV moderne et responsive développé avec Astro et Tailwind CSS, disponible en français et anglais.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Développement local
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

## 📦 Déploiement sur GitHub Pages

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages via GitHub Actions.

### Configuration requise

1. **Activer GitHub Pages dans les paramètres du repository :**
   - Aller dans `Settings` > `Pages`
   - Source : `GitHub Actions`

2. **Le workflow GitHub Actions se déclenche automatiquement :**
   - À chaque push sur la branche `main` ou `master`
   - Ou manuellement via l'onglet `Actions`

### URLs

- **Production** : [https://openhoat.github.io/cv/](https://openhoat.github.io/cv/)
- **Version française** : [https://openhoat.github.io/cv/fr/](https://openhoat.github.io/cv/fr/)
- **Version anglaise** : [https://openhoat.github.io/cv/en/](https://openhoat.github.io/cv/en/)

## 📄 PDFs

Les versions PDF sont directement téléchargeables :
- [CV Français (PDF)](https://openhoat.github.io/cv/pdf/cv-olivier-penhoat-fr.pdf)
- [Resume English (PDF)](https://openhoat.github.io/cv/pdf/resume-olivier-penhoat-en.pdf)

Les fichiers source doivent être placés dans le dossier `public/pdf/` :
- `cv-olivier-penhoat-fr.pdf` (version française)
- `resume-olivier-penhoat-en.pdf` (version anglaise)

## 🛠️ Structure du projet

```
/
├── public/
│   ├── images/           # Images du CV
│   └── pdf/             # Fichiers PDF des CVs
├── src/
│   ├── content/
│   │   ├── en/          # Contenu en anglais
│   │   │   ├── about.md
      │   │   │   ├── education.md
      │   │   │   ├── experience.md
      │   │   │   ├── hobbies.md
      │   │   │   ├── skills.md
      │   │   │   └── conferences.md
│   │   └── fr/          # Contenu en français
│   │       ├── about.md
      │   │       ├── education.md
      │   │       ├── experience.md
      │   │       ├── hobbies.md
      │   │       ├── skills.md
      │   │       └── conferences.md
│   ├── layouts/         # Layout principal
│   ├── pages/           # Pages Astro
│   └── styles/          # Styles CSS globaux
├── .github/workflows/   # GitHub Actions
└── astro.config.mjs     # Configuration Astro
```

## 🌐 Langues

- 🇫🇷 Français
- 🇬🇧 English

## 📝 Licence

MIT
