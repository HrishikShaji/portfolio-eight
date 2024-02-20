"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Marquee from "./Marquee";
import { VerticalSlider } from "@/VerticalSlider";

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
				},
			});
		}
	}, {});
	return (
		<div
			className="h-screen  sticky  top-0 w-full bg-[#5546ff] flex flex-col"
			ref={mainRef}
		>
			<div className="h-full relative overflow-hidden">
				<VerticalSlider />
				<div className="absolute top-40">
					<Marquee
						speed={0.2}
						scroll={true}
						initialDirection={-1}
						word="ANAKIN SKYWALKER *"
						size="400px"
					/>
				</div>
			</div>
		</div>
	);
};
