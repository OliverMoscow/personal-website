import Link from "next/link";
import EmailForm from "../components/emailform";

export default function contact() {
  return (
    <div id="main" className="lg:mx-40 md:mx-20 mx-10 pb-20">
      <div className="md:my-40 my-10">
        <h1 className="md:text-7xl text-4xl font-bold pb-5">
          <p className="text-transparent md:text-8xl text-5xl  bg-clip-text bg-gradient-to-br from-yellow-300 to-blue-600">
            HELLO!
          </p>
          LET'S GET STARTED
        </h1>
        <p className="text-xl">
          Do you have an idea and want a prototype? or maybe you're looking for
          a new developer on your team? I would love to help out. Send me a
          message and we can get started.
        </p>
      </div>
      <div>
      <h1 className="text-3xl font-bold">CONTACT ME</h1>
      <EmailForm extreme={true}/>
      </div>
      <div className="my-20">
        <h1 className="text-3xl font-bold">CHECK MY UPWORK</h1>
        <p className="text-lg text-slate-500 mb-2">
          Upwork is a marketplace for freelance talent. On the platform I am top rated and
          build full-stack applications for startups and small buisnesses. Check
          out my profile to see some of the projects I've worked on. Or DM me
          and say hi.
        </p>
        <Link href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1" className="w-full">
          <button
            className="w-full text-lg font-bold px-4 py-2 text-black bg-gray-200 rounded-md hover:bg-gray-300"
            type="submit"
            aria-label="dm me"
          >
            DM ME
          </button>
        </Link>
      </div>
    </div>
  );
}
