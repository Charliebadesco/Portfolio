"use client";

import Image from "next/image";

import React, { useState } from "react";
import {

  Button,
  Card,
  CardBody,
  CardHeader,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

function Hero() {
  const [open, setOpen]=useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div
    id="hero"
    className="container mx-auto px-8 py-10 bg-gray-900 text-gray-100"
    style={{ maxWidth: "100%" }}
  >
        <Card
        shadow={false}
        className="border border-gray-700 rounded-2xl bg-gray-800"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
  >
    <CardHeader 
    shadow={false} 
    className="h-60 !rounded-lg"
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
    >
      
      <Image
      src="/image/strip.jpg"
      alt="bannière"
      className="w-full h-full object-cover object-center"
      />

    </CardHeader>
    <CardBody
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
    >
      <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/image/avatar2.png"
            alt="avatar"
            className="w-200,  rounded-full"
          />
          <div>
            <Typography 
            variant="h6"
            color="white"
            placeholder="" 
            onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}>
              Charlie Badesco
            </Typography>
            <Typography 
            variant="small" 
            className="font-normal text-gray-400"
            placeholder="" 
        onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
          >
              charlotte.badesco@gmail.com
            </Typography>
            <Typography 
            variant="small" 
            className="font-normal text-gray-500"
            placeholder="" 
        onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
          >
              Lyon 69007
              <br />
              Permis B, véhiculée
            </Typography>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://github.com/Charliebadesco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outlined"
              className="border-gray-600 text-gray-300 flex items-center gap-2"
              placeholder="" 
        onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
            >
              <i className="fa fa-github text-base" />
              Github
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/charlie-badesco-2a25441ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outlined"
              className="border-gray-600 text-gray-300 flex items-center gap-2"
              placeholder="" 
        onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-linkedin" />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>

      <Typography 
      variant="small" 
      className="font-normal text-gray-400 mt-6"
      placeholder="" 
    onPointerEnterCapture={() => {}} 
    onPointerLeaveCapture={() => {}}
    >
        Passionnée par l'informatique, les sciences et le développement d'outils innovants.
        <br />
        Toujours curieuse, rigoureuse et animée par une soif d'apprentissage. Je suis en reconversion professionnelle dans l'informatique, j'ai une passion depuis l'adolescence pour le développement de nouvelles fonctionnalités avec une volonté de faire de ma passion un métier.
        <br />
      </Typography>
      <div className="mt-4">
        <Button
          variant="gradient"
          color="gray"
          onClick={handleOpen}
          className="w-full md:w-auto"
          placeholder="" 
        onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
        >
          En savoir plus sur moi
        </Button>
      </div>
    </CardBody>
  </Card>


        {/* aboutme me modale*/}

        <Dialog 
        open={open} handler={handleOpen}
        placeholder="" 
        onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}>
          <DialogHeader
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
          >Pour en Savoir plus
          </DialogHeader>
          <DialogBody
          divider
          placeholder="" 
        onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
          >
            <Typography 
            variant="paragraph"
            className="text-gray-800"
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
            >
                Bonjour ! Je suis Charlie, une jeune femme passionnée par les jeux vidéos, l'art, les sciences et l'informatique. 
                <br/>
                Depuis mon adolescence, je m'amuse a créer des petits jeux et mods dans différents langages. 
                <br/>
                J'ai décidé cette année de me lancer dans une reconversion professionnelle afin de faire de mes loisirs un métier et pouvoir continuer a développer mes compétences pour créer des solutions impactantes pour plus de personnes.
                <br/>
                <br/>
                Mes loisirs sont diversent et incluent la musique, les casses-têtes, puzzles et jeux de constructions mais également la découverte de concepts scientifiques complexes et leur simulation graphique.
                <br/>
                <br/>
                J'apprécie également les sorties en pleine nature, les randonnées et le bivouac. Je possède une voiture et le permis ce qui me permet d'être completement mobile dans la région.
            </Typography>
          </DialogBody>
          <DialogFooter
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
          >
            <Button
            variant="outlined"
              color="gray"
              onClick={handleOpen}
              className="mr-2"
              placeholder="" 
        onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
            >
              Fermer
            </Button>
          </DialogFooter>
        </Dialog>
    </div>
  );
}

export default Hero;
