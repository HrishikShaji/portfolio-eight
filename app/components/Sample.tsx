"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Spacer } from "./Spacer";
import gsap from "gsap";
import { About } from "./About";
import { LinePath } from "./LinePath";
import { Arc } from "./Arc";

export const Sample = () => {
	const circleRef = useRef<HTMLDivElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (mainRef.current && circleRef.current && lineRef.current) {
			gsap.to(circleRef.current, {
				scrollTrigger: {
					trigger: mainRef.current,
					start: "top top",
					end: "bottom bottom",
					pin: circleRef.current,
					scrub: true,
				},
			});
			gsap.to(lineRef.current, {
				scrollTrigger: {
					trigger: mainRef.current,
					start: "top top",
					end: "bottom bottom",
					pin: lineRef.current,
					scrub: true,
				},
			});
		}
	}, {});

	return (
		<div
			ref={mainRef}
			className="w-full bg-neutral-400 min-h-screen items-center relative flex flex-col"
		>
			<div className="h-screen relative w-full flex  items-center">
				<div className=" w-[300px] absolute left-[calc(15%_+_250px)]">
					<Arc />
				</div>
				<div
					ref={circleRef}
					className="h-[500px] absolute left-[15%] w-[500px] rounded-full bg-teal-500 "
				></div>
			</div>
			<About />
			<div className="h-full w-full flex flex-col gap-20 items-center">
				{Array.from({ length: 10 }).map((_, i) => (
					<Circle key={i} />
				))}
			</div>
			<div className="h-full w-full flex flex-col gap-40 items-center">
				{Array.from({ length: 5 }).map((_, i) => (
					<Square key={i} />
				))}
			</div>
			<div className="h-full w-full flex flex-col gap-40 items-center">
				{Array.from({ length: 5 }).map((_, i) => (
					<Rectangle key={i} />
				))}
			</div>
			<Spacer />
			<Spacer />
		</div>
	);
};

const Rectangle = () => {
	const rectangleRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (rectangleRef.current) {
			gsap.to(rectangleRef.current, {
				x: 300,
				scrollTrigger: {
					trigger: rectangleRef.current,
					start: "top 80%",
					end: "top center",
					scrub: true,
				},
			});
		}
	}, {});

	return (
		<div ref={rectangleRef} className="h-40 w-80 bg-pink-500 rounded-md" />
	);
};

const Square = () => {
	const squareRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (squareRef.current) {
			gsap.to(squareRef.current, {
				x: 300,
				scrollTrigger: {
					trigger: squareRef.current,
					start: "top 80%",
					end: "top center",
					scrub: true,
				},
			});
		}
	}, {});

	return <div ref={squareRef} className="h-40 w-40 bg-purple-500 rounded-md" />;
};
const Circle = () => {
	const circleRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (circleRef.current) {
			gsap.to(circleRef.current, {
				x: 300,
				scrollTrigger: {
					trigger: circleRef.current,
					start: "top 80%",
					end: "top center",
					scrub: true,
				},
			});
		}
	}, {});

	return <div ref={circleRef} className="h-20 w-20 bg-red-500 rounded-full" />;
};
