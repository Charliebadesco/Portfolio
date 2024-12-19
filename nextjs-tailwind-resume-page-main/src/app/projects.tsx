"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function Projets() {
  return (
    <section  id="projets" className="py-12 px-8 lg:py-24 bg-gray-900 text-gray-100">
      <div className="container max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-gray-300 font-bold">
            Mes Projets
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <a href="https://github.com/Charliebadesco/Biograte" target="_blank" rel="noopener noreferrer">
              <Image
                src="/image/cellularC.png"
                alt="Automate Cellulaire en C++"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </a>
            <Typography
              variant="h4"
              className="mt-4 text-center text-gray-200 font-semibold"
            >
              Projet 1
            </Typography>
            <Typography
              variant="small"
              className="text-center mt-2 text-gray-400"
            >
              Un automate Cellulaire en C++
            </Typography>
          </div>
          <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <a href="https://github.com/Charliebadesco/Biograte" target="_blank" rel="noopener noreferrer">
              <Image
                src="/image/cellularR.png"
                alt="Automate Cellulaire en Rust"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </a>
            <Typography
              variant="h4"
              className="mt-4 text-center text-gray-200 font-semibold"
            >
              Projet 2
            </Typography>
            <Typography
              variant="small"
              className="text-center mt-2 text-gray-400"
            >
              Un automate Cellulaire en Rust
            </Typography>
          </div>
           <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <a href="https://github.com/Charliebadesco/Portfolio"target="_blank" rel="noopener noreferrer">
            <Image
              src="/image/project3.png"
              alt="Project 3"
              width={500}
              height={300}
              className="rounded-lg"
            />
            </a>
            <Typography
              variant="h4"
              className="mt-4 text-center text-gray-200 font-semibold"
            >
             Projet 3
            </Typography>
            <Typography
              variant="small"
              className="text-center mt-2 text-gray-400"
            >
              Deux portfolio utilisant Next.js et React
            </Typography>
          </div>
          <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <a href="https://github.com/Charliebadesco/JavaFXgame"target="_blank" rel="noopener noreferrer">
            <Image
              src="/image/project4.png"
              alt="Project 4"
              width={500}
              height={300}
              className="rounded-lg"
            />
            </a>
            <Typography
              variant="h4"
              className="mt-4 text-center text-gray-200 font-semibold"
            >
             Projet 3
            </Typography>
            <Typography
              variant="small"
              className="text-center mt-2 text-gray-400"
            >
              Un essai de jeu JavaFX avec initialisation d'un gameLoop et Animations d'un personnage controllable.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projets;
