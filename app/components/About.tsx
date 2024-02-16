"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export const About = () => {
  const paraRef = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {
    if (paraRef.current) {
      const text = new SplitType(paraRef.current, { types: "lines" });

      text.lines?.forEach((line, i) => {
        const length = text.lines?.length;
        const delay = Math.abs(1 / length);
        const tl = gsap.timeline({});
        const coordinates = () => {
          const length = 100;
          const gap = 10;
          let arr = [];
          for (let i = 0; i < length; i++) {
            let x = i * gap;
            if (i >= length / 2) {
              x = (length - i) * gap; // Decrease x-coordinate when i is halfway through
            }
            arr.push({ x });
          }
          return arr;
        };

        tl.to(line, {
          ease: "power1.inOut",
          motionPath: {
            path: coordinates(),
          },
          scrollTrigger: {
            trigger: line,
            scrub: true,
            start: "top bottom",
            end: "top top",
            markers: true,
          },
        });
      });
    }
  }, []);

  return (
    <div className="  text-black py-40 w-full relative flex justify-center  items-center ">
      <h3
        ref={paraRef}
        className="text-3xl absolute left-[calc(15%_+_250px)] w-[50%] leading-[50px] text-neutral-300"
      >
        {data.about.description}
      </h3>
    </div>
  );
};
