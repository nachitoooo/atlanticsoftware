import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import Link from "next/link";

export function AtlanticFooter() {
  return (
    <footer className="grid w-full min-h-[100px] items-end py-12 shrink-0 text-sm md:text-base dark:bg-black dark:text-gray-400 bg-black">
      <div className="container grid gap-6 px-4 md:px-6 lg:gap-10">
        <div className="flex items-center gap-4">
          <nav className="flex ml-auto space-x-4">
            <Link className="font-medium transition-colors hover:underline" href="#">
              Home
            </Link>
            <Link className="font-medium transition-colors hover:underline" href="#">
              Services
            </Link>
            <Link className="font-medium transition-colors hover:underline" href="#">
              Pricing
            </Link>
            <Link className="font-medium transition-colors hover:underline" href="/contact">
              Contact
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
        </div>
      </div>
    </footer>
  );
}