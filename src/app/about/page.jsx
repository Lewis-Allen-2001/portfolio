export default function About() {
    return (
        <>
            <div className="bg-gray-100 p-8 min-h-screen flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">ABOUT ME</h1>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                    I am a new software developer who has recently completed a 12-week intensive software development bootcamp with Tech Educators. During this program, I gained hands-on experience with modern web development technologies, including React, Next.js, Tailwind CSS, and Vite. Additionally, I developed skills in TypeScript, PostgreSQL, JavaScript, and Node.js. My strong problem-solving abilities, adaptability, and collaborative spirit make me a valuable asset to any development team.
                </p>
                
                <div className="mt-8 w-full max-w-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mt-6">HOBBIES:</h2>
                    <ul className="text-gray-700 mt-4 space-y-2">
                        <li>Video Games</li>
                        <li>Music</li>
                        <li>Trading Card Games (YuGiOh, Magic: The Gathering, Pokemon)</li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold text-gray-800 mt-6">LIKES:</h2>
                    <ul className="text-gray-700 mt-4 space-y-2">
                        <li>Cats and Dogs</li>
                        <li>Sushi</li>
                        <li>Whiskey and Rum</li>
                        <li>Sheffield Wednesday UTO!</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
