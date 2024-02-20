"use client";

import { useContext, useRef } from "react";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { ScrollContext } from "./ScrollContext";
import { WorkHeading } from "./WorkHeading";
import Marquee from "./Marquee";

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

        <div className="h-screen w-[500px] relative flex overflow-hidden   bg-[#5546ff]">
          <div className="absolute h-full w-full -rotate-90 bottom-0">
            <Marquee
              speed={0.2}
              scroll={false}
              initialDirection={-1}
              word="SKILLS * SKILLS * SKILLS *"
              size="200px"
            />
          </div>
        </div>
        <Skills />
        <WorkHeading />
      </div>
    </div>
  );
};
