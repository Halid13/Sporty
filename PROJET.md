# Spécifications Produit : Plateforme Unifiée de Progression Sportive & Bien-être

## 1. Vision & Positionnement du Projet

### Le Constat
La majorité des personnes qui abandonnent la musculation ou leur rééquilibrage alimentaire ne manquent pas de motivation brute, mais d'un **système cohérent**[cite: 1]. Le marché du fitness actuel est fragmenté en applications isolées (un outil pour les calories, un pour les séances, un pour l'agenda)[cite: 1]. Cette dispersion génère une fatigue mentale, un manque de régularité et un taux d'abandon élevé[cite: 1].

### La Solution
Créer une **plateforme unique et unifiée**[cite: 1] où l'entraînement, la nutrition, la planification d'agenda et la communauté interagissent en temps réel[cite: 1]. L'application ne subit pas les imprévus de l'utilisateur : elle s'adapte dynamiquement à sa vie réelle pour transformer la motivation passagère en discipline durable[cite: 1].

---

## 2. Architecture Détaillée des 4 Modules Fondateurs

---

### 1. Le Moteur de Planification Temporelle (Module Entraînement & Régularité)

> **Rôle dans l'écosystème :** Supprimer la friction logistique du *« Quand vais-je m'entraîner cette semaine ? »*[cite: 1]. En connectant le sport aux impératifs personnels, l'entraînement s'adapte à la vie de l'utilisateur, éliminant le premier facteur de décrochage : le manque de temps[cite: 1].

* **Fonctionnement détaillé :** 
  * Lors de l'onboarding, l'utilisateur synchronise ses agendas personnels et professionnels (Google Calendar, Outlook, Apple Calendar)[cite: 1].
  * L'IA scanne automatiquement les créneaux libres d'au moins 60 à 90 minutes, en intégrant un temps de trajet moyen calculé selon la géolocalisation de la salle de sport[cite: 1].
  * Chaque dimanche, l'application propose un planning hebdomadaire optimal (ex. : 3 séances placées stratégiquement)[cite: 1].
  * L'utilisateur reçoit une notification de confirmation : *« Ton planning de la semaine est prêt. On a sanctuarisé tes séances mardi soir et jeudi matin avant tes cours/travail. Dis-nous si ça te va ! »*[cite: 1].
  * L'interface permet un ajustement rapide et intuitif par simple glisser-déposer[cite: 1].

* **Interactions avec les autres modules :**
  * **$\rightarrow$ Vers le Matching Partner :** Il partage uniquement les fenêtres de disponibilité communes pour s'assurer que le binôme peut réellement s'entraîner ensemble ou se synchroniser en temps réel[cite: 1].
  * **$\rightarrow$ Vers le Coach Virtuel :** En cas d'agenda surchargé (ex. : période d'examens, rush professionnel), le Coach IA réduit automatiquement la durée des séances (passage de 1h15 à 45 minutes en mode express/supersets) pour préserver la régularité sans stress[cite: 1].

* **Fonctionnalité clé — Le "Time-Blocking Protecteur" :**
  * L'application peut générer automatiquement un événement factice dans l'agenda personnel/professionnel de l'utilisateur (ex. : *"Rendez-vous Performance — Privé"*)[cite: 1]. Cela verrouille le créneau face aux sollicitations externes qui pourraient empiéter sur son temps d'entraînement[cite: 1].

---

### 2. Le Matching "Accountability Partner 2.0" (Module Communauté Structurée)

> **Rôle dans l'écosystème :** Créer le filet social humain indispensable à la persévérance, tout en y ajoutant une structure technologique pour éviter que le binôme ne s'effondre en quelques semaines[cite: 1].

* **Fonctionnement détaillé :** 
  * L'algorithme rejette les critères superficiels et calcule un score de compatibilité basé sur 3 piliers opérationnels[cite: 1] :
    1. **Disponibilités communes :** Extraites directement du module de planification[cite: 1].
    2. **Parité d'objectifs et de niveau :** Ex. : deux pratiquants intermédiaires en phase de sèche[cite: 1].
    3. **Profil comportemental :** Identifié par un court questionnaire (profil *Motivateur* axé communication, profil *Silencieux* axé chiffres/performance, ou profil *Complice* partageant les mêmes doutes)[cite: 1].
  * Les deux utilisateurs signent un **"Contrat de Constance"** virtuel pour une durée stricte de 3 semaines (un cycle court et renouvelable pour éviter la lassitude)[cite: 1].

* **Interactions avec les autres modules :**
  * **$\rightarrow$ Vers le module Régularité :** Si le Partenaire A décale sa séance, le Partenaire B reçoit une notification discrète l'invitant à lui envoyer un boost de motivation[cite: 1].
  * **$\rightarrow$ Vers le module Entraînement :** L'application crée des défis hebdomadaires personnalisés basés sur le volume total soulevé par le binôme, unifiant leurs efforts[cite: 1].

* **Potentiel Viral & Croissance — Les "Co-op Milestones" :**
  * Dès la validation des 3 semaines de contrat avec 100 % d'assiduité, l'application génère un visuel dynamique et esthétique à partager sur les réseaux sociaux (TikTok / Instagram)[cite: 1] : *« Ensemble, nous avons soulevé 15 tonnes et validé 12 séances sans fléchir. Qui veut nous affronter ? »*[cite: 1].

---

### 3. Le Moteur "Fridge-to-Macro" (Module Nutrition Calibrée)

> **Rôle dans l'écosystème :** Éliminer la charge mentale de la diète et briser la fatigue du calcul des calories en cuisinant avec ce que l'utilisateur possède déjà, évitant ainsi le recours aux livraisons de repas ultra-transformés[cite: 1].

* **Fonctionnement détaillé :** 
  * L'utilisateur coche ses ingrédients disponibles (ex. : poulet, œuf, riz, courgettes, huile d'olive) ou prend une photo rapide de son réfrigérateur / de ses aliments[cite: 1].
  * L'IA génère instantanément des suggestions de repas équilibrés[cite: 1].
  * **Ajustement dynamique :** Les quantités de chaque ingrédient sont recalculées au gramme près pour combler exactement le quota de macronutriments restant pour la journée, selon les repas déjà consommés[cite: 1].

* **Interactions avec les autres modules :**
  * **$\rightarrow$ Vers le Coach IA :** Si le coach détecte un plateau de force lié à un manque d'énergie, il augmente automatiquement la proportion de glucides recommandée dans les recettes générées[cite: 1].

* **Psychologie & Anti-Gaspi :**
  * **Le Bouton "SOS Restes - Anti-Gaspi" :** Un filtre de recettes basé sur la date de péremption estimée des aliments[cite: 1].
  * **Garde-fou Psychologique (Lissage anti-culpabilité) :** Si l'utilisateur enregistre un aliment "plaisir" hors programme, l'IA ne le pénalise pas[cite: 1]. Elle recalcule simplement et discrètement les portions des repas suivants pour lisser l'impact sur le reste de la semaine sans générer de stress ou de culpabilité[cite: 1].

---

### 4. Le Cerveau IA — Coach Virtuel Omniscient (Le Noyau Central)

> **Rôle dans l'écosystème :** Chef d'orchestre asynchrone de l'application, il brise les silos d'informations en analysant les données croisées de tous les modules pour agir comme un entraîneur de haut niveau[cite: 1].

* **Fonctionnement détaillé :** 
  * Il suit l'évolution de la charge globale de travail sur chaque exercice via la formule :
    $$\text{Volume} = \text{Séries} \times \text{Répétitions} \times \text{Charge}$$
  * En cas de stagnation observée sur 3 séances consécutives (détection de plateau)[cite: 1], l'IA déclenche un diagnostic croisé :
    * *Déficit calorique ou manque de glucides via le module Nutrition ?*[cite: 1]
    * *Manque de sommeil ou pic de rendez-vous stressants via le module Planification ?*[cite: 1]
  * Le programme est ajusté automatiquement (changement de tempo, variation d'exercice, deload)[cite: 1].

* **Interactions avec les autres modules :**
  * **$\rightarrow$ Vers l'ensemble des modules :** Centralise les performances, réadapte la nutrition, redessine le planning et prévient le partenaire d'accountability si une phase de fatigue nerveuse est détectée afin de renforcer le soutien[cite: 1].

* **UX & Humanisation — Le "Rapport de Diagnostic Vocal" :**
  * À la fin de chaque cycle, le coach génère une synthèse vocale audio chaleureuse et personnalisée[cite: 1] :  
    > *« Salut ! J'ai analysé tes performances au squat cette semaine. Tu as stagné, mais j'ai vu que tes nuits du jeudi étaient courtes à cause de ton planning de cours. Pas de panique, j'ai adapté ta séance de demain en réduisant le volume pour te permettre de bien récupérer, et on va chercher le record la semaine prochaine ! »*[cite: 1]

---

## 3. Matrice de Rétroaction et Circulation des Données (Flywheel)

Le tableau ci-dessous illustre comment chaque donnée récoltée par un module enrichit immédiatement l'expérience globale du système[cite: 1] :

| Source de la donnée | Module récepteur | Action automatisée déclenchée |
| :--- | :--- | :--- |
| **Agenda externe** (Surcharge de travail / examens)[cite: 1] | Coach IA & Planification[cite: 1] | Réduction du temps de séance (format 45 min)[cite: 1]. |
| **Logs d'entraînement** (Stagnation sur 3 séances)[cite: 1] | Nutrition ("Fridge-to-Macro")[cite: 1] | Augmentation ciblée de la part de glucides[cite: 1]. |
| **Suivi Nutritionnel** (Baisse de saisie / écarts)[cite: 1] | Binôme d'Accountability[cite: 1] | Notification d'encouragement envoyée au partenaire[cite: 1]. |
| **Validation de séance** (3 semaines d'assiduité)[cite: 1] | Module Communauté[cite: 1] | Génération d'une carte "Co-op Milestone" pour TikTok/Insta[cite: 1]. |

+-----------------------------------+
             |    1. PLANIFICATION TEMPORELLE    |
             |   Sanctuarise le temps disponible |
             +-----------------+-----------------+
                               |
                               v
             +-----------------------------------+
             |   2. ACCOUNTABILITY PARTNER 2.0   |
             |     Garantit l'engagement à 2     |
             +-----------------+-----------------+
                               |
                               v
             +-----------------------------------+
             |    3. COACH VIRTUEL IA (NOYAU)    |
             | Identifie les plateaux & fatigue  |
             +-----------------+-----------------+
                               |
                               v
             +-----------------------------------+
             |    4. ASSISTANT FRIDGE-TO-MACRO   |
             |   Ajuste la récupération/repas    |
             +-----------------+-----------------+
                               |
                               +---> (Boucle continue)

                               ---

## 4. Synthèse des Avantages Concurrentiels

1. **Zéro charge mentale d'organisation :** L'entraînement s'insère automatiquement dans l'emploi du temps réel de l'utilisateur[cite: 1].
2. **Accompagnement social structuré :** Un engagement humain court (3 semaines) encadré par des données objectives de disponibilité[cite: 1].
3. **Nutrition sans gaspillage ni frustration :** Des recettes sur mesure générées à partir des ingrédients du frigo et adaptées au gramme près[cite: 1].
4. **Intelligence artificielle prédictive :** Un coach capable de comprendre **pourquoi** un utilisateur stagne en croisant son agenda, son alimentation et ses performances physiques[cite: 1].