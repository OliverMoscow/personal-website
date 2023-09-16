export default function Lessons() {
  const sendEmail = async (email: string, subject: string, message: string) => {
    const res = await fetch("/api/sendgrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, subject, message }),
    });
    if (res.status === 200) {
      alert(
        "Your message has been sent! I will get back to you as soon as possible."
      );
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  
    const email = event.target.email && event.target.email.value;
    const project = event.target.project && event.target.project.value;
    const experience = event.target.experience && event.target.experience.value;
    const name = event.target.name && event.target.name.value
  
    const subject = `Beginner Coding Lessons Request from ${name}`;
    const message = `Project: ${project} <br/> Experience: ${experience} <br/> Respond to ${email}`;
    sendEmail("omoscow15@gmail.com", subject, message);
  };
  

  return (
    <div>
      <h1 className="text-2xl mt-10 mb-3 font-bold text-purple-500">
        Beginner Coding Lessons
        <span className="my-3 text-xl text-blue-400"> | $40 an hour</span>
      </h1>
      <p>
        I am offering personalized one-on-one coding lessons. These lessons are
        project guided. The goal is to teach you the skills necessary to be able
        to code on your own.
      </p>
      <form className="flex flex-col font-bold text-blue-700 py-5" onSubmit={handleSubmit}>
        <label className="">Name</label>
        <input
          className="border-2 border-white rounded-md p-2 mb-3 bg-white bg-opacity-50"
          type="text"
          name="name"
          id="name"
          required
        />
        <label className="">Email</label>
        <input
          className="border-2 border-white rounded-md p-2 mb-3 bg-white bg-opacity-50"
          type="text"
          name="email"
          id="email"
          required
        />
        <label className="">What would you like to build?</label>
        <p className="text-slate-300 text-sm pb-2">
          Lessons are project guided. I encourage students to prepare an app or
          website idea before the first lesson.
        </p>
        <textarea
          className="border-2 border-white rounded-md p-2 mb-3 bg-white bg-opacity-50 h-[150px] focus:outline-none focus:ring-0"
          name="project"
          id="project"
          required
        ></textarea>
        <label className="">Why do you want to learn to code?</label>
        <p className="text-slate-300 text-sm pb-2"></p>
        <textarea
          className="border-2 border-white rounded-md p-2 mb-3 bg-white bg-opacity-50 h-[150px] focus:outline-none focus:ring-0"
          name="experience"
          id="experience"
          required
        ></textarea>
        <button
          className="bg-green-400 hover:bg-purple-400 font-bold  p-2 my-5 rounded-md bg-opacity-70"
          type="submit"
        >
          First Lesson 50% Off!
        </button>
      </form>
    </div>
  );
}
