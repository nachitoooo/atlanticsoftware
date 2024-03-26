"use client"
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./components/ui/navbar-.menu";
import { cn } from "../../utils/cn"; 
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CardHoverEffectDemo } from "@/components/component/card-hover-effect-component";
import { ButtonWithIcon } from "@/components/component/button-shadcn";
import { HandShake } from "@/components/component/book-call";
import { WavyBackgroundDemo } from "@/components/component/wavy-background";
import { Pricing } from "@/components/component/pricing";
import { StickyScrollRevealDemo } from "@/components/component/sticky-scroll";
import { AtlanticFooter } from "@/components/component/atlantic-software";
import Services from "@/components/component/services";
import { ReadyUseAi } from "@/components/component/ready_use_ai";
import { FaArrowTurnUp } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <WavyBackgroundDemo /> 
      <Navbar className="top-2" />
      <HomeAtlantic />
      <ScrollToTopButton />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div
      className={cn("fixed inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-300", className, {
        "top-0": visible,
        "-top-full": !visible,
      })}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="home">
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/contact">contact</HoveredLink>
        
      </Menu>
    </div>
  );
}

function HomeAtlantic() {
  const words = [
    { text: "Boost" },
    { text: "your" },
    { text: "business" },
    { text: "with" },
    { text: "Atlantic" },
    { text: "Software", className: "text-sky-600 dark:text-blue-500" },
  ];

  return (
    <div className="bg-black text-white">
      <section className="max-w-6xl mx-auto px-4 py-20 text-center relative z-10">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-4" style={{ marginTop: '150px' }}>
            <TypewriterEffect words={words} />
          </h1>
          <p className="text-xl font-bold text-white-40">Atlantic software is a software development company that provides software solutions for your company, integrating AI into your projects.</p>
        </div>

        <div className="flex justify-center space-x-4">
          <ButtonWithIcon />
          <HandShake />
        </div>
       
        <CardHoverEffectDemo />

        <Pricing></Pricing>
        <Services></Services>

        <section className="py-3">
          <StickyScrollRevealDemo></StickyScrollRevealDemo>
        </section>
      </section>
      <ReadyUseAi></ReadyUseAi>

      
      <AtlanticFooter></AtlanticFooter>


    </div>
  );
}

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-4 right-8 cursor-pointer">
      <div className="bg-black rounded-full p-1">
        <FaArrowTurnUp size={33} color="#FFFF" onClick={scrollToTop} />
      </div>
    </div>
  );
}