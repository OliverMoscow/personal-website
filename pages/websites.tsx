import ResumeCard from "../components/card-web-resume";

export default function websites() {
  return (
    <div className="">
      <div className="mt-10 mb-5 mx-auto">
        <h1 className="text-2xl underline font-bold text-white">Full Stack Web Development</h1>
        <p className="text-lg my-2">I&apos;ve been toying with web development for 4+ years and have mastered the following languages and frameworks: </p>
        <p className="text-md italic text-slate-400">NEXT.JS, TAILWIND CSS, SPOTIFY, SIWE, FLASK, SPRINGBOOT, HTML, CSS, JAVASCRIPT, TYPESCRIPT</p>
      </div>
      <div className="mx-auto flex flex-col gap-4">
        <ResumeCard href="https://easytolove.arminvanbuuren.com/" headerText={"Spotify Playlist Generator"} contentText={"A fun date night playlist generator using the Spotify API! Click to try it out!"} imageSrc={"EasyToLove.png"} theme={"bg-pink-400"} subtheme={"bg-pink-200"}/>
        <ResumeCard href="https://shihjay.xyz/" headerText={"HIE of One"} contentText={"HIE of One is an open source patient-directed health information record. This progressive web app is built in Next.js and uses Web3 technology for security."} imageSrc={"hieofone.png"} theme={"bg-sky-400"} subtheme={"bg-sky-200"}/>
        <ResumeCard href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1532051821659734016" headerText={"Auto Document Categorizor"} contentText={"An automatic categorizor which speeds up the process of categorizing documents via TF-IDF. Built for FEITH using React and a Java backend."} imageSrc={"categorizor.png"} theme={"bg-lime-400"} subtheme={"bg-lime-200"}/>
        <ResumeCard href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1617921820829810688" headerText={"Conch.fm"} contentText={"This website allows you to build your own radio station for free! It is powered by the Spotify playback api and mux."} imageSrc={"conch.png"} theme={"bg-orange-400"} subtheme={"bg-orange-200"}/>
      </div>
    </div>
  );
}
