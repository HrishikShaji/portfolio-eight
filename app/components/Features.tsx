import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";

export const Features = () => {
	const mainRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (mainRef.current) {
			gsap.from(".feature", {
				stagger: 0.3,
				y: 300,
				scrollTrigger: {
					trigger: mainRef.current,
					start: "top center",
					end: "top 40%",
					scrub: 1,
					markers: true,
				},
			});
		}
	}, {});

	return (
		<div ref={mainRef} className="grid grid-cols-3 bg-yellow-500 z-40 ">
			{data.features.data.map((item, i) => (
				<div
					key={i}
					className="feature gap-4 p-20  text-center w-full  flex flex-col"
				>
					<h1 className="text-4xl">{item.title}</h1>
					<h1 className="text-xl">{item.desc}</h1>
				</div>
			))}
		</div>
	);
};