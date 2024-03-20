"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
 
const content = [
  {
    title: "Our work",
    description:
      "Atlantic Software crafts custom software solutions for startups and companies, integrating AI to fuel growth. Specializing in e-commerce and landing pages, we elevate businesses and convert visitors into customers. Choose us to boost your business.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Our first meeting",
    description:"The first step is to have a meeting to understand your needs and requirements. We will discuss the project and establish a budget.",
          content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Start the project",
    description:
      "Once our proposed budget and timeline are mutually agreed upon, the desing and development team at Atlantic Software will promptly initiate work on developing your idea.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Results",
    description:
      "At Atlantic Software, we believe in transparency and accountability throughout the project lifecycle. With our approach, you'll witness tangible progress on your project every week. Weekly meetings are scheduled to showcase the advancements made, ensuring clear communication and alignment with your vision.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}