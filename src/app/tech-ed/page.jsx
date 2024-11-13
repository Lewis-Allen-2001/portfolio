import Image from "next/image"

export default function TechEducators() {
    return (
        <>
            <div className="bg-gray-100 p-8 min-h-screen flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">My Time With Tech Educators</h1>

                <a href="https://techeducators.co.uk/" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"> 
                <Image src="/teched.webp"
                        width={150}
                        height={150}
                        alt="Tech Educators"
                        className="rounded-full mb-6 shadow-2xl"
                />
                </a>

                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-4">
                    From day one, Tech Educators provided a supportive environment where challenges were met with guidance, and mistakes were embraced as part of the learning process. The curriculum was intense, covering everything from foundational coding principles to building complex applications using modern tech stacks like Next.js, PostgreSQL, and Tailwind CSS. What really stood out to me was the practical, hands-on approach—they ensured we weren’t just learning theory but applying it in real projects.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-4">
                    The course went by in a blur, filled with late nights, countless “aha!” moments, and a few roadblocks along the way. One of the best parts was working alongside classmates who were as passionate and driven as I was. We pushed each other to improve every day, and I can’t thank them enough for the camaraderie and support.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">
                    Although the course is officially over, my journey is far from complete. There’s so much more to explore and master in the tech world, and I’m excited to dive even deeper. Thank you, Tech Educators, for setting me up with such a strong foundation. Here’s to the road ahead and all the new challenges waiting just around the corner!
                </p>

                <div className="w-full max-w-3xl text-left mt-8">
                    <h2 className=" text-center text-3xl font-semibold text-gray-800 mb-4">Tech Ed Projects</h2>
                    <h3 className="text-center text-xl text-gray-700 mb-6">
                        Here you can see my skills grow and progress as the weeks go by.
                    </h3>

                    <ul className="space-y-2">
                        <li>
                            <a href="https://lewis-allen-2001.github.io/Week1-Project/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 1: Space Website (Basic HTML and CSS)
                            </a>
                        </li>
                        <li>
                            <a href="https://lewis-allen-2001.github.io/Week2-Project/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 2: Accessible Image Gallery (Basic JavaScript, HTML and CSS)
                            </a>
                        </li>
                        <li>
                            <a href="https://lewis-allen-2001.github.io/Week3-Project/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 3: Cookie Clicker using JavaScript (JavaScript, use of APIs and DOM Manipulation)
                            </a>
                        </li>
                        <li>
                            <a href="https://week4-project-static.onrender.com/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 4: Full-Stack Guestbook (SQL, express, use of render and mono repos)
                            </a>
                        </li>
                        <li>
                            <a href="https://week-05-project-1.onrender.com/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 5: Project Week (Working in a team, git version control, and mono repo)
                            </a>
                        </li>
                        <li>
                            <a href="https://week6-project-4g8v.onrender.com/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 6: Cookie Clicker Using React (Using React, APIs, .map functions, useEFFECT and useState)
                            </a>
                        </li>
                        <li>
                            <a href="https://week7-project-client-r6wk.onrender.com/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 7: Full Stack react and express app (PostgreSQL, nodejs, react forms, react router, relational database and express)
                            </a>
                        </li>
                        <li>
                            <a href="https://fakebook-lewis-projects-4c4bcd87.vercel.app/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 8: Comment form (Next.js, query strings, routing, redirecting, revalidatePath and DELETE HTTP Method)
                            </a>
                        </li>
                        <li>
                            <a href="https://friendface-ruby.vercel.app/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 9: Social Media App (Next.js, user auth using clerk, routing, error handling and radix ui)
                            </a>
                        </li>
                        <li className="text-gray-500 italic">
                            Week 10 was a Research and presentation week, unfortunately I don&apos;t have the recordings for it so you&apos;ll just have to believe me 😅.
                        </li>
                        <li>
                            <a href="https://didit-reddit-upvote-example-amber.vercel.app/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 11: Joining an existing project (Fixing bugs in an existing codebase and deploying it to vercel)
                            </a>
                        </li>
                        <li>
                            <a href="https://find-it-faster.vercel.app/" className="text-blue-600 hover:text-blue-800 underline">
                                Week 12: Final Project (Working in a team, Next.js, TypeScript, PostgreSQL, user auth using clerk, search params, sorting, filtering, dynamic routes, APIs, user onboarding and comment form)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
