# Synk Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page, dependency-free HTML/CSS/JS landing page for "Synk" that presents the 4-module fitness/wellbeing platform described in `PROJET.md`, using the 5 mockups in `assets/`, as a pitch/showcase page (no forms, no CTA).

**Architecture:** Three static files (`index.html`, `styles.css`, `script.js`) in the `Landing page` directory, no build step, no external dependencies (no CDN, no web fonts, no framework). `index.html` is scaffolded once with named placeholder comments; each content task replaces its own placeholder with real markup. `styles.css` and `script.js` are appended to incrementally. A single generic scroll-reveal mechanism (`.reveal` class + `IntersectionObserver` in `script.js`) is built once in Task 1 and reused by every section — no section-specific JS.

**Tech Stack:** Vanilla HTML5, CSS3 (custom properties, flexbox/grid, `prefers-reduced-motion`), vanilla JavaScript (`IntersectionObserver`). No npm, no build tools.

## Global Constraints

- No external dependencies: no CDN links, no Google Fonts, no JS/CSS libraries. System font stacks only.
- French copy throughout, ton inspirant/premium (per spec).
- No CTA, no form, no email capture anywhere on the page (per spec — showcase pur).
- Do not modify or recompress the source files in `assets/` (`1.jpg`–`5.jpg`); any cropping is done in CSS only (`object-position`, `overflow: hidden`).
- Do not invent numeric statistics not present in `PROJET.md`.
- Mobile-first responsive design; every task must look correct at both a narrow (~375px) and wide (~1200px) viewport before being considered done.
- `prefers-reduced-motion: reduce` must disable the reveal animation (content stays visible, no transition).

---

### Task 1: Scaffold, design tokens, and scroll-reveal mechanism

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`

**Interfaces:**
- Produces: CSS custom properties (`--forest`, `--forest-dark`, `--mint`, `--mint-soft`, `--accent`, `--cream`, `--ink`, `--font-display`, `--font-body`, `--space-1`..`--space-6`, `--max-width`) usable by every later task.
- Produces: `.container` (centered max-width content wrapper), `.reveal` / `.reveal.is-visible` (scroll-reveal classes) usable on any element in later tasks.
- Produces: `script.js` function `initScrollReveal()`, auto-run on `DOMContentLoaded`, which watches every `.reveal` element on the page — later tasks never need to touch `script.js` again.
- Produces: named HTML placeholder comments in `index.html` (`<!-- SECTION:HERO -->`, `<!-- SECTION:CONSTAT -->`, `<!-- SECTION:VISION -->`, `<!-- SECTION:MODULE1 -->`, `<!-- SECTION:MODULE2 -->`, `<!-- SECTION:MODULE3 -->`, `<!-- SECTION:MODULE4 -->`, `<!-- SECTION:FLYWHEEL -->`, `<!-- SECTION:AVANTAGES -->`, `<!-- SECTION:FOOTER -->`) that each later task replaces by exact string match.

- [ ] **Step 1: Create `index.html`**

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Synk — Ta vie. Ton rythme. Un seul système.</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- SECTION:HERO -->
  <!-- SECTION:CONSTAT -->
  <!-- SECTION:VISION -->
  <!-- SECTION:MODULE1 -->
  <!-- SECTION:MODULE2 -->
  <!-- SECTION:MODULE3 -->
  <!-- SECTION:MODULE4 -->
  <!-- SECTION:FLYWHEEL -->
  <!-- SECTION:AVANTAGES -->
  <!-- SECTION:FOOTER -->
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create `styles.css` with tokens, reset, and reveal mechanism**

```css
:root {
  --forest: #0B3B2E;
  --forest-dark: #07281F;
  --mint: #EAF7DD;
  --mint-soft: #F5FBEF;
  --accent: #3FA34D;
  --cream: #FBFBF5;
  --ink: #10241C;

  --font-display: Georgia, 'Times New Roman', serif;
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2.5rem;
  --space-5: 4rem;
  --space-6: 6rem;

  --max-width: 1100px;
}

*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--ink);
  background: var(--mint-soft);
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: var(--font-display);
  line-height: 1.15;
  margin: 0 0 var(--space-2);
}

p { margin: 0 0 var(--space-2); }

img { max-width: 100%; display: block; }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-3);
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

- [ ] **Step 3: Create `script.js` with the generic reveal-on-scroll mechanism**

```javascript
function initScrollReveal() {
  var targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (el) { observer.observe(el); });
}

document.addEventListener('DOMContentLoaded', initScrollReveal);
```

- [ ] **Step 4: Verify the scaffold**

Run: `grep -c "reveal" styles.css script.js` — expect at least 1 match in each file.
Open `index.html` directly in a browser (double-click or `start index.html` on Windows). Expected: a blank page with a very light mint-cream background (`#F5FBEF`), no visible text, no console errors in DevTools.

- [ ] **Step 5: Commit**

```bash
git init
git add index.html styles.css script.js docs
git commit -m "chore: scaffold Synk landing page with design tokens and scroll-reveal mechanism"
```

(If the user prefers not to initialize git here, skip `git init`/commit for this and all later tasks and rely on manual verification only.)

---

### Task 2: Hero section

**Files:**
- Modify: `index.html` — replace `<!-- SECTION:HERO -->`
- Modify: `styles.css` — append hero rules

**Interfaces:**
- Consumes: `.container`, `.reveal` from Task 1.
- Produces: `.hero`, `.hero__content`, `.hero__image` classes (not reused elsewhere).

- [ ] **Step 1: Replace the hero placeholder in `index.html`**

Find `<!-- SECTION:HERO -->` and replace with:

```html
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content reveal">
        <p class="hero__wordmark">Synk</p>
        <h1>Ta vie. Ton rythme.<br>Un seul système.</h1>
        <p class="hero__lede">
          Entraînement, nutrition, planning et communauté enfin réunis dans une seule
          intelligence qui s'adapte à ta vie réelle — pour transformer la motivation
          passagère en discipline durable.
        </p>
      </div>
      <div class="hero__image reveal">
        <img src="assets/2.jpg" alt="Tableau de bord Synk affiché sur un téléphone tenu à la main">
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Append hero styles to `styles.css`**

```css
/* HERO */
.hero {
  background: linear-gradient(160deg, var(--forest) 0%, var(--forest-dark) 100%);
  color: var(--cream);
  padding: var(--space-6) 0;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  align-items: center;
}

@media (min-width: 800px) {
  .hero__grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.hero__wordmark {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.85rem;
  color: var(--accent);
  margin-bottom: var(--space-2);
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  color: var(--cream);
}

.hero__lede {
  font-size: 1.1rem;
  max-width: 42ch;
  color: rgba(251, 251, 245, 0.85);
}

.hero__image img {
  border-radius: 16px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
  margin: 0 auto;
  max-width: 360px;
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "hero__grid" index.html styles.css` — expect at least 1 match in each.
Open `index.html` in a browser at both ~375px and ~1200px width (resize the window or use DevTools device toolbar). Expected: dark green gradient hero with "Synk" small label, big heading, paragraph, and the hand/phone image (`2.jpg`) — image below text on narrow screens, side-by-side on wide screens. Content fades/slides in on load (it's already in the viewport, so it should reveal immediately).

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add Synk hero section"
```

---

### Task 3: "Le Constat" section

**Files:**
- Modify: `index.html` — replace `<!-- SECTION:CONSTAT -->`
- Modify: `styles.css` — append constat rules

**Interfaces:**
- Consumes: `.container`, `.reveal`.
- Produces: `.constat` class (not reused elsewhere).

- [ ] **Step 1: Replace the constat placeholder in `index.html`**

```html
  <section class="constat">
    <div class="container constat__inner reveal">
      <h2>Le constat</h2>
      <p>
        La majorité des personnes qui abandonnent la musculation ou leur
        rééquilibrage alimentaire ne manquent pas de motivation brute, mais
        d'un <strong>système cohérent</strong>.
      </p>
      <p>
        Le marché du fitness actuel est fragmenté en applications isolées —
        un outil pour les calories, un pour les séances, un pour l'agenda.
        Cette dispersion génère une fatigue mentale, un manque de régularité
        et un taux d'abandon élevé.
      </p>
    </div>
  </section>
```

- [ ] **Step 2: Append constat styles to `styles.css`**

```css
/* CONSTAT */
.constat {
  padding: var(--space-6) 0;
}

.constat__inner {
  max-width: 60ch;
  margin: 0 auto;
  text-align: center;
}

.constat h2 {
  color: var(--forest);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
}

.constat p {
  font-size: 1.15rem;
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "constat__inner" index.html styles.css` — expect at least 1 match in each.
Open `index.html`, scroll to the section below the hero. Expected: centered text block on the light mint background, fading in as it enters the viewport.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add le constat section"
```

---

### Task 4: Transition / Vision section

**Files:**
- Modify: `index.html` — replace `<!-- SECTION:VISION -->`
- Modify: `styles.css` — append vision rules

**Interfaces:**
- Consumes: `.container`, `.reveal`.
- Produces: `.vision` class (not reused elsewhere).

- [ ] **Step 1: Replace the vision placeholder in `index.html`**

```html
  <section class="vision">
    <div class="container vision__grid">
      <div class="vision__image reveal">
        <img src="assets/1.jpg" alt="Écrans d'onboarding Synk demandant l'âge, le poids et la taille pour personnaliser l'expérience">
      </div>
      <div class="vision__content reveal">
        <h2>Une plateforme, quatre moteurs</h2>
        <p>
          Synk réunit l'entraînement, la nutrition, la planification d'agenda
          et la communauté dans un seul système qui interagit en temps réel.
          L'application ne subit pas les imprévus de l'utilisateur : elle
          s'adapte dynamiquement à sa vie réelle.
        </p>
        <p class="vision__caption">
          Dès l'onboarding, l'app apprend qui tu es pour tout personnaliser
          en conséquence.
        </p>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Append vision styles to `styles.css`**

```css
/* VISION */
.vision {
  padding: var(--space-6) 0;
  background: var(--mint);
}

.vision__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  align-items: center;
}

@media (min-width: 800px) {
  .vision__grid {
    grid-template-columns: 0.9fr 1.1fr;
  }
}

.vision__image img {
  border-radius: 16px;
  max-width: 320px;
  margin: 0 auto;
}

.vision h2 {
  color: var(--forest);
}

.vision__caption {
  font-size: 0.95rem;
  color: var(--forest-dark);
  font-style: italic;
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "vision__grid" index.html styles.css` — expect at least 1 match in each.
Open `index.html`, scroll past "Le constat". Expected: light green background band with the onboarding mockup (`1.jpg`) beside the "Une plateforme, quatre moteurs" text — image first/text second on narrow screens, side-by-side on wide screens.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add vision/transition section"
```

---

### Task 5: Modules zigzag pattern + Module 1 (Planification Temporelle)

**Files:**
- Modify: `index.html` — replace `<!-- SECTION:MODULE1 -->`
- Modify: `styles.css` — append shared `.module` pattern + module-1-specific calendar schematic rules

**Interfaces:**
- Produces: shared `.module`, `.module__grid`, `.module--reverse`, `.module__eyebrow`, `.module__visual` classes reused by Tasks 6, 7, 8.
- Produces: `.calendar-schematic` classes (module-1-only, a CSS/HTML mini calendar illustration, no image needed).

- [ ] **Step 1: Replace the Module 1 placeholder in `index.html`**

```html
  <section class="module">
    <div class="container module__grid">
      <div class="module__content reveal">
        <p class="module__eyebrow">Module 01</p>
        <h3>Le Moteur de Planification Temporelle</h3>
        <p>
          Synk synchronise tes agendas personnels et professionnels et
          scanne automatiquement les créneaux libres d'au moins 60 à 90
          minutes, trajet compris. Chaque dimanche, un planning hebdomadaire
          optimal t'attend — ajustable en un simple glisser-déposer.
        </p>
        <p class="module__sub">
          <strong>Time-Blocking Protecteur :</strong> un événement factice
          verrouille ton créneau d'entraînement dans ton agenda, à l'abri des
          sollicitations externes.
        </p>
      </div>
      <div class="module__visual reveal">
        <div class="calendar-schematic">
          <div class="calendar-schematic__days">
            <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
          </div>
          <div class="calendar-schematic__slots">
            <span class="slot"></span>
            <span class="slot slot--active"></span>
            <span class="slot"></span>
            <span class="slot slot--active"></span>
            <span class="slot"></span>
            <span class="slot"></span>
            <span class="slot"></span>
          </div>
          <p class="calendar-schematic__note">Mar 19h00 · Jeu 07h30 — séances sanctuarisées</p>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Append shared module pattern + calendar schematic styles to `styles.css`**

```css
/* MODULES (shared pattern) */
.module {
  padding: var(--space-6) 0;
}

.module:nth-of-type(even) {
  background: var(--mint);
}

.module__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  align-items: center;
}

@media (min-width: 800px) {
  .module__grid {
    grid-template-columns: 1fr 1fr;
  }
  .module--reverse .module__grid {
    direction: rtl;
  }
  .module--reverse .module__grid > * {
    direction: ltr;
  }
}

.module__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: bold;
}

.module h3 {
  color: var(--forest);
  font-size: clamp(1.4rem, 2.6vw, 1.9rem);
}

.module__sub {
  font-size: 0.95rem;
  color: var(--forest-dark);
}

.module__visual {
  display: flex;
  justify-content: center;
}

/* MODULE 1 — calendar schematic */
.calendar-schematic {
  background: var(--forest);
  color: var(--cream);
  border-radius: 16px;
  padding: var(--space-3);
  width: 100%;
  max-width: 320px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.calendar-schematic__days,
.calendar-schematic__slots {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--space-1);
  text-align: center;
}

.calendar-schematic__days span {
  font-size: 0.8rem;
  opacity: 0.7;
}

.calendar-schematic__slots {
  margin-top: var(--space-2);
}

.slot {
  display: block;
  height: 48px;
  border-radius: 8px;
  background: rgba(251, 251, 245, 0.1);
}

.slot--active {
  background: var(--accent);
}

.calendar-schematic__note {
  margin-top: var(--space-2);
  font-size: 0.8rem;
  opacity: 0.85;
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "calendar-schematic" index.html styles.css` — expect at least 1 match in each.
Open `index.html`, scroll to Module 01. Expected: two-column layout (text left, dark green calendar card right on wide screens; stacked on narrow screens) with 7 day letters and 2 highlighted slots.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add shared module pattern and module 1 (planification temporelle)"
```

---

### Task 6: Module 2 (Accountability Partner 2.0)

**Files:**
- Modify: `index.html` — replace `<!-- SECTION:MODULE2 -->`
- Modify: `styles.css` — append module-2-specific decorative crop rules

**Interfaces:**
- Consumes: `.module`, `.module__grid`, `.module--reverse`, `.module__eyebrow`, `.module__visual` from Task 5.
- Produces: `.crop-decor` classes (module-2-only).

- [ ] **Step 1: Replace the Module 2 placeholder in `index.html`**

```html
  <section class="module module--reverse">
    <div class="container module__grid">
      <div class="module__content reveal">
        <p class="module__eyebrow">Module 02</p>
        <h3>Accountability Partner 2.0</h3>
        <p>
          Un algorithme calcule un score de compatibilité basé sur les
          disponibilités communes, la parité d'objectifs et le profil
          comportemental. Les deux utilisateurs signent un
          <strong>Contrat de Constance</strong> de 3 semaines — un cycle
          court et renouvelable pour éviter la lassitude.
        </p>
        <p class="module__sub">
          <strong>Co-op Milestones :</strong> à la validation du contrat, un
          visuel dynamique à partager sur les réseaux sociaux célèbre
          l'engagement du binôme.
        </p>
      </div>
      <div class="module__visual reveal">
        <div class="crop-decor">
          <div class="crop-decor__piece crop-decor__piece--star">
            <img src="assets/5.jpg" alt="">
          </div>
          <div class="crop-decor__piece crop-decor__piece--ribbon">
            <img src="assets/5.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Append module-2 decorative crop styles to `styles.css`**

```css
/* MODULE 2 — decorative crops from 5.jpg */
.crop-decor {
  display: flex;
  gap: var(--space-3);
  align-items: center;
  justify-content: center;
}

.crop-decor__piece {
  width: 140px;
  height: 140px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.crop-decor__piece img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.crop-decor__piece--star img {
  object-position: 100% 0%;
}

.crop-decor__piece--ribbon img {
  object-position: 0% 100%;
}

@media (max-width: 500px) {
  .crop-decor__piece {
    width: 100px;
    height: 100px;
  }
}
```

Note: `alt=""` on both images is intentional — the crops are purely decorative
flourishes (star/ribbon illustration corners of `5.jpg`), not informative
content, so they should be skipped by screen readers.

- [ ] **Step 3: Verify**

Run: `grep -c "crop-decor" index.html styles.css` — expect at least 1 match in each.
Open `index.html`, scroll to Module 02. Expected: text on the right and two small rounded square crops on the left on wide screens (order flips vs. Module 01 due to `.module--reverse`); each crop shows a corner of `5.jpg` (star top-right, ribbon bottom-left) — no login form text should be visible in either crop.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add module 2 (accountability partner 2.0)"
```

---

### Task 7: Module 3 (Fridge-to-Macro)

**Files:**
- Modify: `index.html` — replace `<!-- SECTION:MODULE3 -->`

**Interfaces:**
- Consumes: `.module`, `.module__grid`, `.module__eyebrow`, `.module__visual` from Task 5. No new CSS classes needed.

- [ ] **Step 1: Replace the Module 3 placeholder in `index.html`**

```html
  <section class="module">
    <div class="container module__grid">
      <div class="module__content reveal">
        <p class="module__eyebrow">Module 03</p>
        <h3>Le Moteur Fridge-to-Macro</h3>
        <p>
          Coche les ingrédients disponibles ou prends une photo de ton
          frigo : l'IA génère instantanément des repas équilibrés,
          recalculés au gramme près pour combler exactement ton quota de
          macronutriments restant pour la journée.
        </p>
        <p class="module__sub">
          <strong>SOS Restes anti-gaspi</strong>, et un lissage
          anti-culpabilité qui rééquilibre discrètement les repas suivants
          après un écart, sans jamais pénaliser.
        </p>
      </div>
      <div class="module__visual reveal">
        <img src="assets/4.jpg" alt="Plan de repas Synk affiché sur un téléphone, avec suivi des macronutriments du jour" style="border-radius: 16px; max-width: 320px;">
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Verify**

Run: `grep -c "Fridge-to-Macro" index.html` — expect at least 1 match.
Open `index.html`, scroll to Module 03. Expected: text left, meal-plan lifestyle photo (`4.jpg`) right on wide screens; stacked on narrow screens; light mint background (this is an even-numbered `.module`, so the `:nth-of-type(even)` rule applies).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add module 3 (fridge-to-macro)"
```

---

### Task 8: Module 4 (Coach Virtuel IA)

**Files:**
- Modify: `index.html` — replace `<!-- SECTION:MODULE4 -->`
- Modify: `styles.css` — append the quote-block style used by this module

**Interfaces:**
- Consumes: `.module`, `.module__grid`, `.module--reverse`, `.module__eyebrow`, `.module__visual` from Task 5.
- Produces: `.module__quote` class (module-4-only).

- [ ] **Step 1: Replace the Module 4 placeholder in `index.html`**

```html
  <section class="module module--reverse">
    <div class="container module__grid">
      <div class="module__content reveal">
        <p class="module__eyebrow">Module 04</p>
        <h3>Le Cerveau IA — Coach Virtuel Omniscient</h3>
        <p>
          Le coach croise les données de tous les modules : en cas de
          stagnation détectée sur 3 séances consécutives, il diagnostique la
          cause — déficit calorique, manque de sommeil, agenda surchargé —
          et ajuste automatiquement le programme.
        </p>
        <blockquote class="module__quote">
          « Salut ! J'ai analysé tes performances au squat cette semaine. Tu
          as stagné, mais tes nuits du jeudi étaient courtes à cause de ton
          planning. J'ai adapté ta séance de demain pour te laisser
          récupérer — on va chercher le record la semaine prochaine ! »
        </blockquote>
      </div>
      <div class="module__visual reveal">
        <img src="assets/3.jpg" alt="Anneau de progression et statistiques quotidiennes affichés sur un téléphone" style="border-radius: 16px; max-width: 280px;">
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Append quote-block styles to `styles.css`**

```css
/* MODULE 4 — coach quote */
.module__quote {
  margin: var(--space-2) 0 0;
  padding-left: var(--space-3);
  border-left: 3px solid var(--accent);
  font-style: italic;
  color: var(--forest-dark);
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "module__quote" index.html styles.css` — expect at least 1 match in each.
Open `index.html`, scroll to Module 04. Expected: text with an italic left-bordered quote block on the right and the progress-ring photo (`3.jpg`) on the left on wide screens.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add module 4 (coach virtuel IA)"
```

---

### Task 9: Flywheel section

**Files:**
- Modify: `index.html` — replace `<!-- SECTION:FLYWHEEL -->`
- Modify: `styles.css` — append flywheel rules

**Interfaces:**
- Consumes: `.container`, `.reveal`.
- Produces: `.flywheel` classes (not reused elsewhere).

- [ ] **Step 1: Replace the flywheel placeholder in `index.html`**

```html
  <section class="flywheel">
    <div class="container">
      <h2 class="flywheel__heading reveal">Un cercle vertueux</h2>
      <ol class="flywheel__list">
        <li class="flywheel__step reveal">
          <span class="flywheel__number">1</span>
          <div>
            <h3>Planification Temporelle</h3>
            <p>Sanctuarise le temps disponible.</p>
          </div>
        </li>
        <li class="flywheel__step reveal">
          <span class="flywheel__number">2</span>
          <div>
            <h3>Accountability Partner 2.0</h3>
            <p>Garantit l'engagement à deux.</p>
          </div>
        </li>
        <li class="flywheel__step reveal">
          <span class="flywheel__number">3</span>
          <div>
            <h3>Coach Virtuel IA</h3>
            <p>Identifie les plateaux et la fatigue.</p>
          </div>
        </li>
        <li class="flywheel__step reveal">
          <span class="flywheel__number">4</span>
          <div>
            <h3>Assistant Fridge-to-Macro</h3>
            <p>Ajuste la récupération et les repas.</p>
          </div>
        </li>
      </ol>
      <p class="flywheel__loop reveal">↻ La boucle continue chaque semaine.</p>
    </div>
  </section>
```

- [ ] **Step 2: Append flywheel styles to `styles.css`**

```css
/* FLYWHEEL */
.flywheel {
  padding: var(--space-6) 0;
  background: var(--forest);
  color: var(--cream);
  text-align: center;
}

.flywheel__heading {
  color: var(--cream);
  margin-bottom: var(--space-4);
}

.flywheel__list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.flywheel__step {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  text-align: left;
  background: rgba(251, 251, 245, 0.06);
  border-radius: 12px;
  padding: var(--space-2);
}

.flywheel__number {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--forest-dark);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flywheel__step h3 {
  color: var(--cream);
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.flywheel__step p {
  margin: 0;
  color: rgba(251, 251, 245, 0.8);
  font-size: 0.95rem;
}

.flywheel__loop {
  margin-top: var(--space-4);
  font-size: 1.3rem;
  color: var(--accent);
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "flywheel__step" index.html styles.css` — expect at least 1 match in each.
Open `index.html`, scroll to "Un cercle vertueux". Expected: dark green full-width band with 4 numbered rows stacked vertically, and a "↻ La boucle continue chaque semaine" line below.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add flywheel section"
```

---

### Task 10: Avantages concurrentiels section

**Files:**
- Modify: `index.html` — replace `<!-- SECTION:AVANTAGES -->`
- Modify: `styles.css` — append avantages grid rules

**Interfaces:**
- Consumes: `.container`, `.reveal`.
- Produces: `.avantages` classes (not reused elsewhere).

- [ ] **Step 1: Replace the avantages placeholder in `index.html`**

```html
  <section class="avantages">
    <div class="container">
      <h2 class="reveal">Pourquoi Synk gagne</h2>
      <div class="avantages__grid">
        <div class="avantages__card reveal">
          <svg class="avantages__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
          <h3>Zéro charge mentale d'organisation</h3>
          <p>L'entraînement s'insère automatiquement dans l'emploi du temps réel de l'utilisateur.</p>
        </div>
        <div class="avantages__card reveal">
          <svg class="avantages__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M2 20c0-3 3-5 6-5s6 2 6 5"/><path d="M12 20c0-3 3-5 6-5"/></svg>
          <h3>Accompagnement social structuré</h3>
          <p>Un engagement humain court encadré par des données objectives de disponibilité.</p>
        </div>
        <div class="avantages__card reveal">
          <svg class="avantages__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c-3 3-5 6-5 9a5 5 0 0 0 10 0c0-3-2-6-5-9z"/></svg>
          <h3>Nutrition sans gaspillage ni frustration</h3>
          <p>Des recettes sur mesure générées à partir des ingrédients du frigo, adaptées au gramme près.</p>
        </div>
        <div class="avantages__card reveal">
          <svg class="avantages__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.5.5.8 1.1.8 1.8V16h6.4v-.7c0-.7.3-1.3.8-1.8A6 6 0 0 0 12 3z"/></svg>
          <h3>Intelligence artificielle prédictive</h3>
          <p>Un coach capable de comprendre pourquoi un utilisateur stagne en croisant agenda, alimentation et performances.</p>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Append avantages styles to `styles.css`**

```css
/* AVANTAGES */
.avantages {
  padding: var(--space-6) 0;
}

.avantages h2 {
  color: var(--forest);
  text-align: center;
  margin-bottom: var(--space-4);
}

.avantages__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
}

@media (min-width: 700px) {
  .avantages__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.avantages__card {
  background: var(--cream);
  border-radius: 16px;
  padding: var(--space-3);
  box-shadow: 0 10px 30px rgba(11, 59, 46, 0.08);
}

.avantages__icon {
  width: 32px;
  height: 32px;
  color: var(--accent);
  margin-bottom: var(--space-1);
}

.avantages__card h3 {
  color: var(--forest);
  font-size: 1.15rem;
}

.avantages__card p {
  font-size: 0.95rem;
  color: var(--ink);
  margin: 0;
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "avantages__card" index.html styles.css` — expect at least 1 match in each.
Open `index.html`, scroll to "Pourquoi Synk gagne". Expected: 4 cards in a single column on narrow screens, 2×2 grid on wide screens, each with a small icon, heading, and description.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add avantages concurrentiels section"
```

---

### Task 11: Footer

**Files:**
- Modify: `index.html` — replace `<!-- SECTION:FOOTER -->`
- Modify: `styles.css` — append footer rules

**Interfaces:**
- Consumes: `.container`.
- Produces: `.footer` class.

- [ ] **Step 1: Replace the footer placeholder in `index.html`**

```html
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__wordmark">Synk</p>
      <p class="footer__tagline">Ta vie. Ton rythme. Un seul système.</p>
      <p class="footer__copy">© 2026 Synk — Concept.</p>
    </div>
  </footer>
```

- [ ] **Step 2: Append footer styles to `styles.css`**

```css
/* FOOTER */
.footer {
  background: var(--forest-dark);
  color: rgba(251, 251, 245, 0.7);
  padding: var(--space-4) 0;
  text-align: center;
}

.footer__wordmark {
  font-family: var(--font-display);
  color: var(--cream);
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}

.footer__tagline,
.footer__copy {
  font-size: 0.85rem;
  margin: 0.25rem 0;
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "footer__inner" index.html styles.css` — expect at least 1 match in each.
Open `index.html`, scroll to the very bottom. Expected: dark green footer with "Synk" wordmark, tagline, and copyright line — no buttons or links.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: add footer"
```

---

### Task 12: Final QA pass

**Files:**
- Modify: `index.html` (only if a defect from verification below requires a fix)
- Modify: `styles.css` (only if a defect from verification below requires a fix)

**Interfaces:**
- Consumes: the complete page from Tasks 1–11. No new interfaces produced — this task is verification-only.

- [ ] **Step 1: Full-page structural check**

Run: `grep -c "SECTION:" index.html` — expect `0` (every placeholder must have been replaced by Tasks 2–11).

- [ ] **Step 2: No external dependencies check**

Run: `grep -niE "cdn|googleapis|fonts.google|http://|https://" index.html styles.css script.js`
Expected: no output (no external URLs anywhere in the three files).

- [ ] **Step 3: Offline load check**

Disconnect from the network (or use browser DevTools → Network → "Offline"), then open `index.html` directly from disk. Expected: the full page renders identically to the online case — fonts, colors, and images (`assets/*.jpg`) all load, since everything is local.

- [ ] **Step 4: Console error check**

Open `index.html` in a browser with DevTools open (F12) → Console tab. Expected: zero errors or warnings.

- [ ] **Step 5: Responsive check**

Using DevTools device toolbar, check the page at 375px, 768px, and 1440px widths. Expected at every width: no horizontal scrollbar, no overlapping text/images, hero/vision/module images never exceed their column width.

- [ ] **Step 6: Reduced-motion check**

In DevTools, enable "Emulate CSS media feature prefers-reduced-motion: reduce" (Rendering tab), then reload. Expected: all sections are visible immediately on load with no fade/slide-in delay.

- [ ] **Step 7: Scroll-reveal check**

With reduced-motion emulation turned back off, reload the page and scroll from top to bottom slowly. Expected: each section's content fades and slides up into place the first time it enters the viewport, and stays visible afterward (no re-triggering on scroll-back).

- [ ] **Step 8: Fix any defects found in Steps 1–7, then re-run the relevant check(s) until they pass.**

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "chore: final QA pass on Synk landing page"
```

---

## Self-Review Notes

- **Spec coverage:** Hero (Task 2), Le Constat (Task 3), Vision/transition (Task 4), all 4 modules (Tasks 5–8), Flywheel (Task 9), Avantages (Task 10), Footer (Task 11), no CTA anywhere (verified structurally — no `<form>`, `<button>`, or `mailto:` links appear in any task), no external deps (Task 12 Step 2), offline-capable (Task 12 Step 3), reduced-motion support (Task 1 CSS + Task 12 Step 6), responsive (every section's CSS includes a `@media (min-width: ...)` rule + Task 12 Step 5). No gaps found.
- **Placeholder scan:** no "TBD"/"TODO" in any task; every step has complete, runnable code.
- **Type/name consistency:** `.reveal`/`.is-visible` (Task 1) used identically in Tasks 2–11; `.module`/`.module__grid`/`.module--reverse`/`.module__eyebrow`/`.module__visual` (Task 5) used identically in Tasks 6–8; `initScrollReveal()` defined once in Task 1 and never redefined.
