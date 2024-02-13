"use client";
import gsap from "gsap";
import { Sample } from "./components/Sample";
import { Spacer } from "./components/Spacer";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
	return (
		<main className="">
			<Spacer />
			<Sample />
			<Spacer />
		</main>
	);
}
