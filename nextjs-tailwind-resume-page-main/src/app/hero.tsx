"use client";

import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

function Hero() {
  return (
    <section className="container mx-auto px-8 py-10 bg-gray-900 text-gray-100" style={{"maxWidth": "100%"}}>
      <Card shadow={false} className="border border-gray-700 rounded-2xl bg-gray-800">
        <CardHeader shadow={false} className="h-60 !rounded-lg">
          <img
            src="image/dark-image.jpg"
            alt="dark"
            height={1024}
            width={1024}
            className="w-full h-full object-center"
          />
        </CardHeader>
        <CardBody>
          <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar src="image/avatar1.png" alt="avatar" variant="rounded" />
              <div>
                <Typography variant="h6" color="gray">
                  Charlie Badesco
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-gray-400"
                >
                  charlotte.badesco@gmail.com
                </Typography>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outlined"
                className="border-gray-600 text-gray-300 flex items-center gap-2"
              >
                <i className="fa fa-github text-base" />
                Github
              </Button>
              <Button
                variant="outlined"
                className="border-gray-600 text-gray-300 flex items-center gap-2"
              >
                <i className="fa-brands fa-linkedin" />
                LinkedIn
              </Button>
            </div>
          </div>
          <Typography
            variant="small"
            className="font-normal text-gray-400 mt-6"
          >
            Passionnée par l'informatique et le développement d'outils innovants.
            <br />
            En reconversion professionnelle, avec une volonté de faire de ma passion un métier.
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
}

export default Hero;
