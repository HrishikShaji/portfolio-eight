"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Spacer } from "./Spacer";
import gsap from "gsap";

export const Sample = () => {
	const circleRef = useRef<HTMLDivElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (mainRef.current && circleRef.current) {
			gsap.to(circleRef.current, {
				scrollTrigger: {
					trigger: mainRef.current,
					start: "top top",
					end: "bottom bottom",
					pin: circleRef.current,
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
			<div className="h-screen w-full flex justify-center items-center">
				<div
					ref={circleRef}
					className="h-[500px] w-[500px] rounded-full bg-teal-500 "
				></div>
			</div>
			<div className="h-full w-full flex flex-col gap-20 items-center">
				{Array.from({ length: 10 }).map((_, i) => (
					<Circle key={i} />
				))}
			</div>
			<Spacer />
			<Spacer />
		</div>
	);
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
					markers: true,
				},
			});
		}
	}, {});

	return <div ref={circleRef} className="h-20 w-20 bg-red-500 rounded-full" />;
};
