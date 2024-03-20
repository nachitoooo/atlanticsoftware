/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/d2AFlYkqCTD
 */
import { Button } from "@/components/ui/button";
import { FaRegCalendarAlt } from "react-icons/fa";

export function ReadyUseAi(): JSX.Element {
  return (
    <section className="bg-black py-16 px-8 w-full">
      <style>{`
        .custom-button {
          background-color: #7b26d9; /* Cambiamos el color de fondo del botón */
          transition: background-color .4s;
          color:#D3D3D3
        }
        .custom-button:hover {
          background-color: #e2aaff; /* Cambiamos el color directamente */
        }
      `}</style>
      <div className="w-full flex justify-end">
        <div className="flex flex-col items-start h-full">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">Ready to use AI?</span>
          <h2 className="text-4xl font-bold text-gray-500 leading-tight mb-6">
            Our clients have increased the customer satisfaction inside their <br></br>software by integrating AI
          </h2>
          <Button className="custom-button text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            Book a meeting
            <FaRegCalendarAlt className="ml-2 -mr-1 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}