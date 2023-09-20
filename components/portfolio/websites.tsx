import Link from "next/link";
import ResumeCard from "./portfolio-item-website";
import Image from "next/image";

export default function websites() {
  return (
    <div className="">
      <div className="flex flex-col gap-10 mt-10">
        <ResumeCard
          href="https://easytolove.arminvanbuuren.com/"
          headerText={"SPOTIFY PLAYLIST GENERATOR"}
          contentText={
            "A fun date night playlist generator to promote A new album release from armada music. This app was built in three weeks with the Spotify API and Next.js"
          }
          imageSrc={"EasyToLove.png"}
          company={"ARMADA MUSIC"}
          date={"2023"}
        />
        <ResumeCard
          href="https://shihjay.xyz/"
          headerText={"PATIENT OWNED HEALTH RECORDS"}
          contentText={
            "HIE of One is an open source patient-directed health information record. This progressive web app is built in Next.js and uses Web3 technology for security."
          }
          imageSrc={"hieofone.png"}
          company={"HIE OF ONE"}
          date={"2022"}
        />
        <ResumeCard
          href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1617921820829810688"
          headerText={"THE CONCH"}
          contentText={
            "A highschool entrepreneurial idea. This website allows you to build your own radio station for free! It is powered by the Spotify playback api and mux."
          }
          imageSrc={"conch.png"}
          company={"PERSONAL PROJECT"}
          date={"2021"}
        />
        <ResumeCard
          href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1532051821659734016"
          headerText={"AUTO DOCUMENT CATEGORIZER"}
          contentText={
            "An automatic categorizer which speeds up the process of categorizing documents via TF-IDF. Built for FEITH using React and a Java backend."
          }
          imageSrc={"categorizor.png"}
          company={"FEITH SYSTEMS"}
          date={"2020"}
        />
      </div>
      <div className="pt-20">
        <h1 className="text-xl text-blue-400 font-bold">MY PROCESS</h1>
        <h1 className="font-bold text-5xl">DESIGNING A WEBSITE</h1>
        <div className="flex flex-wrap justify-between items-start py-10">
          {/*
          On web, the images are on the left of the text.
        */}
          <div className="hidden md:block w-1/3 pl-4">
            <Image
              src="/images/webdesignprocess2.png"
              alt="sketch 1"
              className="pb-5"
              width={200}
              height={500}
            />
            <Image
              src="/images/webdesignprocess.png"
              alt="sketch 2"
              width={200}
              height={500}
            />
          </div>
          {/*
          On mobile, the images are placed between two sections of text.
        */}
          <div className="w-full md:w-2/3 pr-4">
            <p>Uh oh here comes a lot of text...</p>
            <p className="pt-5 text-xl">
              Ever been to a website with so many extravagant design features
              that it makes it hard to use? I design UI features that make
              websites easy to use through simplifying layouts and using rich
              colors.
            </p>
            <p className="pt-5 text-xl">
              Before I write any code, I start by drawing out my ideas. Below
              are the wireframes I drew for the website you're reading right
              now. Look to see if anything is familiar!
            </p>
            <p className="md:hidden block flex flex-row space-x-4 py-5">
              <Image
                src="/images/webdesignprocess.png"
                alt=""
                width={150}
                height={150}
              />
              <Image
                src="/images/webdesignprocess2.png"
                alt=""
                width={150}
                height={150}
              />
            </p>
            <p className="text-xl">
              These drawings allow me to do mobile-first design - a technique
              where you optimize first for mobile and then shift to websites,
              expanding the accessibility of the website.
            </p>
            <p className="pt-5 text-xl">
              I then build out these designs in code and deploy them to the web.
              My preferred framework for designing UI is tailwindcss, and my
              preferred JavaScript framework for the backend is Next.js.
              Tailwind and Next.js allow me to quickly develop websites with
              uniform designs and efficient code.
            </p>
            <p className="pt-5 text-xl">
              After I've finished the main design of the website, I focus on the
              final touches that make my websites stand out. This step includes
              bug fixes, small design tweaks, speed, and search optimization.
            </p>
          </div>
          <div className="pt-20">
            <h1 className="md:text-5xl text-2xl font-bold">
              RESULTS THAT SPEAK FOR THEMSELVES
            </h1>
            <p className="text-xl py-5">
              My design philosophy is that good design should lead to functional
              websites that are quick and accessible. My results show that this is the right approach.
            </p>
            <Image
              src={"/images/performance.png"}
              alt={"performance photo"}
              width={800}
              height={500}
            />
            <br />
            <div className="w-80">
              <Link
                href="https://pagespeed.web.dev/analysis/https-www-olivermoscow-com/48kv143pea?form_factor=desktop"
                aria-label="SEE FOR YOURSELF"
              >
                <p className="text-lg mt-5 px-4 py-2 text-black bg-blue-400 rounded-md hover:bg-blue-200">
                  SEE FOR YOURSELF
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
