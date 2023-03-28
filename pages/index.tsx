import Link from "next/link";
import Card from "../components/card";

export default function HireMe() {
  return (
    <div className="md:mt-10 mt-5">
      <div className="mb-5 text-slate-200">
          <h1 className="text-2xl font-semibold underline">My Portfolio</h1>
          {/* <p className="text-pink-400">Click to add a ball</p> */}
        </div>
      <div className="relative pb-20">
        {/* <h1 className="text-2xl font-semibold text-slate-200 mb-5 underline">
            Portfolio
          </h1> */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Card
            href="/websites"
            headerText="Websites"
            contentText="Front-end, Back-end, Spotify, Flask, SpringBoot, Next.js, CouchDB, Tailwind"
          />
          <Card
            href="/apps"
            headerText="Mobile Apps"
            contentText="IOS, Android, Swift, SwiftUI, React Native, Firebase, UIKIT"
          />
          <Card
            href="/other-projects"
            headerText="And More!"
            contentText="Web3, Machine Learning, Game Development, Java, Python, C++, Solidity"
          />
        </div>
        <div className="absolute bottom-0 right-0 flex items-end">
          <img src="/images/arrow4.png" width={"75px"} className="" />
          <p className="mr-2 text-amber-500 font-bold">CLICK ME!!</p>
        </div>
      </div>
      <div className="">
        <div className="mb-5 text-slate-200">
          <h1 className="text-2xl font-semibold underline">Howdy!</h1>
          {/* <p className="text-pink-400">Click to add a ball</p> */}
        </div>
        <div className="p-5 mb-5 inverted border border-gray-300 rounded-lg">
          <p className="text-md">
            My name is <span className="text-green-600 font-bold">Oliver</span>.
            I have an{" "}
            <span className="text-emerald-400 font-bold">passion</span> for{" "}
            <span className="text-teal-500 font-bold">coding</span> and{" "}
            <span className="text-cyan-400 font-bold">UX design</span>! I have
            spent the past <span className="text-sky-400 font-bold">4+ </span>
            years <span className="text-violet-400 font-bold">
              building
            </span>{" "}
            mobile and web{" "}
            <span className="text-fuchsia-300 font-bold">applications</span> for{" "}
            <span className="text-pink-600 font-bold">companies</span> and{" "}
            <span className="text-rose-600 font-bold">freelance</span>{" "}
            customers. As a{" "}
            <span className="text-orange-400 font-bold">student</span> studying
            computer science at{" "}
            <span className="text-yellow-400 font-bold">Colorado College</span>,
            I spend my{" "}
            <span className="text-lime-600 font-bold">free time</span> writing{" "}
            <span className="text-green-600 font-bold">code</span>. I{" "}
            <span className="text-emerald-400 font-bold">specialize</span> in{" "}
            <span className="text-teal-400 font-bold">native IOS</span>{" "}
            development with a broad{" "}
            <span className="text-cyan-400 font-bold">range</span> of skills
            across <span className="text-blue-400 font-bold">many</span>{" "}
            different{" "}
            <span className="text-purple-700 font-bold">languages</span> and
            frameworks. I love{" "}
            <span className="text-pink-600 font-bold">learning</span> about{" "}
            <span className="text-red-400 font-bold">new technologies!</span> I
            want to build{" "}
            <span className="text-green-600 font-bold">open source</span>{" "}
            solutions for a{" "}
            <span className="text-sky-600 font-bold">better world</span>.
          </p>
        </div>
        <Link href="/hire">
          <button className="m-2 text-lg px-4 py-2 rounded-full outline outline-[2px] outline-blue-800 text-black drop-shadow-lg bg-blue-400 hover:bg-orange-300 hover:outline-orange-800 bg-opacity-70">
            Hire Me!
          </button>
        </Link>
        <Link href="/lessons">
          <button className="m-2 text-lg px-4 py-2 rounded-full outline outline-[2px] outline-green-800 text-black drop-shadow-lg bg-green-400 hover:bg-purple-300 hover:outline-purple-800 bg-opacity-70">
            Learn To Code!
          </button>
        </Link>
      </div>
      <div className="my-10">
        <div className="mb-5 text-slate-200">
          <h1 className="text-2xl font-semibold underline">Work Experience</h1>
        </div>
        <ul>
          <li className="mb-5">
            <h1 className="text-purple-400 font-bold">Software Engineer | HIE of One</h1>
            <p className="text-slate-300">November 2021 - Present</p>
          </li>
          <li>
            <h1 className="text-green-400 font-bold">Intern | FEITH SYSTEMS AND SERVICES</h1>
            <p className="text-slate-300">July 2020 - August 2021</p>
          </li>
        </ul>
      </div>
      <div className="text-pink-300 pb-10">Have a wonderful day!</div>
    </div>
  );
}
