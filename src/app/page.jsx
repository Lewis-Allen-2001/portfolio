import Image from "next/image";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { SiExpress, SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <> 
      <div className="flex flex-col items-center space-y-8 py-10 bg-gray-900 text-white">
        <Image
          src="/selfie.webp"
          width={300}
          height={300}
          alt="Selfie of Lewis, he is really cool!"
          className="rounded-full border-4 border-gray-700 shadow-lg"
        />
      <div className="flex space-x-6 text-4xl text-blue-400">

        <IoLogoJavascript className="hover:text-yellow-400 transition duration-200" />

        <FaReact className="hover:text-blue-600 transition duration-200" />

        <RiTailwindCssFill className="hover:text-teal-500 transition duration-200" />

        <DiPostgresql className="hover:text-blue-600 transition duration-200" />

        <RiNextjsFill className="hover:text-gray-500 transition duration-200" />

        <FaNodeJs className="hover:text-green-400 transition duration-200" />

        <SiExpress className="hover:text-gray-400 transition duration-200" />

        <SiTypescript className="hover:text-blue-600 transition duration-200" />

      </div>
    </div>
    </>
  );
}

