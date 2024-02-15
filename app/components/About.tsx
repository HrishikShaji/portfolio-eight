"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { LinePath } from "./LinePath";

export const About = () => {
  const paraRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (paraRef.current) {
      const text = new SplitType(paraRef.current, { types: "lines" });
      const linePath = document.querySelector(".line-path");

      // Calculate the total duration of animation
      const totalDuration = 2; // Adjust this value as needed

      // Loop through each line and create animations
      text.lines?.forEach((line, index) => {
        const tl = gsap.timeline({
          delay: index * (totalDuration / text.lines.length), // Delay each animation based on index
          onComplete: () => {
            if (index === text.lines.length - 1) {
              // Animation complete
            }
          },
        });

        tl.to(line, {
          motionPath: {
            path: linePath,
            align: linePath,
            start: 1,
            end: 0,
          },
          scrollTrigger: {
            trigger: line,
            scrub: true,
            start: "top 90%",
            end: "top 10%",
            markers: true,
          },
        });
      });
    }
  }, []);

  return (
    <div className="  text-black py-40 w-full relative flex justify-center  items-center ">
      <div ref={lineRef} className="h-screen absolute left-[40%] w-[15%] z-20">
        <LinePath />
      </div>
      <h3
        ref={paraRef}
        className="text-3xl absolute left-[calc(15%_+_250px)] w-[50%] leading-[50px] text-neutral-300"
      >
        {data.about.description}
      </h3>
    </div>
  );
};
