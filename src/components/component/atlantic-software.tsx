import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function AtlanticFooter() {

  const sendWhatsappMessage = () => {
    const phoneNumber = '5492257542291'; // Add the country code and remove any non-numeric characters
    const message = 'Hello i want to buy a software!'; // Message you want to send

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="grid w-full min-h-[100px] items-end py-12 shrink-0 text-sm md:text-base dark:bg-black dark:text-gray-400 bg-black">
      <div className="container grid gap-6 px-4 md:px-6 lg:gap-10">
        <div className="flex items-center gap-4">
          <nav className="flex ml-auto space-x-4">
            <Link className="font-medium transition-colors hover:underline" href="#">
              home
            </Link>
            <Link className="font-medium transition-colors hover:underline" href="#">
              services
            </Link>
            <Link className="font-medium transition-colors hover:underline" href="#">
              pricing
            </Link>
            <Link className="font-medium transition-colors hover:underline" href="/contact">
              contact
            </Link>
          </nav>
        </div>
        <div className="flex justify-end gap-4">
          <Link className="rounded-full w-[42px] h-[42px] border flex items-center justify-center" href="#">
            <AiFillLinkedin className="w-8 h-8 text-white" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link className="rounded-full w-[42px] h-[42px] border flex items-center justify-center" href="#">
            <AiFillInstagram className="w-8 h-8 text-white" />
            <span className="sr-only">Instagram</span>
          </Link>
          <button className="rounded-full w-[42px] h-[42px] border flex items-center justify-center" onClick={sendWhatsappMessage}>
            <FaWhatsapp className="w-8 h-8 text-white" />
            <span className="sr-only">Whatsapp</span>
          </button>
          <Link className="rounded-full w-[42px] h-[42px] border flex items-center justify-center" href="#">
            <MdEmail className="w-8 h-8 text-white" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
