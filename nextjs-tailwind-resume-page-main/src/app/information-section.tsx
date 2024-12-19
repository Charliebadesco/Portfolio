"use client";

import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Piscine Web, Java, Projet Hub - Epitech (69)",
    date: "2024",
    children:
      "Développement web : front-end avec React, HTML/CSS, back-end avec MySQL/MariaDB. Développement Java : jeu vidéo 2D avec JavaFX.",
  },
  {
    icon: AcademicCapIcon,
    title: "Master Hygiène Sécurité Environnement - CNAM (49)",
    date: "2023",
    children:
      "Spécialité : Environnement, gestion des déchets, gestion des sites pollués.",
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
      "Animation d'activités scientifiques pour enfants de 6 à 12 ans dans un site de montagne.",
  },
  {
    icon: BriefcaseIcon,
    title: "Apprentissage Hygiène Sécurité Environnement - EFS (44)",
    date: "2021 - 2023",
    children:
      "Création d'un outil d'aide à la décision pour optimiser la gestion des déchets. Accompagnement en rédaction de document unique et mise en place de l'outil Track Déchets.",
  },
  {
    icon: BriefcaseIcon,
    title: "Stagiaire en journalisme scientifique - Communicasciences (67)",
    date: "2021",
    children:
      "Rédaction d'articles de vulgarisation scientifique pour la préservation de la faune du Grand Est.",
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
    icon: FireIcon,
    title: "Front-End Frameworks",
    date: "Compétences Techniques",
    children: "Maîtrise de frameworks front-end tels que React.",
  },
  {
    icon: FireIcon,
    title: "Responsive Web Design",
    date: "Compétences Techniques",
    children: "Création de designs responsifs avec CSS Grid et Flexbox.",
  },
  {
    icon: FireIcon,
    title: "Attention to Detail",
    date: "Compétences Organisationnelles",
    children: "Grande rigueur dans le développement et la conception UI.",
  },
  {
    icon: FireIcon,
    title: "Time Management",
    date: "Compétences Organisationnelles",
    children: "Gestion efficace du temps pour respecter les délais.",
  },
];

export function InformationSection() {
  return (
    <section className="pb-28 px-8 bg-gray-900 text-gray-100">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <Typography
            color="gray"
            className="mb-6 text-3xl font-bold text-gray-300"
          >
            Éducation et Certifications
          </Typography>
          <div className="container mx-auto grid grid-cols-1 gap-16">
            {EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <Typography
            color="gray"
            className="mb-6 text-3xl font-bold text-gray-300"
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
      <div className="container mt-36 mx-auto">
        <Typography
          color="gray"
          className="mb-6 text-3xl font-bold text-gray-300"
        >
          Compétences
        </Typography>
        <Typography variant="lead" className="!text-gray-400 mb-10">
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
