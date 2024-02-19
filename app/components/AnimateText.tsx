"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const AnimateText = ({
	word,
	position,
}: {
	word: string;
	position: string;
}) => {
	const targetRef = useRef<HTMLHeadingElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	useGSAP(
		() => {
			const elements =
				targetRef.current?.getElementsByClassName("text-animate");
			if (elements) {
				gsap.fromTo(
					elements,
					{
						xPercent: 100,
					},
					{
						xPercent: 0,
						stagger: 0.05,
						duration: 0.1,
						scrollTrigger: {
							trigger: containerRef.current,
							start: "top center",
							end: "top center",
							markers: true,
						},
						ease: "bounce",
					},
				);
			}
		},
		{ dependencies: [word] },
	);

	return (
		<div className="" ref={containerRef}>
			<h1 className=" font-inter text-5xl flex overflow-hidden" ref={targetRef}>
				{word.split("").map((letter, i) => (
					<span className="text-animate   " key={i}>
						{letter}
					</span>
				))}
			</h1>
		</div>
	);
};
