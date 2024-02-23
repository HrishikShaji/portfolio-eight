import { data } from "../lib/data";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { AnimateText } from "./AnimateText";

export const Features = () => {
	const mainRef = useRef<HTMLDivElement>(null);
	const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.from(featureRefs.current, {
				stagger: 0.3,
				y: 300,
				scrollTrigger: {
					trigger: mainRef.current,
					start: "top bottom",
					end: "top top",
					scrub: 1,
				},
			});
		}, mainRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={mainRef} className="grid grid-cols-2  z-40 ">
			{data.features.data.map((item, i) => (
				<div
					ref={(el) => (featureRefs.current[i] = el)}
					key={i}
					className=" gap-4 p-20 bg-[#fc7eff]  text-center w-full  flex flex-col"
				>
					<AnimateText word={item.title} position="-80% bottom" />
					<h1 className="text-2xl font-inter">{item.desc}</h1>
				</div>
			))}
		</div>
	);
};
