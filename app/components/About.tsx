"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export const About = () => {
	const paraRef = useRef<HTMLParagraphElement>(null);
	useGSAP(() => {
		if (paraRef.current) {
			const text = new SplitType(paraRef.current, { types: "lines" });

			text.lines?.forEach((line, i) => {
				const length = text.lines?.length;
				const delay = Math.abs(1 / length);
				const tl = gsap.timeline({});
				tl.to(line, {
					transformOrigin: "50% 50%",
					ease: "power1.inOut",
					motionPath: {
						path: "#line-path",
						alignOrigin: [0, 0.5],
						align: "#line-path",
						start: i * delay + 1,
						end: i * delay,
						autoRotate: false,
					},
					scrollTrigger: {
						trigger: line,
						scrub: true,
						start: "top 90%",
						end: "top top",
						markers: true,
					},
				});
			});
		}
	}, []);

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
