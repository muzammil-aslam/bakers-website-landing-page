import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Section1 from "./Section/section1";
import Section2 from"./Section/section2"
import Section3 from"./Section/section3"
import Section4 from"./Section/section4"
import Section5 from"./Section/section5"
import Section6 from"./Section/section6"
import Section7 from"./Section/section7"
import Section8 from"./Section/section8"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      
    </div>
  );
}
