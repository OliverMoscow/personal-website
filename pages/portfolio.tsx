import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Websites from "../components/portfolio/websites";
import Apps from "../components/portfolio/apps";
import OpenSource from "../components/portfolio/opensource";
import Link from "next/link";

export default function Portfolio() {
  const router = useRouter();
  const { tab } = router.query;

  const [activeTab, setActiveTab] = useState(tab || "websites");
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  useEffect(() => {
    if (tab) {
      setActiveTab(tab.toString());
    }
  }, [tab]);

  const handleTabClick = (tab: string, index: number) => {
    setActiveTab(tab);
    setIndicatorPosition(index * 115); // Adjust based on your button width
    // router.push(`/portfolio/?tab=${tab}`);
  };

  return (
    <div id="main" className="lg:mx-40 md:mx-20 mx-10">
      <div className="md:my-40 my-10">
        <h1 className="md:text-7xl text-4xl font-bold pb-5">
          EXPLORE MY
          <p className="text-transparent md:text-8xl text-5xl  bg-clip-text bg-gradient-to-br from-yellow-300 to-blue-600">
            PORTFOLIO
          </p>
        </h1>
        <p className="text-xl">
          Each project has helped me refine my skills and expand my knowledge of
          web and mobile development. A project typically takes 40 to 60 hours
          to complete. I put meticulous attention to detail into each project so
          that it is not only functional but also elegant. I hope to expand this
          page and continue to work on exciting new projects.
        </p>
      </div>
      <div className="w-max">
        <div className="flex space-x-4 p-2 rounded-lg bg-slate-900">
          <button
            onClick={() => handleTabClick("websites", 0)}
            className={`md:text-xl font-bold ${
              activeTab === "websites" ? "text-blue-400" : "text-gray-400"
            } transition duration-300 ease-in-out`}
            aria-label="tab button"
          >
            WEBSITES
          </button>
          <button
            onClick={() => handleTabClick("ios", 1)}
            className={`md:text-xl font-bold ${
              activeTab === "ios" ? "text-blue-400" : "text-gray-400"
            } transition duration-300 ease-in-out`}
            aria-label="tab button"
          >
            IOS APPS
          </button>
          <button
            onClick={() => handleTabClick("opensource", 2)}
            className={`md:text-xl font-bold ${
              activeTab === "opensource" ? "text-blue-400" : "text-gray-400"
            } transition duration-300 ease-in-out`}
            aria-label="tab button"
          >
            OPEN SOURCE
          </button>
          {/* You can add more buttons here */}
        </div>
        {/* Sliding indicator */}
        <div
          className="md:w-[100px] w-[50px] mt-4 h-1 ml-2 rounded-full bg-slate-900"
          style={{
            transform: `translateX(${indicatorPosition}px) translateY(-10px)`,
            transition: "transform 0.3s ease-in-out",
          }}
        ></div>
      </div>
      {/* Render your projects based on the activeTab */}
      <div className="pt-1">
        {activeTab === "websites" && <Websites />}
        {activeTab === "ios" && <Apps />}
        {activeTab === "opensource" && <OpenSource />}
        {/* Add more project sections for other tabs */}
      </div>

      <div id="more" className="pt-20 pb-20 md:w-80">
        <h1 className="text-xl text-blue-400 font-bold pb-4">
          WANT TO LEARN MORE?
        </h1>
        <Link href="/about">
          <p className="text-lg px-4 py-2 text-white bg-slate-700 rounded-md hover:bg-slate-600">
            ABOUT ME
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
}
