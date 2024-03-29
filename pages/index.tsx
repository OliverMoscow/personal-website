import Link from "next/link";
import Card from "../components/card";
import EmailForm from "../components/emailform";

export default function Home() {
  return (
    <div id="main" className="lg:mx-40 md:mx-20 mx-10 pb-20">
      <div className="md:h-[38rem] h-[30rem] flex flex-col justify-center md:w-2/3 relative overflow-hidden">
        <h1 className="md:text-7xl text-5xl font-bold relative z-10">
          LET'S BUILD SOMETHING COOL!
        </h1>
        <p className="text-xl w-[300px] md:py-10 py-4 relative z-10">
          A FULL-STACK DEVELOPER WHO BUILDS WEBSITES AND MOBILE APPS.
        </p>
        <div className="flex space-x-2 items-center relative z-10">
          <Link
            href="/contact"
            className="text-lg px-4 py-2 text-black bg-yellow-400 rounded-md hover:bg-yellow-300"
            aria-label="LET'S CHAT!"
          >
            LET'S CHAT!
          </Link>
          <Link
            href="/about"
            className="text-lg px-4 underline underline-offset-8 underline-width-2 decoration-blue-400 text-sm"
            aria-label="LEARN ABOUT ME"
          >
            LEARN ABOUT ME
          </Link>
        </div>
      </div>
      {/* Background image */}
      {/* on web */}
      <div
        className="absolute md:block hidden top-20 xl:right-20 lg:right-10 right-0 lg:w-[50%] w-[75%] h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('images/profile.jpg')" }}
      ></div>
      {/* on mobile */}
      <div
        className="absolute md:hidden block top-[400px] right-0 w-full h-full bg-contain bg-no-repeat"
        style={{ backgroundImage: "url('images/profile.jpg')" }}
      ></div>

      <div id="portfolio" className="pb-4 md:pt-4 pt-[175px]">
        {/* <h1 className="text-slate-500 text-xl font-bold pb-2">EXPLORE MY PORTFOLIO</h1> */}
        <div className="relative pb-20">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Card
              href="/portfolio?tab=websites"
              headerText="WEBSITES"
              contentText="Custom full-stack websites with clean designs and efficient backends."
            />
            <Card
              href="/portfolio?tab=ios"
              headerText="APPS"
              contentText="Feature complete IOS applications with superb UI."
            />
            <Card
              href="/portfolio?tab=opensource"
              headerText="AND MORE!"
              contentText="Open source development of new technologies."
            />
          </div>
          {/* <div className="absolute bottom-0 right-0 flex items-end">
            <img src="/images/arrow4.png" width={"75px"} className="" />
            <p className="mr-2 text-amber-500 font-bold">CLICK ME!!</p>
          </div> */}
        </div>
      </div>
      <div className="pb-20">
        <h1 className="text-xl text-blue-400 font-bold">ABOUT ME</h1>
        <p className="text-3xl py-3">I CRAFT EXPERIENCES THAT SOLVE PROBLEMS</p>
        <p>
          The best feeling is overcoming a hard challenge. Growing up in
          Philadelphia, I spent hours immersed in the process of developing and
          designing software. Today, I'm pursuing computer science at Colorado
          College and devoting my free time to coding for startups and small
          businesses. I firmly believe the most valuable projects are those that
          can make meaningful change.
        </p>
        <Link
          href="/about"
          className="pt-3 text-xs text-slate-400 underline underline-offset-8 underline-width-2 hover:text-blue-400"
        >
          KEEP READING
        </Link>
      </div>
      {/* 
      <div>
        <h1 className="text-xl text-blue-400 font-bold">CONTACT ME</h1>
        <EmailForm extreme={false} />
      </div> */}
    </div>
  );
}
