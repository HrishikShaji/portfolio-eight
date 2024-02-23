import { data } from "../lib/data";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export const Testimonials = () => {
	const mainRef = useRef<HTMLDivElement>(null);
	const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.from(testimonialRefs.current, {
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
		<div ref={mainRef} className="grid grid-cols-3  z-40 ">
			{data.testimonials.map((item, i) => (
				<div
					ref={(el) => (testimonialRefs.current[i] = el)}
					key={i}
					className=" gap-4 p-20 bg-[#b3eb16] text-center w-full  flex flex-col"
				>
					<h1 className="text-4xl">{item.name}</h1>
					<h1 className="text-xl">{item.desc}</h1>
				</div>
			))}
		</div>
	);
};
