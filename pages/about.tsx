import Link from "next/link";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div id="main" className="lg:mx-40 md:mx-20 mx-10">
      <div className="md:my-40 my-10">
        <h1 className="md:text-7xl text-4xl font-bold pb-5">
          HI, I'M
          <p className="text-transparent md:text-8xl text-5xl bg-clip-text bg-gradient-to-br from-yellow-300 to-blue-600">
            OLIVER!
          </p>
        </h1>
        <p className="text-xl">
          and I have a passion for coding and UX design! I have spent the past
          5+ years building mobile and web applications for companies and
          freelance customers. In addition to coding, I also love skiing and
          backpacking. I am currently studying computer science and music at
          Colorado College.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 py-10">
          <h1 className="text-xl text-blue-400 font-bold pb-4">
            LANGUAGES AND LIBRARIES
          </h1>
          <ul className="text-3xl">
            <p>NEXT JS</p>
            <p>TAILWINDCSS</p>
            <p>TYPESCRIPT</p>
            <p>REACT</p>
            <p>SWIFT</p>
            <p>SPOTIFY API</p>
            <p>FIREBASE</p>
            <p>PYTHON</p>
            <p>FLASK</p>
            <p>JAVA</p>
            <p>SPRINGBOOT</p>
            <p className="text-slate-500">AND MORE...</p>
          </ul>
        </div>

        <div className="md:w-1/2 py-10">
          <h1 className="text-xl text-blue-400 font-bold">TESTIMONIALS</h1>
          <div className="py-5">
            <p className="text-xl text-slate-500 mb-2">
              "I am extremely pleased with Oliver's work on my mobile app
              project. He went above and beyond to make sure that all my
              requests for the project were addressed timely. Oliver was able to
              complete the project on schedule and to my satisfaction. I will
              definitely use Oliver again for future projects." - Talitha Humes
            </p>
          </div>
          <div>
            <p className="text-xl text-slate-500 mb-2">
              "Oliver did great work for us! He had a clear understanding of the
              project he took on and worked with us step by step to make sure we
              got the exact product we were looking for. He made himself
              available for ample edits, always responded quickly, and met our
              deadlines with ease. Would definitely hire him again!" - Jennifer
              Goodwin
            </p>
          </div>
        </div>
      </div>

      <div id="work-experience" className="py-10">
        <h1 className="text-xl text-blue-400 font-bold pb-4">
          WORK EXPERIENCE
        </h1>
        <div className="mb-5">
          <p className="text-slate-300">November 2022 - Present</p>
          <h1 className="text-3xl font-bold">UPWORK</h1>
          <p className="text-2xl">FREELANCE DEVELOPER</p>
          <p className="text-lg text-slate-500 mb-2">
            A marketplace for freelance talent. On the platform I am top rated
            and build full-stack applications for startups and small businesses.
            Check out my profile to see some of the projects I've worked on.
          </p>
          <Link
            href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1"
            className="text-xs text-slate-500 underline underline-offset-8 underline-width-2 hover:text-blue-400"
          >
            <p>LEARN MORE</p>
          </Link>
        </div>
        <div className="mb-5">
          <p className="text-slate-300">November 2021 - Present</p>
          <h1 className="text-3xl font-bold">HIE OF ONE</h1>
          <p className="text-2xl">FULL-STACK DEVELOPER</p>
          <p className="text-lg text-slate-500 mb-2">
            An open-source startup pioneering patient owned electronic health
            records. I am deeply involved in the design, development, and
            maintenance of the code base.
          </p>
          <Link
            href="https://hieofone.com/"
            className="text-xs text-slate-500 underline underline-offset-8 underline-width-2 hover:text-blue-400"
          >
            <p>LEARN MORE</p>
          </Link>
        </div>
        <div>
          <p className="text-slate-300">July 2020 - August 2021</p>
          <h1 className="text-3xl font-bold">FEITH SYSTEMS AND SERVICES</h1>
          <p className="text-2xl">PAID INTERN</p>
          <p className="text-lg text-slate-500 mb-2">
            A database management company founded in 1979 that sells software to
            the US government and other large customers. I worked in research
            and development and built demos using ML and TF-IDF.
          </p>
          <Link
            href="https://www.feith.com/"
            className="text-xs text-slate-500 underline underline-offset-8 underline-width-2 hover:text-blue-400"
          >
            <p>LEARN MORE</p>
          </Link>
        </div>
      </div>

      <div id="portfolio" className="pt-10 pb-20 md:w-80">
        <h1 className="text-xl text-blue-400 font-bold pb-4">
          WANT TO LEARN MORE?
        </h1>
        <Link href="/portfolio">
          <p className="text-lg px-4 py-2 text-white bg-slate-700 rounded-md hover:bg-slate-600">
            EXPLORE MY PORTFOLIO
          </p>
        </Link>
        <Link href="https://github.com/OliverMoscow">
          <p className="text-lg mt-5 px-4 py-2 text-black bg-slate-400 rounded-md hover:bg-slate-200">
            SEE MY GITHUB
          </p>
        </Link>
        <Link href="/contact">
          <p className="text-lg mt-5 px-4 py-2 text-black bg-slate-400 rounded-md hover:bg-slate-200">
            CONTACT ME
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
