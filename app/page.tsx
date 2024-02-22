"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { HorizontalScroll } from "./components/HorizontalScroll";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { ScrollContextProvider } from "./components/ScrollContext";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export default function Home() {
	return (
		<main className="bg-black relative">
			<div className="">
				<Hero />
				<About />
			</div>
			<Features />
			<ScrollContextProvider>
				<HorizontalScroll />
			</ScrollContextProvider>
			<Testimonials />
			<Contact />
		</main>
	);
}
