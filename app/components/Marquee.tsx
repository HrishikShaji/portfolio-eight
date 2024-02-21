"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MarqueeProps {
	speed: number;
	scroll: boolean;
	initialDirection: number;
	word: string;
	size: string;
}

export default function Marquee({
	speed,
	scroll,
	initialDirection,
	word,
	size,
}: MarqueeProps) {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	useGSAP(
		() => {
			let xPercent = 0;
			let direction = initialDirection;

			const animate = () => {
				if (xPercent <= -100) {
					xPercent = 0;
				}
				if (xPercent > 0) {
					xPercent = -100;
				}
				gsap.set(firstText.current, { xPercent: xPercent });
				gsap.set(secondText.current, { xPercent: xPercent });
				requestAnimationFrame(animate);
				xPercent += speed * direction;
			};

			if (scroll) {
				gsap.to(slider.current, {
					scrollTrigger: {
						trigger: document.documentElement,
						scrub: 0.25,
						start: 0,
						end: window.innerHeight,
						onUpdate: (e) => (direction = e.direction * -1),
					},
					x: "-500px",
				});
			}

			requestAnimationFrame(animate);
		},
		{ dependencies: [scroll, speed, initialDirection], scope: slider },
	);

	return (
		<div ref={slider} className="relative whitespace-nowrap">
			<p
				style={{
					fontSize: size,
					lineHeight: size,
				}}
				ref={firstText}
				className="font-bebas relative  text-black "
			>
				{word}
			</p>
			<p
				style={{
					fontSize: size,
					lineHeight: size,
				}}
				ref={secondText}
				className=" font-bebas  text-black absolute  top-0 left-[100%]"
			>
				{word}
			</p>
		</div>
	);
}
