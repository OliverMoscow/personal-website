import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";

type HomeProps = {};

const Hire: React.FC<HomeProps> = () => {
  return (
    <div>
      <h1 className="text-2xl mt-10 mb-3 font-semibold text-pink-400">You can hire Me!</h1>
      <p className="font-medium">Reach out at: omoscow15@gmail.com</p>
    </div>
  )
};

export default Hire;
