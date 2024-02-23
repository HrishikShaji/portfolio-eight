import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";

export const Testimonials = () => {
	const mainRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (mainRef.current) {
				gsap.from(".testimonial", {
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
		},
		{ scope: mainRef },
	);

	return (
		<div ref={mainRef} className="grid grid-cols-3  z-40 ">
			{data.testimonials.map((item, i) => (
				<div
					key={i}
					className="testimonial gap-4 p-20 bg-[#b3eb16] text-center w-full  flex flex-col"
				>
					<h1 className="text-4xl">{item.name}</h1>
					<h1 className="text-xl">{item.desc}</h1>
				</div>
			))}
		</div>
	);
};
