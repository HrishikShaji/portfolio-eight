"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Hero = () => {
	const mainRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		if (mainRef.current) {
			gsap.to(mainRef.current, {
				scale: 0.8,
				rotation: -5,
				transformOrigin: "bottom center",
				scrollTrigger: {
					trigger: mainRef.current,
					start: "bottom bottom",
					end: "bottom center",
					scrub: 1,
					markers: true,
				},
			});
		}
	}, {});
	return (
		<div
			className="h-screen  sticky -z-10 top-0 w-full bg-teal-800 flex justify-center items-center"
			ref={mainRef}
		>
			<h1 className="text-8xl text-white">HELLO</h1>
		</div>
	);
};
