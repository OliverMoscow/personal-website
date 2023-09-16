import "../styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { Analytics } from "@vercel/analytics/react";

const font = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={font.className}>
      <Navbar />
      <Component {...pageProps} />
        <Analytics />
    </main>
  );
}
