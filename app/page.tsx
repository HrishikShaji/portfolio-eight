"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import { Hero } from "./components/Hero";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export default function Home() {
	return (
		<main className="">
			<Hero />
		</main>
	);
}
