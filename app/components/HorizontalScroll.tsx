"use client";

import { useContext, useRef } from "react";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { ScrollContext } from "./ScrollContext";
import { WorkHeading } from "./WorkHeading";

export const HorizontalScroll = () => {
	const refs = useContext(ScrollContext);
	if (!refs) return null;

	const { targetRef, containerRef } = refs;
	return (
		<div
			ref={containerRef}
			className="  w-full overflow-hidden flex flex-nowrap scrollbar-hide h-screen "
		>
			<div className="  flex" ref={targetRef}>
				<Education />
				<Experience />
				<Skills />
				<WorkHeading />
			</div>
		</div>
	);
};
