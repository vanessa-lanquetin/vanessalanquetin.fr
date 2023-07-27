import { reactive } from "vue";
import kasa from "../../assets/img/Openclassroom/kasa/kasa.png";
import kasa1 from "../../assets/img/Openclassroom/kasa/kasa1.png";
import kasa3 from "../../assets/img/Openclassroom/kasa/kasa3.png";
import kasa4 from "../../assets/img/Openclassroom/kasa/kasa4.png";
import kasaM1 from "../../assets/img/Openclassroom/kasa/kasaM1.png";
import kasaM2 from "../../assets/img/Openclassroom/kasa/kasaM2.png";
import kasaM from "../../assets/img/Openclassroom/kasa/kasaM.png";
import kasaBannerImg from "../../assets/img/mountains.png";
import reservia from "../../assets/img/Openclassroom/Réservia/DESKTOP/r.png";
import reservia2 from "../../assets/img/Openclassroom/Réservia/DESKTOP/r2.png";

export default [
  {
    id: "project-kasa",
    titre: "Kasa",
    imgMain: kasa,
    legende:
      "Pour ce projet, je devais créer une apllication web d'une agence immobilière avec React. " +
      "Pour la réalisation de ce site, je me suis appuyé sur la maquette Figma du designer. ",
    description:
      "Le projet de l' agence immobilière, consistait à créer l'application web avec React. " +
      "Pour cela j'ai utlilisé Create React App et configurer les différentes routes et composants de l'application. ",
    statut: "Terminé",
    imgBanniere: kasaBannerImg,
    imgSite: kasaM,
    gallery: [kasa, kasa1,kasa3,kasa4,kasaM1,kasaM2,kasaM],
    category: "openclassrooms",
    tech: "react",
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
    id: "project1",
    titre: "Projet 1",
    imgMain: kasa,
    legende: "Légende du projet 1",
    description: "",
    statut: "Terminé",
    imgBanniere: kasa1,
    category: "openclassrooms",
    gallery: [kasa, reservia2],
  },
  {
    id: "project2",
    titre: "Projet 2",
    imgMain: kasa,
    legende: "Légende du projet 1",
    description: "",
    statut: "Terminé",
    imgBanniere: kasa1,
    category: "openclassrooms",
  },
  {
    id: "project",
    titre: "Projet 3",
    imgMain: kasa,
    legende: "Légende du projet 1",
    description: "",
    statut: "Terminé",
    imgBanniere: kasa1,
    imgSite: kasa,
    category: "openclassrooms",
  },
  {
    id: "project-social-network",
    titre: "Projet 4",
    imgMain: kasa,
    legende: "Légende du projet 2",
    description: "",
    statut: "Terminé",
    imgBanniere: kasa,
    imgSite: kasa,
    category: "personal",
  },
];
