"use client";

import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";
import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Piscine Web, Java, Projet Hub - Epitech (69)",
    date: "2024",
    children:
    "Projets : création de sites web dynamiques avec React.js et Node.js, gestion de bases de données MariaDB. Piscines intensives : Web (HTML/CSS, PHP, JavaScript), Java (développement de jeux vidéo 2D), réseau et administration systèmes. Développement web : front-end avec React, HTML/CSS, back-end avec MySQL/MariaDB. Développement Java : jeu vidéo 2D avec JavaFX.",
  },
  {
    icon: AcademicCapIcon,
    title: "Master Hygiène Sécurité Environnement - CNAM (49)",
    date: "2023",
    children:
      "Spécialité : Environnement, gestion des déchets, gestion des sites pollués. Projets : exercices de gestion de risque, gestion de projet, études de cas en site industriels. Enseignements : risques industriels et environnementaux, prévention des risques, analyse des milieux, ecologie, analyses de données statistiques. ",
  },
  {
    icon: AcademicCapIcon,
    title: "Licence de Biologie-Écologie - Académie de Nantes (44)",
    date: "2021",
    children: "Spécialités : neurobiologie, botanique.",
  },
  {
    icon: AcademicCapIcon,
    title: "Baccalauréat Scientifique - Lycée Claude-de-France (41)",
    date: "2018",
    children: "Spécialité : systèmes et créations numériques.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Animatrice Scientifique",
    date: "2024",
    children:
      "Animation d'activités scientifiques pour enfants de 6 à 12 ans dans un site de montagne. Création d’ateliers d’initiation à la robotique et au code (Arduino, Python)",
  },
  {
    icon: BriefcaseIcon,
    title: "Apprentissage Hygiène Sécurité Environnement - EFS (44)",
    date: "2021 - 2023",
    children:
      "Développement d’un outil de gestion des déchets et d’aide à la décision pour la gestion de prestataires. Collaboration avec l’équipe HSE pour la rédaction de documents techniques et leur digitalisation. Intégration de la plateforme TrackDéchets à l'échelle régionale. Aide à la rédaction du document unique. Participation à la revue de direction. ",
  },
  {
    icon: BriefcaseIcon,
    title: "Stagiaire en journalisme scientifique - Communicasciences (67)",
    date: "2021",
    children:
      "Recherche et documentation sur des projets technologiques liés à l’environnement. Rédaction d’articles techniques sur des outils numériques pour la préservation des espèces. ",
  },
  {
    icon: BriefcaseIcon,
    title: "Employée Polyvalente - Leclerc (41) Patismatique (44)",
    date: "2017 - 2020",
    children: "Accueil client, réapprovisionnement des rayons.",
  },
];

const SKILLS = [
  {
    icon: FaceSmileIcon,
    title: "Langues pratiquées",
    date: "Compétences Techniques",
    children: "Français (Langue maternelle), Anglais (C1-TOEIC 910), Allemand (A2), Roumain (A2), LSF(A2)",
  },
  {
    icon: FaceSmileIcon,
    title: "Langages et technologies informatiques",
    date: "Compétences Techniques",
    children: "Maîtrise de frameworks front-end tels que React, conpréhension du fonctionnement des bases de données, Expérientations dans tout type de technologies informatiquesPython, Java, PHP, TypeScript, React.js, Node.js, Express.js, Tailwind CSS, Visual Studio Code, IntelliJ IDEA, Eclipse, Linux, Windows, création de machines virtuelles, Algorithmie. ",
  },
  {
    icon: FaceSmileIcon,
    title: "Développement FullStack",
    date: "Compétences Techniques",
    children: "Maîtrise de frameworks front-end tels que React, conpréhension du fonctionnement des bases de données, Expérientations dans tout type de technologies informatiques",
  },
  {
    icon: FaceSmileIcon,
    title: "Appétence pour l'OOP",
    date: "Compétences Techniques",
    children: "Bonne intégration des langages orientés objets, compétences en C++, Java, PhP"
  },
  {
    icon: FaceSmileIcon,
    title: "Rigueur d'apprentissage et passion",
    date: "Compétences Organisationnelles",
    children: "rigueur et rapidité dans l'apprentissage",
  },
  {
    icon: FaceSmileIcon,
    title: "Gestion de projets",
    date: "Compétences Organisationnelles",
    children: "Gestion efficace du temps pour respecter les délais. Bonne capacité à jongler entre les taches",
  },
  {
  icon: FaceSmileIcon,
    title: "Travail en Equipe",
    date: "Compétences Organisationnelles",
    children: "Capacité à travailler en équipe",
  },
  {
    icon: FaceSmileIcon,
      title: "Fibre artistique",
      date: "Compétences personnelles",
      children: "Appétence pour les loisirs artistiques, le dessin, la musique et les arts manuels",
    },
];

export function InformationSection() {
  return (
    <section
      id="education" // Identifiant principal pour InformationSection
      className="pb-28 px-8 bg-gray-900 text-gray-100"
    >
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div id="education-section">
          {/* Ajout de l'id "education-section" */}
          <Typography
            color="gray"
            className="mb-6 text-3xl font-bold text-gray-300"
            placeholder="" 
            onPointerEnterCapture={() => {}} 
             onPointerLeaveCapture={() => {}}
          >
            Éducation et Certifications
          </Typography>
          <div className="container mx-auto grid grid-cols-1 gap-16">
            {EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div id="experience-section">
          {/* Ajout de l'id "experience-section" */}
          <Typography
            color="gray"
            className="mb-6 text-3xl font-bold text-gray-300"
            placeholder="" 
            onPointerEnterCapture={() => {}} 
             onPointerLeaveCapture={() => {}}
          >
            Expériences
          </Typography>
          <div className="container mx-auto grid grid-cols-1 gap-16">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div id="skills-section" className="container mt-36 mx-auto">
        {/* Ajout de l'id "skills-section" */}
        <Typography
          color="gray"
          className="mb-6 text-3xl font-bold text-gray-300"
          placeholder="" 
          onPointerEnterCapture={() => {}} 
           onPointerLeaveCapture={() => {}}
        >
          Compétences
        </Typography>
        <Typography 
        variant="lead" 
        className="!text-gray-400 mb-10"
        placeholder="" 
        onPointerEnterCapture={() => {}} 
         onPointerLeaveCapture={() => {}}
         >
          Mes compétences techniques et organisationnelles :
        </Typography>
        <div className="container mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2">
          {SKILLS.map((props, idx) => (
            <InfoCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default InformationSection;
