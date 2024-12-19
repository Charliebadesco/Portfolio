"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function Projets() {
  return (
    <section className="py-12 px-8 lg:py-24 bg-gray-900 text-gray-100">
      <div className="container max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-gray-300 font-bold">
            Mes Projets
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <Image
              src="/project1.jpg"
              alt="Project 1"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <Typography
              variant="h4"
              className="mt-4 text-center text-gray-200 font-semibold"
            >
              🎨 Projet 1
            </Typography>
            <Typography
              variant="small"
              className="text-center mt-2 text-gray-400"
            >
              Un automate Cellulaire en C++
            </Typography>
          </div>
          <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <Typography
              variant="h4"
              className="mt-4 text-center text-gray-200 font-semibold"
            >
              🎨 Projet 2
            </Typography>
            <Typography
              variant="small"
              className="text-center mt-2 text-gray-400"
            >
              Un automate Cellulaire en Rust
            </Typography>
          </div>
           <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <Typography
              variant="h4"
              className="mt-4 text-center text-gray-200 font-semibold"
            >
              🎨 Projet 3
            </Typography>
            <Typography
              variant="small"
              className="text-center mt-2 text-gray-400"
            >
              Portfolio
            </Typography>
          </div>
          
          {/* Ajoutez d'autres projets ici */}
        </div>
      </div>
    </section>
  );
}

export default Projets;
