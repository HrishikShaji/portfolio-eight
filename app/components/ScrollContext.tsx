"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createContext, useRef, PropsWithChildren } from "react";

interface Refs {
	containerRef: React.MutableRefObject<HTMLDivElement | null>;
	targetRef: React.MutableRefObject<HTMLDivElement | null>;
	scrollTween: React.MutableRefObject<gsap.core.Animation | undefined>;
}

export const ScrollContext = createContext<Refs | null>(null);

export const ScrollContextProvider: React.FC<PropsWithChildren<{}>> = ({
	children,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);

	const scrollTween = useRef<gsap.core.Animation | undefined>();

	useGSAP(
		() => {
			if (containerRef.current && targetRef.current) {
				const amountToScroll =
					targetRef.current.offsetWidth - window.innerWidth;
				const sectionWidth = targetRef.current.offsetWidth / 4;
				scrollTween.current = gsap.to(targetRef.current, {
					x: -amountToScroll,
					duration: 2,
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						pin: containerRef.current,
						start: "left top",
						end: `+=${amountToScroll}`,
						scrub: 1,
					},
				});
			}
		},
		{ dependencies: [scrollTween.current] },
	);

	const refs = {
		containerRef,
		targetRef,
		scrollTween,
	};

	return (
		<ScrollContext.Provider value={refs}>{children}</ScrollContext.Provider>
	);
};
