import "@radix-ui/themes/styles.css";
import { Theme, Badge } from "@radix-ui/themes";
import Image from "next/image";

export default async function ownProjects() {
    return (
      <>
      <Theme>
      <div className="bg-gray-100 p-8 min-h-screen flex flex-col items-center text-center">
                 <h1 className="text-4xl font-bold text-gray-800 mb-6">PERSONAL PROJECTS</h1>
 
                 <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">
                     Here are some of the projects I&apos;ve worked on in my free time. I enjoy building web applications that are fun, interactive, and useful.
                     I&apos;m always looking for new ideas and challenges to tackle, so feel free to reach out if you have any suggestions or collaboration opportunities😊.
                 </p>

                 <div>
                 <h2 className="text-2xl font-semibold text-gray-800 mb-4 p-4">Diverse Destinations</h2>
                 <h3 className="text-lg text-gray-600 italic mb-4">Customer rating app dedicated to neurodivergent and disabled people</h3>
                 <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">
                 a project dedicated to exploring the world&apos;s most diverse and inclusive travel destinations. This platform is specifically designed with neurodivergent individuals and people with disabilities in mind, providing valuable insights into travel locations that prioritize accessibility, comfort, and unique experiences tailored to diverse needs. Whether you&apos;re planning your next trip or simply exploring new destinations.
                     </p>

                     <a href="https://github.com/Lewis-Allen-2001/diverse-destinations" target="_blank" rel="noopener noreferrer">
                         <Image 
                             src="/ddsc.png" 
                             alt="diverse destinations" 
                             width={500} 
                             height={500} 
                             className="rounded-lg shadow-lg hover:scale-105 transition-transform mx-auto"
                         />
                     </a>
                     <h3 className="text-gray-600 font-bold mb-1">Completion: </h3>
	                 <Badge color="yellow" size="3">In development</Badge>
 
                 <div className="mb-12">
                     <h2 className="text-2xl font-semibold text-gray-800 mb-4 p-3">Nexus Decks</h2>
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
                         <h3 className="text-gray-600 font-bold mb-1">Completion: </h3>
                         <Badge color="green" size="3">Complete</Badge>
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
                         <h3 className="text-gray-600 font-bold mb-1">Completion: </h3>
                         <Badge color="green" size="3">Complete</Badge>
                     </div>
                     <div>
                     <h2 className="text-2xl font-semibold text-gray-800 mb-4 p-4">Black ops 3 zombies map picker</h2>
                     <h3 className="text-lg text-gray-600 italic mb-4">JavaScript, Npm Packages</h3>
                     <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">
                     A dynamic web application built with Next.js that helps players randomly select a Call of Duty: Black Ops 3 Zombies map to play.
                     The project features an intuitive interface, seamless map selection. 
                     By integrating the react-roulette-pro npm package, the app offers a fun, roulette-style randomizer for picking maps, enhancing the spontaneity and excitement for players.
                      This tool showcases my skills in React, Next.js, and responsive design.
                     </p>
                     <a href="https://bo3-zombies-map-picker-lewis-projects-4c4bcd87.vercel.app/" target="_blank" rel="noopener noreferrer">
                         <Image 
                             src="/bo3rmp.png" 
                             alt="Black Ops 3 Zombies Random Map Picker" 
                             width={500} 
                             height={500} 
                             className="rounded-lg shadow-lg hover:scale-105 transition-transform mx-auto"
                         />
                     </a>
                     <div className="mt-4">
                         <a 
                             href="https://github.com/Lewis-Allen-2001/bo3-zombies-map-picker" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 underline"
                         >
                             View code on GitHub
                         </a>
                         <h3 className="text-gray-600 font-bold mb-1">Completion: </h3>
                         <Badge color="yellow" size="3">In development</Badge>
                           </div>
                          </div>
                      </div>
                 </div>
             </div>
              </Theme>
      </>
    )};