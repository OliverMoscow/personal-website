import ResumeCard from "./portfolio-item-website";

export default function websites() {
  return (
    <div className="">
      <div className="flex flex-col gap-4 mt-10">
        <ResumeCard href="https://easytolove.arminvanbuuren.com/" headerText={"SPOTIFY PLAYLIST GENERATOR"} contentText={"A fun date night playlist generator to premote A new album release from armada music. This app was built in three weeks with the Spotify API and Next.js"} imageSrc={"EasyToLove.png"} company={"ARMADA MUSIC"} date={"2023"}/>
        <ResumeCard href="https://shihjay.xyz/" headerText={"PATIENT OWNED HEALTH RECORDS"} contentText={"HIE of One is an open source patient-directed health information record. This progressive web app is built in Next.js and uses Web3 technology for security."} imageSrc={"hieofone.png"} company={"HIE OF ONE"} date={"2022"}/>
        <ResumeCard href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1617921820829810688" headerText={"Conch.fm"} contentText={"A highschool entrepreneurial idea. This website allows you to build your own radio station for free! It is powered by the Spotify playback api and mux."} imageSrc={"conch.png"} company={"PERSONAL PROJECT"} date={"2021"}/>
        <ResumeCard href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1532051821659734016" headerText={"Auto Document Categorizor"} contentText={"An automatic categorizor which speeds up the process of categorizing documents via TF-IDF. Built for FEITH using React and a Java backend."} imageSrc={"categorizor.png"} company={"FEITH SYSTEMS"} date={"2020"}/>
      </div>
    </div>
  );
}
