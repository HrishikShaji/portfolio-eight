"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { AnimateText } from "./AnimateText";
import Image from "next/image";
import { data } from "../lib/data";

export const About = () => {
	const mainRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		if (mainRef.current) {
			const tl = gsap.timeline();

			tl.from(mainRef.current, {
				scale: 0.75,
				rotation: 10,
				transformOrigin: "bottom center",
				scrollTrigger: {
					trigger: mainRef.current,
					start: "top bottom",
					end: "top 30%",
					scrub: 1,
				},
			});
		}
	}, {});
	return (
		<div
			className="h-screen     w-full bg-[#b3eb16] flex flex-col gap-20 p-5"
			ref={mainRef}
		>
			<AnimateText word="ABOUT" />
			<div className="flex h-full gap-10">
				<Image
					src={data.personal.profileImg}
					alt="image"
					height={1000}
					width={1000}
					className="object-cover h-full w-[30%]"
				/>
				<p className="text-2xl  font-inter">{data.about.description}</p>
			</div>
		</div>
	);
};
