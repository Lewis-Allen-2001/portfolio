import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex items-center justify-center py-4">
      <Link
        href="/"
        className=" text-lg px-4"
      >
        Home
      </Link>
      <Link
        href="/tech-ed"
        className=" text-lg  px-4"
      >
        Tech Educators
      </Link>
      <Link
        href="/ownprojects"
        className=" text-lg  px-4"
      >
        Personal Projects
      </Link>
      <Link
        href="/about"
        className=" text-lg  px-4"
      >
        About Me
      </Link>
    </div>
  );
}
