import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-center space-x-8 p-4  bg-gray-900 text-white">

      <Link href="/" className=" font-bold hover:underline">Home</Link>

      <Link href="/tech-ed" className=" font-bold hover:underline">Tech Educators</Link>

      <Link href="/ownprojects" className=" font-bold hover:underline">Personal Projects</Link>

      <Link href="/about" className=" font-bold hover:underline">About Me</Link>
    </div>
  );
}

