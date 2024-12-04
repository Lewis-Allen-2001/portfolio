import { connect } from "@/app/utils/connect";
import { redirect } from "next/navigation";

export default async function Feedback() {
  const db = connect();

  const feedback = await db.query("SELECT * FROM feedback");

  async function handleCreateFeedback(formData) {
    "use server";

    const db = connect();

    const username = formData.get("username");
    const topic = formData.get("topic");
    const givenFeedback = formData.get("feedback");

    await db.query(
      "INSERT INTO feedback (username, topic, feedback) VALUES ($1, $2, $3)",
      [username, topic, givenFeedback]
    );

    redirect("/feedback");
  }

  return (
    <>
      <div className="flex flex-col items-center py-10 px-4 bg-gray-900 text-white min-h-screen space-y-8">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-blue-400">
          Leave Some Feedback!
        </h1>
        <h3 className="text-lg text-center text-gray-300 max-w-2xl">
          Giving me feedback on my work can help me out greatly and make me
          better at what I love to do!
        </h3>

        {/* Feedback Form */}
        <form
          action={handleCreateFeedback}
          className="flex flex-col space-y-4 w-full max-w-lg"
        >
          <textarea
            name="username"
            placeholder="Username"
            className="p-3 rounded-md border-2 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="topic"
            placeholder="Topic of feedback"
            className="p-3 rounded-md border-2 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="feedback"
            placeholder="Feedback"
            className="p-3 rounded-md border-2 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* Feedback Section */}
        <h3 className="text-2xl font-semibold text-blue-400">Feedback</h3>
        <div className="flex flex-col space-y-4 w-full max-w-2xl">
          {feedback.rows.map((fb, index) => {
            return (
              <div
                key={fb.id || index}
                className="p-4 rounded-md bg-gray-800 border border-gray-700 shadow-md"
              >
                <h3 className="text-lg font-bold text-blue-400">
                  {fb.username}
                </h3>
                <h4 className="text-gray-300">{fb.topic}</h4>
                <p className="text-gray-400">{fb.feedback}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
