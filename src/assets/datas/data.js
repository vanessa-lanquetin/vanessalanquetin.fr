import { reactive } from "vue";
import kasa from "../../assets/img/Openclassroom/kasa/kasa.png";
import kasa1 from "../../assets/img/Openclassroom/kasa/kasa1.png";
import kasa3 from "../../assets/img/Openclassroom/kasa/kasa3.png";
import kasa4 from "../../assets/img/Openclassroom/kasa/kasa4.png";
import kasaM1 from "../../assets/img/Openclassroom/kasa/kasaM1.png";
import kasaM2 from "../../assets/img/Openclassroom/kasa/kasaM2.png";
import kasaM from "../../assets/img/Openclassroom/kasa/kasaM.png";
import kasaBannerImg from "../../assets/img/mountains.png";

import piquante from "../../assets/img/Openclassroom/piquante/piquante.png";
import piquante1 from "../../assets/img/Openclassroom/piquante/piquante1.png";
import piquante2 from "../../assets/img/Openclassroom/piquante/piquante2.png";
import piquante3 from "../../assets/img/Openclassroom/piquante/piquante3.png";
import piquante4 from "../../assets/img/Openclassroom/piquante/piquante4.png";
import piquanteBannerImg from "../../assets/img/Openclassroom/piquante/piquanteBanniere.jpg";

import kanap from "../../assets/img/Openclassroom/kanap/kanap.png";
import kanap1 from "../../assets/img/Openclassroom/kanap/kanap1.png";
import kanap2 from "../../assets/img/Openclassroom/kanap/kanap2.png";
import kanap3 from "../../assets/img/Openclassroom/kanap/kanap3.png";
import kanap4 from "../../assets/img/Openclassroom/kanap/kanap4.png";

import panthere from "../../assets/img/Openclassroom/panthere/panthere.png";
import panthere1 from "../../assets/img/Openclassroom/panthere/panthere1.png";
import panthere2 from "../../assets/img/Openclassroom/panthere/panthere2.png";
import panthere3 from "../../assets/img/Openclassroom/panthere/panthere3.png";
import panthere4 from "../../assets/img/Openclassroom/panthere/panthere4.png";
import panthere5 from "../../assets/img/Openclassroom/panthere/panthere5.png";

import food from "../../assets/img/Openclassroom/food/food.png";
import food1 from "../../assets/img/Openclassroom/food/food1.png";
import food2 from "../../assets/img/Openclassroom/food/food2.png";
import food3 from "../../assets/img/Openclassroom/food/food3.png";
import food4 from "../../assets/img/Openclassroom/food/food4.png";
import food5 from "../../assets/img/Openclassroom/food/food5.png";
import food6 from "../../assets/img/Openclassroom/food/food6.png";
import food7 from "../../assets/img/Openclassroom/food/food7.png";
import food8 from "../../assets/img/Openclassroom/food/food8.png";
import food9 from "../../assets/img/Openclassroom/food/food9.png";

import reservia from "../../assets/img/Openclassroom/reservia/reservia.png";
import reservia1 from "../../assets/img/Openclassroom/reservia/reservia1.png";
import reservia2 from "../../assets/img/Openclassroom/reservia/reservia2.png";
import reservia3 from "../../assets/img/Openclassroom/reservia/reservia3.png";
import reservia4 from "../../assets/img/Openclassroom/reservia/reservia4.png";
import reservia5 from "../../assets/img/Openclassroom/reservia/reservia5.png";
import reservia6 from "../../assets/img/Openclassroom/reservia/reservia6.png";

export default [
  {
    id: "project-kasa",
    titre: "Kasa",
    imgMain: kasa,
    legende: "Créez une application web de location immobilière avec React.",
    description:
      "Le projet de l' agence immobilière, consistait à créer l'application web avec React. " +
      "Pour cela j'ai utlilisé Create React App et configurer les différentes routes et composants de l'application. ",
    statut: "Terminé",
    imgBanniere: kasaBannerImg,
    imgSite: kasaM,
    gallery: [kasa, kasa1, kasa3, kasa4, kasaM1, kasaM2, kasaM],
    category: "openclassrooms",
    tech: "React, , Javascript, Sass, Figma",
    competences: [
      "Configurer la navigation entre les pages de l'application avec React Router",
      "Développer des éléments de l'interface d'un site web grâce à des composants React",
      "Initialiser une application avec Create React App",
    ],
    github: "https://github.com/vanessa-lanquetin/kasa",
    link: [
      {
        label: "Maquette Figma",
        url: "https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/ARCHIVE-UI-Design-Kasa-FR?type=design&node-id=3-0&mode=design&t=foFzAiAzNBDTWsmn-0",
      },
    ],
  },
  {
    id: "project-piquante",
    titre: "Piquante",
    imgMain: piquante2,
    legende:
      "Construction d'une API REST pour une galerie de sauces piquantes. ",
    description:
      "Construction d'une API en backend pour le site HOT TAKES qui est une galerie de sauces permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. Le front-end de l'application a été développé au préalable et a été précompilé après des tests internes, le but étant donc de mettre en place une API ",
    statut: "Terminé",
    imgBanniere: piquanteBannerImg,
    imgSite: piquante2,
    gallery: [piquante, piquante1, piquante2, piquante3, piquante4, piquante],
    category: "openclassrooms",
    tech: "Angular JS, NodeJS, Express, MongoDB",
    competences: [
      "Mettre en œuvre des opérations CRUD de manière sécurisée",
      "Implémenter un modèle logique de données conformément à la réglementation",
      "Stocker des données de manière sécurisée",
    ],
    github: "https://github.com/vanessa-lanquetin/piquante",
    link: [
      {
        label: "Spécifications du projet",
        url: "https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Requirements_DW_P6.pdf",
      },
      {
        label: "Repo fronted",
        url: "https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6",
      },
    ],
  },
  {
    id: "project-Kanap",
    titre: "Kanap",
    imgMain: kanap,
    legende: "Construction d' un site e-commerce en JavaScript.",
    description:
      "Kanap est une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet. ",
    statut: "Terminé",
    imgBanniere: kanap,
    imgSite: kanap2,
    gallery: [kanap, kanap1, kanap2, kanap3, kanap4],
    category: "openclassrooms",
    tech: "Javascript,Bootstrap, Vanilla js",
    competences: [
      "Créer un plan de test pour une application",
      "Valider des données issues de sources externes",
      "Interagir avec un web service avec JavaScript",
      "Gérer des événements JavaScript",
    ],
    github: "https://github.com/vanessa-lanquetin/Kanap",
    link: [
      {
        label: "Spécifications du projet",
        url: "https://course.oc-static.com/projects/DWJ_FR_P5/DW+P5+-+Specifications+fonctionnelles.pdf",
      },
      {
        label: "Repo fronted",
        url: "https://github.com/OpenClassrooms-Student-Center/P5-Dev-Web-Kanap",
      },
    ],
  },
  {
    id: "project-panthere",
    titre: "La Panthère",
    imgMain: panthere,
    legende: "Optimiser un Site Web Existant",
    description:
      "La Panthère est une grande agence de web design basée à Lyon. L’activité de l’entreprise a bien démarré mais aujourd’hui, elle est en perte de vitesse. Mission : 1 - Analyse de l’état actuel de SEO du site fourni 2 - Amélioration du SEO du site 3 - Comparaison des résultats ",
    statut: "Terminé",
    imgBanniere: panthere3,
    imgSite: panthere2,
    gallery: [panthere, panthere1, panthere2, panthere3, panthere4, panthere5],
    category: "openclassrooms",
    tech: "Javascript,Bootstrap, html,css",
    competences: [
      "Assurer l'accessibilité d'un site web",
      "Réaliser une recherche des bonnes pratiques en développement web",
      "Optimiser le référencement d'un site web",
      "Optimiser la taille et la vitesse d’un site web",
      "Écrire un code HTML et CSS maintenable",
    ],
    github: "https://github.com/vanessa-lanquetin/La-panthere",
    link: [
      {
        label: "Version non optimisée",
        url: "https://github.com/vanessa-lanquetin/Ancienne-panthere",
      },
    ],
  },
  {
    id: "project-ohmyfood",
    titre: "OhMyFood",
    imgMain: food8,
    legende: "Dynamisez une page web avec des animations CSS",
    description:
      "Ohmyfood! est une entreprise de commande de repas en ligne.Notre concept permet aux utilisateurs de composer leur propre menu et réduire leur temps d’attente dans les restaurants car leur menu est préparé à l’avance.Plus de perte de temps à consulter la carte !",
    statut: "Terminé",
    imgBanniere: food7,
    imgSite: food8,
    gallery: [
      food,
      food1,
      food2,
      food3,
      food4,
      food5,
      food6,
      food7,
      food8,
      food9,
    ],
    category: "openclassrooms",
    tech: "sass,html5,css3,flexbox",
    competences: [
      "Mettre en œuvre des effets CSS graphiques avancés",
      "Mettre en place une structure de navigation pour un site web",
      "Assurer la cohérence graphique d'un site web",
      "Utiliser un système de gestion de versions pour le suivi du projet et son hébergement",
      "Mettre en place son environnement Front-End",
    ],
    github: "https://github.com/vanessa-lanquetin/P3-Ohmyfood",
    link: [
      {
        label: "Spécifications du projet",
        url: "https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P3+CSS+animations/DW+P3+-+Brief+creatif+-+Ohmyfood!.pdf",
      },
    ],
  },
  {
    id: "project-reservia",
    titre: "Réservia",
    imgMain: reservia5,
    legende: "Transformez une maquette en site web avec HTML & CSS",
    description:
      "Réservia, une petite entreprise proposant un outil de planification de vacances ! Son site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Les hébergements peuvent également être filtrés par thématique, par exemple leur budget ou leur ambiance. Aucun framework CSS (type BootStrap ou Tailwind CSS) ou préprocesseur CSS (type Sass ou Less) ne doit être utilisé.",
    statut: "Terminé",
    imgBanniere: reservia6,
    imgSite: reservia2,
    gallery: [
      reservia,
      reservia1,
      reservia2,
      reservia3,
      reservia4,
      reservia5,
      reservia6,
    ],
    category: "openclassrooms",
    tech: "Javascript,Bootstrap, html,css",
    competences: [
      "Intégrer du contenu conformément à une maquette",
      "Implémenter une interface responsive",
    ],
    github: "https://github.com/vanessa-lanquetin/VanessaLanquetin_2_08092021",
  },
  // {
  //   id: "project1",
  //   titre: "Projet 1",
  //   imgMain: kasa,
  //   legende: "Légende du projet 1",
  //   description: "",
  //   statut: "Terminé",
  //   imgBanniere: kasa1,
  //   category: "openclassrooms",
  //   gallery: [kasa, reservia2],
  // },
  // {
  //   id: "project2",
  //   titre: "Projet 2",
  //   imgMain: kasa,
  //   legende: "Légende du projet 1",
  //   description: "",
  //   statut: "Terminé",
  //   imgBanniere: kasa1,
  //   category: "openclassrooms",
  // },
  // {
  //   id: "project",
  //   titre: "Projet 3",
  //   imgMain: kasa,
  //   legende: "Légende du projet 1",
  //   description: "",
  //   statut: "Terminé",
  //   imgBanniere: kasa1,
  //   imgSite: kasa,
  //   category: "openclassrooms",
  // },
  // {
  //   id: "project-social-network",
  //   titre: "Projet 4",
  //   imgMain: kasa,
  //   legende: "Légende du projet 2",
  //   description: "",
  //   statut: "Terminé",
  //   imgBanniere: kasa,
  //   imgSite: kasa,
  //   category: "personal",
  // },
];
