"use client"

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import InformationSection from "./information-section";
import Projets from "./projects";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <InformationSection /> 
      <Projets />
      <Footer />
    </>
  );
}
