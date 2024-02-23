"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { AnimateText } from "./AnimateText";
import Image from "next/image";
import { data } from "../lib/data";

export const About = () => {
	const mainRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	useGSAP(
		() => {
			if (mainRef.current && imageRef.current) {
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
				}).from(imageRef.current, {
					scale: 1.5,
					transformOrigin: "center center",
					scrollTrigger: {
						trigger: imageRef.current,
						start: "top center",
						end: "top 30%",
						scrub: 1,
					},
				});
			}
		},
		{ scope: mainRef },
	);
	return (
		<div
			className="h-screen     w-full bg-[#b3eb16] flex flex-col gap-20 p-5"
			ref={mainRef}
		>
			<AnimateText key="about" word="ABOUT" position="top 70%" />
			<div className="flex w-full h-full gap-10">
				<div className="h-full w-[30vw] overflow-hidden">
					<Image
						ref={imageRef}
						src={data.personal.profileImg}
						alt="image"
						height={1000}
						width={1000}
						className="object-cover h-full w-full"
					/>
				</div>
				<p className="text-2xl w-[70vw] font-inter">{data.about.description}</p>
			</div>
		</div>
	);
};
