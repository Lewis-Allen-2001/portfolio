import Link from "next/link"

export default function NavBar(){
    return(
        <>
        <div>
            <Link href="/">Home</Link>
            <Link href="/tech-ed">Tech Educators</Link>
            <Link href="/ownprojects">Personal Projects</Link>
            <Link href="/about">About Me</Link>
        </div>
        </>
    )
}