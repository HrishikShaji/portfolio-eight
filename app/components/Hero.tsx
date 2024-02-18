"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Marquee } from "./Marquee";
import { data } from "../lib/data";

export const Hero = () => {
	const mainRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		if (mainRef.current) {
			const tl = gsap.timeline();
			tl.to(mainRef.current, {
				scale: 0.8,
				rotation: -5,
				transformOrigin: "center center",
				scrollTrigger: {
					trigger: mainRef.current,
					start: "bottom bottom",
					end: "bottom 20%",
					scrub: 1,
					markers: true,
				},
			});
		}
	}, {});
	return (
		<div
			className="h-screen  sticky  top-0 w-full bg-[#5546ff] flex flex-col"
			ref={mainRef}
		>
			{Array.from({ length: 1 }).map((_, i) => (
				<Marquee key={i} text={data.personal.name} colorIndex={1} number={2} />
			))}
		</div>
	);
};
