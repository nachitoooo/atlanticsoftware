"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./components/ui/navbar-.menu";
import { cn } from "../../utils/cn"; 
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <HomeAtlantic />
    </div>
  );
}

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

        {/*  */}
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

export function HomeAtlantic() {
  const words = [
    {
      text: "Potencia",
    },
    {
      text: "tu",
    },
    {
      text: "negocio",
    },
    {
      text: "con",
    },
    {
      text: "Atlantic software.",
      className: "text-blue-600 dark:text-blue-500",
    },
  ];

  return (
    <div className="bg-black text-white">
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-4" style={{ marginTop: '150px' }}>
            <TypewriterEffect words={words} /> {/* Utiliza el componente TypewriterEffect */}
          </h1>
        </div>
        
      </section>
    </div>
  );
}