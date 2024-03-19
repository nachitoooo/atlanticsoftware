import React from 'react';
import { FaQuestion, FaShoppingCart, FaBuilding, FaPlane } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <ServiceItem
        icon={<FaQuestion className="text-2xl" />}
        title="Software development for Startups"
        description="Empower your startup's journey with custom software development tailored to fuel growth and innovation"
      />
      <ServiceItem
        icon={<FaShoppingCart className="text-2xl" />}
        title="E-commerce"
        description="Our e-commerce solutions simplify transactions, providing a fantastic shopping experience for customers"
      />
      <ServiceItem
        icon={<FaBuilding className="text-2xl" />}
        title="Software development for companies"
        description="Elevate your company's potential through software solutions, finely tuned to ensure business success"
      />
      <ServiceItem
        icon={<FaPlane className="text-2xl" />}
        title="Landing page"
        description="Create a lasting first impression. Our landing pages are strategically designed to convert visitors into customers"
      />
    </div>
  );
}

function ServiceItem({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 border rounded-lg space-y-4">
      {icon}
      <div className="text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button"
