"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface MarqueeProps {
	text: string;
	number: number;
	colorIndex: number;
}

export const Marquee: React.FC<MarqueeProps> = ({
	text,
	number,
	colorIndex,
}) => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	const directionRef = useRef(-1); // Use useRef to store direction value

	let xPercent = 0;
	const animation = () => {
		if (xPercent <= -100) {
			xPercent = 0;
		}
		if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		xPercent += 0.1 * directionRef.current; // Use directionRef
		requestAnimationFrame(animation);
	};
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		requestAnimationFrame(animation);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: slider.current,
				start: "top bottom",
				end: "top top",
				scrub: 5,
				onUpdate: (e) => {
					directionRef.current = e.direction * -1; // Update directionRef
				},
			},
		});
	}, []);

	return (
		<div ref={slider} className="relative whitespace-nowrap overflow-hidden">
			<div
				ref={firstText}
				className="text-[300px] leading-0 flex-grow relative m-0 flex text-white font-semibold"
			>
				{Array.from({ length: number }).map((_, i) => (
					<h1 key={i} className={i === colorIndex ? "text-red-500 " : ""}>
						{text}
					</h1>
				))}
			</div>
			<div
				ref={secondText}
				className="text-[300px] m-0 leading-0   text-white  font-semibold flex  absolute left-[100%]  top-0"
			>
				{Array.from({ length: number }).map((_, i) => (
					<h1 key={i} className={i === colorIndex ? "text-red-500 " : ""}>
						{text}
					</h1>
				))}
			</div>
		</div>
	);
};
