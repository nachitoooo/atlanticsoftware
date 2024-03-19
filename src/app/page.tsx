"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./components/ui/navbar-.menu";
import { cn } from "../../utils/cn"; 
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CardHoverEffectDemo } from "@/components/component/card-hover-effect-component";
import { ButtonWithIcon } from "@/components/component/button-shadcn";
import { ButtonWithCalendarIcon } from "@/components/component/book-call";
import { WavyBackgroundDemo } from "@/components/component/wavy-background";
import { Pricing } from "@/components/component/pricing";
import { StickyScrollRevealDemo } from "@/components/component/sticky-scroll";
import Services from "@/components/component/services";

// Define el componente de página principal (Home)
export default function Home() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <WavyBackgroundDemo /> 
      <Navbar className="top-2" />
      <HomeAtlantic />
    </div>
  );
}

// Define el componente Navbar
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

// Define el componente HomeAtlantic
function HomeAtlantic() {
  const words = [
    { text: "Potencia" },
    { text: "tu" },
    { text: "negocio" },
    { text: "con" },
    { text: "Atlantic" },
    { text: "Software.", className: "text-blue-600 dark:text-blue-500" },
  ];

  return (
    <div className="bg-black text-white">
      <section className="max-w-6xl mx-auto px-4 py-20 text-center relative z-10">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-4" style={{ marginTop: '150px' }}>
            <TypewriterEffect words={words} />
          </h1>
          <p className="text-sm font-bold text-gray-400">Atlantic software is a software development company that provides software solutions for your company, integrating AI into your projects.</p>
        </div>

        <div className="flex justify-center space-x-4">
          <ButtonWithIcon />
          <ButtonWithCalendarIcon />
        </div>
        
        <CardHoverEffectDemo />
        
        <Pricing></Pricing>

        <Services></Services>

        <section className="py-3">
          <StickyScrollRevealDemo></StickyScrollRevealDemo>
        </section>
      </section>
    </div>
  );
}
