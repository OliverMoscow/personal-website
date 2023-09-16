import ResumeCard from "./portfolio-item-app";

export default function websites() {
  return (
    <div className="">
      <div className="flex flex-col gap-4 mt-10">
      <ResumeCard
          href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?s=996364627857502209&p=1703109694220582912"
          headerText={"SEE MEDS"}
          contentText={
            "A medicine reminder app built in Swift with user notifications, user accounts, and firebase backend. This app is available on the Apple App Store."
          }
          imageSrc={"seeMeds.png"}
          company={"FREELANCE CLIENT"}
          date={"2023"}
        />
        <ResumeCard
          href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?s=996364627857502209&p=1532036723864760320"
          headerText={"FEITH MOBILE APP"}
          contentText={
            "A professional quality IOS app that incorporated the main features of Feith System's web app including user authentication, pdf viewing, in depth document search, and document managment."
          }
          imageSrc={"feithMobile.png"}
          company={"FEITH SYSTEMS"}
          date={"2021"}
        />
        <ResumeCard
          href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?s=996364627857502209&p=1532039553843273728"
          headerText={"LISTNR"}
          contentText={
            "A highschool entrepreneurial idea. This app allows teenagers to share mini podcasts. It uses AVFoundation and Firebase."
          }
          imageSrc={"listnr.png"}
          company={"PERSONAL PROJECT"}
          date={"2021"}
        />
      </div>
    </div>
  );
}
