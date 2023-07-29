import { reactive } from "vue";
import kasa from "../../assets/img/Openclassroom/kasa/kasa.png";
import kasa1 from "../../assets/img/Openclassroom/kasa/kasa1.png";
import kasa3 from "../../assets/img/Openclassroom/kasa/kasa3.png";
import kasa4 from "../../assets/img/Openclassroom/kasa/kasa4.png";
import kasaM1 from "../../assets/img/Openclassroom/kasa/kasaM1.png";
import kasaM2 from "../../assets/img/Openclassroom/kasa/kasaM2.png";
import kasaM from "../../assets/img/Openclassroom/kasa/kasaM.png";
import kasaBannerImg from "../../assets/img/mountains.png";
import piquante from "../../assets/img/Openclassroom/piquante/piquante.png"
import piquante1 from "../../assets/img/Openclassroom/piquante/piquante1.png";
import piquante2 from "../../assets/img/Openclassroom/piquante/piquante2.png";
import piquante3 from "../../assets/img/Openclassroom/piquante/piquante3.png";
import piquante4 from "../../assets/img/Openclassroom/piquante/piquante4.png";

export default [
  {
    id: "project-kasa",
    titre: "Kasa",
    imgMain: kasa,
    legende: "Créez une application web de location immobilière avec React",
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
    link: {
      label: "Maquette Figma",
      url: "https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/ARCHIVE-UI-Design-Kasa-FR?type=design&node-id=3-0&mode=design&t=foFzAiAzNBDTWsmn-0",
    },
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
    imgBanniere: piquante1,
    imgSite: piquante2,
    gallery: [piquante, piquante1, piquante2, piquante3, piquante4],
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
  // {
  //   id: "project-Kanap",
  //   titre: "Kanap",
  //   imgMain: piquante2,
  //   legende:
  //     "Construction d'une API REST pour une galerie de sauces piquantes. ",
  //   description:
  //     "Construction d'une API en backend pour le site HOT TAKES qui est une galerie de sauces permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. Le front-end de l'application a été développé au préalable et a été précompilé après des tests internes, le but étant donc de mettre en place une API ",
  //   statut: "Terminé",
  //   imgBanniere: piquante1,
  //   imgSite: piquante2,
  //   gallery: [piquante, piquante1, piquante2, piquante3, piquante4],
  //   category: "openclassrooms",
  //   tech: "Angular JS, NodeJS, Express, MongoDB",
  //   competences: [
  //     "Mettre en œuvre des opérations CRUD de manière sécurisée",
  //     "Implémenter un modèle logique de données conformément à la réglementation",
  //     "Stocker des données de manière sécurisée",
  //   ],
  //   github: "https://github.com/vanessa-lanquetin/Kanap",
  //   link: {
  //     label: "Maquette Figma",
  //     url: "https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/ARCHIVE-UI-Design-Kasa-FR?type=design&node-id=3-0&mode=design&t=foFzAiAzNBDTWsmn-0",
  //   },
  // },

  

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
