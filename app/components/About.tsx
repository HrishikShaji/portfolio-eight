"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export const About = () => {
	const paraRef = useRef<HTMLParagraphElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (paraRef.current) {
			const text = new SplitType(paraRef.current, { types: "lines" });
			const linePath = document.querySelector(".line-path");
			text.lines?.forEach((line) => {
				const tl = gsap.timeline();

				gsap.to(line, {
					motionPath: {
						path: linePath,
					},
					scrollTrigger: {
						trigger: line,
						scrub: true,
						start: "top 90%",
						end: "top center",
						markers: true,
					},
				});
			});
		}
	}, {});

	return (
		<div className="  text-black py-40 w-full relative flex justify-center  items-center ">
			<h3
				ref={paraRef}
				className="text-3xl absolute left-[calc(15%_+_250px)] w-[50%] leading-[50px] text-neutral-300"
			>
				{data.about.description}
			</h3>
		</div>
	);
};
