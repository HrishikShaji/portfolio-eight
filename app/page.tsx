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
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import SecondMarquee from "./components/SecondMarquee";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export default function Home() {
	return (
		<main className="bg-black relative">
			<SecondMarquee />
			<div className="">
				<Hero />
				<About />
			</div>
			<Features />
			<HorizontalScroll />
			<Projects />
			<Testimonials />
			<Contact />
		</main>
	);
}
