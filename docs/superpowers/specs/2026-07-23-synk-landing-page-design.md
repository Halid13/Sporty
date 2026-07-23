# Spec — Landing Page "Synk"

## Contexte

`PROJET.md` décrit une plateforme unifiée de progression sportive et bien-être
(4 modules : Planification Temporelle, Accountability Partner 2.0,
Fridge-to-Macro, Coach IA). Le dossier `assets/` contient 5 mockups d'app
mobile dans une esthétique verte (`1.jpg` à `5.jpg`).

Objectif : produire une landing page de **présentation/pitch** (pas de
collecte d'emails, pas de CTA de conversion) permettant de partager le
concept à des tiers (investisseurs, partenaires, retours).

## Identité

- **Nom** : Synk
- **Tagline** : "Ta vie. Ton rythme. Un seul système."
- **Ton** : français, inspirant/premium (registre motivant, orienté
  transformation personnelle — pas un ton purement technique/factuel).
- **CTA** : aucun. Page purement narrative/visuelle.

## Structure des sections

1. **Hero**
   - Nom "Synk" + tagline + une phrase de vision courte (issue de la section
     "La Solution" du `.md`).
   - Visuel : `assets/2.jpg` (main tenant le téléphone, dashboard "HOME").
   - Fond dégradé vert foncé → vert menthe clair.

2. **Le Constat**
   - Texte seul, pas d'image. Reprend le problème de fragmentation des
     apps fitness (section 1 du `.md`).
   - Ne pas inventer de statistiques chiffrées absentes du `.md`.

3. **Transition / Vision**
   - "Une seule plateforme, 4 moteurs qui s'articulent."
   - Visuel : `assets/1.jpg` (onboarding âge/poids/taille), utilisé pour
     illustrer la personnalisation générale de l'app, sans le lier à un
     module précis.

4. **Les 4 modules** (blocs alternés texte/image, zigzag gauche/droite)
   - **Module 1 — Planification Temporelle** : time-blocking, sync agenda,
     "Time-Blocking Protecteur". Pas de mockup correspondant disponible →
     visuel remplacé par un schéma simple (mini-calendrier stylisé en
     CSS/SVG), pas une photo forcée hors-sujet.
   - **Module 2 — Accountability Partner 2.0** : matching, Contrat de
     Constance, Co-op Milestones. Visuel : `assets/5.jpg`, recadrée via
     `object-position`/`overflow:hidden` sur les illustrations décoratives
     (étoile, ruban) en arrière-plan ; l'écran de connexion "Doshe" reste
     hors-champ car non pertinent thématiquement.
   - **Module 3 — Fridge-to-Macro** : nutrition calibrée, anti-gaspi,
     lissage anti-culpabilité. Visuel : `assets/4.jpg` (photo lifestyle du
     plan de repas) — correspondance directe.
   - **Module 4 — Coach IA (noyau)** : diagnostic croisé, ajustement
     automatique, rapport vocal. Visuel : `assets/3.jpg` (anneau de
     progression / stats).

5. **Flywheel**
   - Le tableau de rétroaction et le schéma circulaire du `.md` sont
     recréés proprement en HTML/CSS (SVG ou divs positionnés), **pas**
     reproduits sous forme de diagramme ASCII/texte brut.

6. **Avantages concurrentiels**
   - Grille de 4 cartes (une par avantage listé en section 4 du `.md`),
     avec icône simple par carte.

7. **Footer**
   - Nom "Synk" + mention sobre. Pas de CTA, pas de formulaire.

## Style visuel

- **Palette** : vert forêt profond (fonds contrastés type hero), vert
  menthe clair (fonds clairs), vert vif en accent (titres/highlights,
  jamais de bouton d'action puisqu'il n'y a pas de CTA). Texte crème/blanc
  sur fonds foncés.
- **Typographie** : une police "display" éditoriale pour les grands titres,
  une sans-serif system-stack pour le corps de texte. Aucune dépendance
  Google Fonts/CDN — la page doit rester 100% autonome et fonctionner
  hors-ligne.
- **Animations** : fade-in + léger slide au scroll via
  `IntersectionObserver`. Dégradation propre (contenu visible par défaut)
  si JavaScript est désactivé.
- **Responsive** : mobile-first ; les mockups téléphone s'intègrent
  naturellement en colonne unique sur petit écran.

## Architecture technique

- Fichiers dans `Landing page/` :
  - `index.html`
  - `styles.css`
  - `script.js`
- Aucune dépendance externe (pas de CDN, pas de framework, pas de build
  step). Utilise les images existantes dans `assets/` telles quelles (pas
  de recompression/retraitement des fichiers sources).
- Ouverture directe du fichier `index.html` dans un navigateur doit
  suffire à voir la page fonctionner.

## Hors périmètre

- Pas de formulaire, pas de collecte d'emails, pas de CTA de conversion.
- Pas de backend, pas de multi-page, pas de traduction (français
  uniquement pour cette itération).
- Pas de retraitement/recadrage réel des fichiers image sources — le
  recadrage de `5.jpg` se fait uniquement en CSS (`object-position`,
  `overflow:hidden`), le fichier original n'est pas modifié.
