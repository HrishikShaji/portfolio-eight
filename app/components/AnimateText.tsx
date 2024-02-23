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
	useGSAP(
		() => {
			if (targetRef.current) {
				const elements =
					targetRef.current?.getElementsByClassName("text-animate");
				if (elements) {
					gsap.fromTo(
						elements,
						{
							yPercent: 100,
						},
						{
							yPercent: 0,
							stagger: 0.03,
							scrollTrigger: {
								trigger: targetRef.current,
								start: position,
								end: position,
							},
							ease: "none",
						},
					);
				}
			}
		},
		{ scope: targetRef },
	);

	return (
		<h1 className="custom-clip font-humane text-[100px] flex " ref={targetRef}>
			{Array.from(word).map((letter, i) => (
				<span className="text-animate   leading-none" key={i}>
					{letter === " " ? "\u00A0" : letter}
				</span>
			))}
		</h1>
	);
};
