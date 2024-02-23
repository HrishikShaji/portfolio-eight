"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const AnimateText = ({
	word,
	position,
}: {
	word: string;
	position: string;
}) => {
	const targetRef = useRef<HTMLHeadingElement>(null);
	const characterRefs = useRef<(HTMLSpanElement | null)[]>([]);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.fromTo(
				characterRefs.current,
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
		}, targetRef);

		return () => ctx.revert();
	}, []);

	return (
		<h1 className="custom-clip font-humane text-[100px] flex " ref={targetRef}>
			{Array.from(word).map((letter, i) => (
				<span
					className="text-animate   leading-none"
					ref={(el) => (characterRefs.current[i] = el)}
					key={i}
				>
					{letter === " " ? "\u00A0" : letter}
				</span>
			))}
		</h1>
	);
};
