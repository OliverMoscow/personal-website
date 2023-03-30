import "../styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import BallsBackground from "../components/bouncing-balls";
import BallsInteractiveBackground from "../components/bouncing-balls-interactive";
import { Analytics } from "@vercel/analytics/react";

const font = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Navbar>
        <BallsBackground />
        <Component {...pageProps} />
        <Analytics />
      </Navbar>
    </main>
  );
}
