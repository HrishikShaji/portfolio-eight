"use client";

import gsap from "gsap";
import { useEffect } from "react";

export const NewMarquee = () => {
	useEffect(() => {
		gsap
			.to(".marquee-part", {
				xPercent: -100,
				repeat: -1,
				duration: 5,
				ease: "linear",
			})
			.totalProgress(0.5);

		gsap.set(".marquee-inner", { xPercent: -50 });
	}, []);
	return (
		<div className="overflow-hidden relative">
			<div className="marquee-inner flex flex-row w-fit flex-auto">
				<h1 className="marquee-part text-[200px] flex-shrink-0">
					ANAKIN SKYWALKER
				</h1>
				<h1 className="marquee-part text-[200px] flex-shrink-0">
					ANAKIN SKYWALKER
				</h1>
			</div>
		</div>
	);
};
