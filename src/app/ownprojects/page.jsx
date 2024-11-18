import Image from "next/image";

export default function PersonalProjects() {
    return (
        <>
            <div className="bg-gray-100 p-8 min-h-screen flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">PERSONAL PROJECTS</h1>

                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">
                    While I was on the course, I tried to keep on top of what I&apos;ve learned by developing a couple of side projects.
                </p>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nexus Decks</h2>
                    <h3 className="text-lg text-gray-600 italic mb-4">Basic HTML & CSS</h3>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">
                        A trading card game website that caters towards Magic: The Gathering and Yu-Gi-Oh. It covers all news across the games and includes their own respective websites and deck builders. 
                        I used some of my code from my week 1 project and implemented it into this website, added and improved upon more things. 
                        Further down the line, I want to add a database that features all cards across the games and add the prices of the individual cards. 
                        I would also like to build my own custom deck builder.
                    </p>
                    <a href="https://lewis-allen-2001.github.io/NexusDecks/" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/ND.PNG" 
                            alt="Nexus Decks" 
                            width={500} 
                            height={500} 
                            className="rounded-lg shadow-lg hover:scale-105 transition-transform mx-auto"
                        />
                    </a>
                    <div className="mt-4">
                        <a 
                            href="https://github.com/Lewis-Allen-2001/NexusDecks" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            View code on GitHub
                        </a>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Task Tracker</h2>
                    <h3 className="text-lg text-gray-600 italic mb-4">JavaScript</h3>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">
                        A task tracking web app with a timer feature. Simply add a title for your list of tasks and how long you would like for those tasks. 
                        There is an add task button so you can add tasks to the list you have created! 
                        There&apos;s also stop and start buttons so you can pause the timer whenever. 
                        Additionally, there is local storage so the lists you&apos;ve created will still be there for when you load it up next time!
                    </p>
                    <a href="https://lewis-allen-2001.github.io/Task-Tracker/" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/TT.PNG" 
                            alt="Task Tracker" 
                            width={500} 
                            height={500} 
                            className="rounded-lg shadow-lg hover:scale-105 transition-transform mx-auto"
                        />
                    </a>
                    <div className="mt-4">
                        <a 
                            href="https://github.com/Lewis-Allen-2001/Task-Tracker" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            View code on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
