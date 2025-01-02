import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <> 
      <div className="text-center py-6 bg-black">

        <h1 className="text-2xl font-semibold mb-4 text-white">Follow my journey!</h1>

        <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/Lewis-Allen-2001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-gray-500 transition-colors"
          >
            <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/lewis-allen-277321324/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-700 transition-colors"
          >
            <FaLinkedin />
        </a>
        <p className="text-white text-xl">©Lewis Allen 2025</p>
        </div>
      </div>
    </>
  );
}