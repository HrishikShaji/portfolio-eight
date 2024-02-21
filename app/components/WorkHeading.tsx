"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useContext, useRef } from "react";
import { ScrollContext } from "./ScrollContext";

export const WorkHeading = () => {
	const refs = useContext(ScrollContext);

	const mainRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		let ctx = gsap.context(() => {
			if (mainRef.current && refs?.scrollTween) {
				const tl = gsap.timeline();
				tl.to(mainRef.current, {
					scale: 0.8,
					rotation: -5,
					transformOrigin: "center center",
					scrollTrigger: {
						containerAnimation: refs.scrollTween.current,
						pin: mainRef.current,
						trigger: mainRef.current,
						start: "center 50%",
						end: "center 50%",
						scrub: 1,
						markers: true,
					},
				});
			}
		});

		return () => ctx.kill();
	}, [refs]);
	return (
		<div
			ref={mainRef}
			className="flex flex-col w-screen h-full bg-[#fc7eff] overflow-hidden justify-center items-center relative"
		>
			<div className="w-full  bg-white  h-screen " />
			<div className="w-full  bg-red-500  h-screen " />
		</div>
	);
};
