import Card from "../components/card-mobile-resume";

export default function apps() {
  return (
    <div className="">
      <div className="mt-10 mb-5 mx-auto">
        <h1 className="text-2xl underline font-bold text-white">End-to-end Mobile Development</h1>
        <p className="text-lg my-2">I&apos;ve been building mobile apps for over 4 years! My experties are in native IOS development. </p>
        <p className="text-md italic text-slate-400">SWIFT, SWIFTUI, REACT NATIVE, FIREBSE, UIKIT</p>
      </div>
      <div className="mx-auto flex flex-wrap gap-4">
        <Card href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1532049353341923328" headerText={"GoGirl!"} contentText={"This Ride Share app hopes to establish a safe system of ride sharing for women. All the drivers and passengers are women."} imageSrc={"gogirl.png"} theme={"bg-orange-400"} subtheme={"bg-orange-200"}/>
        <Card href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1532036723864760320" headerText={"Feith Systems Mobile App"} contentText={"This IOS app incoporates all the functionality of Feith's website into app form with Swift."} imageSrc={"feith mobile.png"} theme={"bg-emerald-400"} subtheme={"bg-emerald-200"}/>
        <Card href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1?p=1532039553843273728" headerText={"Listenr"} contentText={"This social media app allows users to record short mini podcasts and share them with friends and followers. It is built in Swift with UIKit."} imageSrc={"listnr.png"} theme={"bg-violet-400"} subtheme={"bg-violet-200"}/>
      </div>
    </div>
  );
}
