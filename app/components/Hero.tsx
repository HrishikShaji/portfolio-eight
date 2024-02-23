"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Marquee from "./Marquee";

export const Hero = () => {
	const mainRef = useRef<HTMLDivElement>(null);
	useGSAP(
		() => {
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
					},
				});
			}
		},
		{ scope: mainRef },
	);
	return (
		<div className="h-screen  sticky  top-0 w-full bg-[#5546ff] " ref={mainRef}>
			<div className="h-full w-full relative overflow-hidden">
				<div className="absolute  bottom-0">
					<Marquee
						speed={0.2}
						scroll={false}
						initialDirection={-1}
						word="ANAKIN SKYWALKER"
						size="400px"
					/>
				</div>
			</div>
		</div>
	);
};
