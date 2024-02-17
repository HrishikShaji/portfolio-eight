"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import { Hero } from "./components/Hero";
import { Spacer } from "./components/Spacer";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { HorizontalScroll } from "./components/HorizontalScroll";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export default function Home() {
  return (
    <main className="bg-black relative">
      <div className="overflow-hidden">
        <Hero />
        <About />
      </div>
      <Features />
      <HorizontalScroll />
      <Spacer />
    </main>
  );
}
