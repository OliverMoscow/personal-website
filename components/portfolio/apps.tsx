import ResumeCard from "./portfolio-item-app";
import ResumeCard2 from "./portfolio-item-website";

export default function websites() {
  return (
    <div className="">
      <div className="flex flex-col gap-4 mt-10">
      <ResumeCard2
          href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1728547444342063104"
          headerText={"ELITE Budgeting App"}
          contentText={
            "This sleek and minimalist budget app is redefining personal finance. Built with SwiftUI, This app includes auto-renewing subscriptions and ads."
          }
          imageSrc={"EliteMockup.png"}
          company={"ELITE"}
          date={"2023"}
        />
      <ResumeCard2
          href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1728554119506939904"
          headerText={"College Social App"}
          contentText={
            "This MVP IOS app allows Rubi to share their collage social app with real users quickly. It incorporates a Firebase backend and a SwiftUI frontend."
          }
          imageSrc={"RubiMockup.png"}
          company={"Rubi"}
          date={"2023"}
        />
        <p>Some Older Apps</p>
      <ResumeCard
          href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?s=996364627857502209&p=1703109694220582912"
          headerText={"SEE MEDS"}
          contentText={
            "A medicine reminder app built in Swift with user notifications, user accounts, and Firebase backend. This app is available on the Apple App Store."
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
            "A high school entrepreneurial idea. This app allows teenagers to share mini podcasts. It uses AVFoundation and Firebase."
          }
          imageSrc={"listnr.png"}
          company={"PERSONAL PROJECT"}
          date={"2021"}
        />
      </div>
    </div>
  );
}
