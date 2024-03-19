import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Label } from "@radix-ui/react-label";
import Input from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FiSend } from "react-icons/fi"; // Importar el ícono de enviar desde React Icons
import "tailwindcss/tailwind.css";
import "sweetalert2/dist/sweetalert2.css";


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
      Swal.fire({
        icon: 'success',
        title: '¡Email sent!',
        text: 'The email was sent correctly. We will contact you shortly',
      });
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while sending the email. Please try again later.',
      });
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
        We will resolve your doubts and answer any questions you have.
        </p>

        <form className="mt-8" onSubmit={handleSubmit} >
          <LabelInputContainer>
            <Label htmlFor="name" className="text-gray-400" >Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
              type="text"
              className="w-full custom-input" style={{ backgroundColor: "#030712", border: "1px solid #1f2937"}}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email" className="text-gray-400">Email</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full custom-input" style={{ backgroundColor: "#030712", border: "1px solid #1f2937"}}            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="message" className="text-gray-400">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=""
              className="w-full h-40 resize-none bg-gray-800 text-white p-2 rounded-md"
            />
          </LabelInputContainer>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-8 h-[1px] w-full text-gray-300" />

          <button
            type="submit"
            className="mt-8 px-6 py-3 bg-gradient-to-r from-neutral-400 to-neutral-500 text-white rounded-md shadow-md hover:from-neutral-500 hover:to-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out"
            style={{ marginLeft: '15px' }}
          >
            <span className="flex items-center">
              Enviar
              <FiSend className="ml-2" style={{ marginLeft: '15px' }}/> 
            </span>
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