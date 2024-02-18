"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface SecondMarqueeProps {
	speed: number;
}

export default function SecondMarquee({ speed }: SecondMarqueeProps) {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);

	useEffect(() => {
		let xPercent = 0;
		let direction = 1;
		const animate = () => {
			if (xPercent < -100) {
				xPercent = 0;
			} else if (xPercent > 0) {
				xPercent = -100;
			}
			gsap.set(firstText.current, { xPercent: xPercent });
			gsap.set(secondText.current, { xPercent: xPercent });
			requestAnimationFrame(animate);
			xPercent += speed * direction;
		};

		gsap.registerPlugin(ScrollTrigger);
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
		requestAnimationFrame(animate);
	}, []);

	return (
		<div ref={slider} className="relative whitespace-nowrap">
			<p
				style={{ willChange: "transform", lineHeight: "350px" }}
				ref={firstText}
				className="font-bebas text-[400px] text-black inline-block"
			>
				ANAKIN SKYWALKER *
			</p>
			<p
				style={{ willChange: "transform", lineHeight: "350px" }}
				ref={secondText}
				className="text-[400px] font-bebas  text-black absolute inline-block top-0 left-[100%]"
			>
				ANAKIN SKYWALKER *
			</p>
		</div>
	);
}
