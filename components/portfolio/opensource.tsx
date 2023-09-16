import ResumeCard from "./portfolio-item-website";

export default function opensource() {
  return (
    <div className="">
      <div className="flex flex-col gap-4 mt-10">
        <ResumeCard href="https://github.com/HIEofOne/Trustee-Community" headerText={"PATIENT OWNED HEALTH RECORDS"} contentText={"HIE of One is an open source patient-directed health information record. This progressive web app is built in Next.js and uses Web3 technology for security."} imageSrc={"hieofone.png"} company={"HIE OF ONE"} date={"2022"}/>
      </div>
    </div>
  );
}
