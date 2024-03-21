import { HoverEffect } from "../ui/card-hover-effect";
 
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    
    title: "Web developing",
    description:
      "We offer custom web development services for businesses, helping you establish a strong online presence.",
    link: "https://stripe.com",
  },
  {
    title: "Chatbot in your website.",
    description:
      "  AI-driven chatbots have the capability to analyze user interactions, enabling them to deliver personalized responses. This personalized approach enhances the user experience, ultimately leading to higher conversion rates ",
    link: "https://netflix.com",
  },
  {
    title: "Desktop software integration",
    description:
      "We integrate software and technology systems to optimize business processes, improve efficiency and maximize return on investment.",
    link: "https://google.com",
  },
  
];