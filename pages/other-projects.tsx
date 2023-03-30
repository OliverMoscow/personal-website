import Link from "next/link";
import Card from "../components/card";

export default function OtherProjects() {
    return(
        <>
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <Card href="https://github.com/OliverMoscow" headerText={"Github"} contentText={"I am an open source developer with over 250 yearly contributions! Check out my github to see more projects."}></Card>
            <Card href="https://www.upwork.com/freelancers/~01f1aad6eae6cda2b1" headerText={"Upwork"} contentText={"I am 5 star rated on Upwork! Check out my Upwork profile and hire me there."}></Card>
        </div>
        </>
    )
}