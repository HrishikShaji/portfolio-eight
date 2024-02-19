import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import { AnimateText } from "./AnimateText";
import { Feature } from "./Feature";

export const Features = () => {
	const mainRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (mainRef.current) {
			gsap.from(".feature", {
				stagger: 0.3,
				y: 300,
				scrollTrigger: {
					trigger: mainRef.current,
					start: "top bottom",
					end: "top top",
					scrub: 1,
				},
			});
		}
	}, {});

	return (
		<div ref={mainRef} className="grid grid-cols-2  z-40 ">
			{data.features.data.map((item, i) => (
				<Feature item={item} key={i} />
			))}
		</div>
	);
};
