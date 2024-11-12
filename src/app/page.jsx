import Image from "next/image"
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";


export default function Home() {
  return (
  <>
  <div>
    <Image src="/selfie.webp" 
    width={200}
    height={200}
    alt="Selfie of Lewis , he is really cool!"
    /> 
    <div>
<IoLogoJavascript />
<FaReact />
<RiTailwindCssFill />
<DiPostgresql />
<RiNextjsFill />
<FaNodeJs />
<SiExpress />
<SiTypescript />
  </div>
  </div>
  </>
  );
}
