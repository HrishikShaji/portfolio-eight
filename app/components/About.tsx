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

			text.lines?.forEach((line) => {
				const tl = gsap.timeline();

				tl.to(line, {
					x: 250,
					scrollTrigger: {
						trigger: line,
						scrub: true,
						start: "top 90%",
						end: "top center",
						markers: true,
					},
				}).to(line, {
					x: 0,
					immediateRender: false,
					scrollTrigger: {
						trigger: line,
						scrub: true,
						start: "top center",
						end: "top 10%",
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
