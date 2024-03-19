import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Label } from "@radix-ui/react-label";
import Input from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import "tailwindcss/tailwind.css";

const YOUR_SERVICE_ID = "service_nshkq05";
const YOUR_TEMPLATE_ID = "template_1awvomf";
const YOUR_USER_ID = "XdPWlXHgq0KzRPA4_"; 

export function ContactFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      await emailjs.send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message
        },
        YOUR_USER_ID
      );
      console.log("¡Correo electrónico enviado correctamente!");
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-white dark:bg-black p-8 md:p-12 shadow-input rounded-2xl">
        <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
          Contact Atlantic{" "}
          <span className="text-blue-300 dark:text-blue-500">Software</span>
        </h2>
        <p className="text-neutral-600 text-lg max-w-md mt-4 dark:text-neutral-300">
          Resolveremos tus dudas y responderemos cualquier pregunta que tengas.
        </p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tyler Durden"
              type="text"
              className="w-full"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="projectmayhem@fc.com"
              type="email"
              className="w-full"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí."
            className="w-full h-40 resize-none text-gray-300"
            style={{ color: 'white' }}
          />
          </LabelInputContainer>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-8 h-[1px] w-full text-gray-300" />

          <button
            type="submit"
            className="mt-8 px-6 py-3 bg-gradient-to-r from-neutral-400 to-neutral-500 text-white rounded-md shadow-md hover:from-neutral-500 hover:to-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

const LabelInputContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={cn("mb-6", className)}>{children}</div>;
};

export default ContactFormDemo;
