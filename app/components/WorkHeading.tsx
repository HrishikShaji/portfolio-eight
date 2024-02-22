"use client";

import gsap from "gsap";
import { useEffect, useContext, useRef } from "react";
import { ScrollContext } from "./ScrollContext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Projects } from "./Projects";

export const WorkHeading = () => {
	const refs = useContext(ScrollContext);

	const mainRef = useRef<HTMLDivElement>(null);
	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);
	const secondContainerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		let ctx = gsap.context(() => {
			if (
				mainRef.current &&
				firstRef.current &&
				secondRef.current &&
				refs?.scrollTween
			) {
				gsap.to(firstRef.current, {
					transformOrigin: "center center",
					scale: 0.8,
					rotation: -5,
					scrollTrigger: {
						containerAnimation: refs.scrollTween.current,
						trigger: firstRef.current,
						start: "left 0%",
						end: "right 25%",
						scrub: 1,
					},
				});
				gsap.set(secondRef.current, {
					scale: 0.75,
					rotation: 10,
					transformOrigin: "bottom center",
					yPercent: 100,
				});

				gsap.to(secondRef.current, {
					scale: 1,
					rotation: 0,
					yPercent: 0,
					scrollTrigger: {
						containerAnimation: refs.scrollTween.current,
						trigger: secondContainerRef.current,
						start: "left 90%",
						end: "left 25%",
						scrub: true,
						markers: true,
					},
				});
				gsap.to(firstRef.current, {
					x: mainRef.current.getBoundingClientRect().width / 2,
					ease: "none",
					scrollTrigger: {
						trigger: mainRef.current,
						containerAnimation: refs.scrollTween.current,
						start: "left left",
						end: "+=" + mainRef.current.getBoundingClientRect().width / 2,
						scrub: true,
					},
				});
				gsap.to(secondRef.current, {
					x: mainRef.current.getBoundingClientRect().width / 2,
					ease: "none",
					scrollTrigger: {
						trigger: mainRef.current,
						containerAnimation: refs.scrollTween.current,
						start: "left left",
						end: "+=" + mainRef.current.getBoundingClientRect().width / 2,
						scrub: true,
					},
				});
			}
		});

		return () => ctx.kill();
	}, [refs]);
	return (
		<div
			ref={mainRef}
			className="w-fit h-screen  overflow-hidden flex relative"
		>
			<div className="h-screen w-screen ">
				<div
					className="w-screen top-0 z-20 absolute  bg-green-500 flex justify-center items-center h-screen "
					ref={firstRef}
				>
					<h1 className="text-[400px] font-humane text-white">
						SEE MY PROJECTS
					</h1>
				</div>
				<div
					className="w-screen absolute top-0 z-40    h-full "
					ref={secondRef}
				>
					<Projects />
				</div>
			</div>
			<div ref={secondContainerRef} className="h-screen w-screen "></div>
		</div>
	);
};
