"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useContext, useRef } from "react";
import { ScrollContext } from "./ScrollContext";

export const WorkHeading = () => {
	const refs = useContext(ScrollContext);

	const endRef = useRef<HTMLHeadingElement>(null);
	const overlay = useRef<HTMLDivElement>(null);
	useEffect(() => {
		let ctx = gsap.context(() => {
			if (endRef.current && overlay.current && refs?.scrollTween) {
				const tl = gsap.timeline();
				gsap.set(overlay.current, {
					yPercent: 100,
					display: "block",
					transformOrigin: "bottom",
				});
				gsap.set(endRef.current, {
					scale: 0,
				});

				tl.to(endRef.current, {
					scale: 1,
					scrollTrigger: {
						containerAnimation: refs.scrollTween.current,
						trigger: endRef.current,
						start: "left 95%",
						end: "left 50%",
						scrub: 1,
					},
				});
				gsap.to(overlay.current, {
					yPercent: 0,

					scrollTrigger: {
						containerAnimation: refs.scrollTween.current,
						trigger: overlay.current,
						start: "left 10%",
						end: "left 1%",
						scrub: 1,
					},
				});
			}
		});

		return () => ctx.kill();
	}, [refs]);
	return (
		<div className="flex w-screen bg-[#fc7eff] overflow-hidden justify-center items-center relative">
			<div
				ref={overlay}
				className="w-full z-40 h-full absolute bg-[#fc7eff] mix-blend-difference hidden top-0 left-0"
			/>
			<h1 ref={endRef} className="text-[300px]  leading-tight">
				MY WORK
			</h1>
		</div>
	);
};
