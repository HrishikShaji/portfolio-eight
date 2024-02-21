"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface VerticalMarqueeProps {
	speed: number;
	scroll: boolean;
	initialDirection: number;
	word: string;
	size: string;
}

export default function VerticalMarquee({
	speed,
	scroll,
	initialDirection,
	word,
	size,
}: VerticalMarqueeProps) {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	useGSAP(
		() => {
			let yPercent = 0;
			let direction = initialDirection;

			const animate = () => {
				if (yPercent <= -100) {
					yPercent = 0;
				}
				if (yPercent > 0) {
					yPercent = -100;
				}
				gsap.set(firstText.current, { yPercent: yPercent });
				gsap.set(secondText.current, { yPercent: yPercent });
				requestAnimationFrame(animate);
				yPercent += speed * direction;
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
					y: "-500px",
				});
			}

			requestAnimationFrame(animate);
		},
		{ dependencies: [scroll, speed, initialDirection], scope: slider },
	);

	return (
		<div ref={slider} className="relative whitespace-nowrap">
			<p
				style={{ willChange: "transform", fontSize: size, lineHeight: size }}
				ref={firstText}
				className="font-bebas  text-white  rotate-90"
			>
				{word}
			</p>
			<p
				style={{ willChange: "transform", fontSize: size, lineHeight: size }}
				ref={secondText}
				className=" font-bebas  text-white absolute  top-[100%] left-0 rotate-90"
			>
				{word}
			</p>
		</div>
	);
}
