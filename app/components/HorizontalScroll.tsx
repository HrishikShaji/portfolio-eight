"use client";

import { useContext, useRef } from "react";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { ScrollContext } from "./ScrollContext";
import { WorkHeading } from "./WorkHeading";
import Marquee from "./Marquee";
import { Hero } from "./Hero";
import { About } from "./About";
import { Worker } from "cluster";

export const HorizontalScroll = () => {
	const refs = useContext(ScrollContext);
	if (!refs) return null;

	const { targetRef, containerRef } = refs;
	return (
		<div
			ref={containerRef}
			className="  w-full overflow-hidden flex flex-nowrap scrollbar-hide h-full "
		>
			<div className=" relative flex" ref={targetRef}>
				<Education />
				<Experience />

				<div className=" relative  overflow-hidden">
					<div className="absolute left-0 ">
						<Marquee
							speed={0.5}
							scroll={true}
							initialDirection={-1}
							word="SKILLS *"
							size="400px"
						/>
					</div>
				</div>
				<Skills />
				<WorkHeading />
			</div>
		</div>
	);
};
