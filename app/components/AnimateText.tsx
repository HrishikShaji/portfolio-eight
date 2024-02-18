"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const AnimateText = ({ word }: { word: string }) => {
	const targetRef = useRef<HTMLHeadingElement>(null);
	useGSAP(() => {
		gsap.to(".text-animate", {
			y: 0,
			stagger: 0.05,
			duration: 0.25,
			scrollTrigger: {
				trigger: targetRef.current,
				start: "top 70%",
				end: "top 70%",
				markers: true,
			},
			ease: "bounce",
		});
	}, {});

	return (
		<h1 className="custom-clip font-humane text-[100px] flex" ref={targetRef}>
			{word.split("").map((letter, i) => (
				<span
					className="text-animate translate-y-[220px] transition transform duration-700"
					key={i}
				>
					{letter}
				</span>
			))}
		</h1>
	);
};
