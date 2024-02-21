"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useContext, useRef } from "react";
import { ScrollContext } from "./ScrollContext";

export const WorkHeading = () => {
  const refs = useContext(ScrollContext);

  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (mainRef.current && refs?.scrollTween) {
        const tl = gsap.timeline();
        tl.to(mainRef.current, {
          scale: 0.8,
          rotation: -5,
          transformOrigin: "center center",
          scrollTrigger: {
            containerAnimation: refs.scrollTween.current,
            trigger: mainRef.current,
            start: "left 95%",
            end: "left 50%",
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.kill();
  }, [refs]);
  return (
    <div
      ref={mainRef}
      className="flex w-screen bg-[#fc7eff] overflow-hidden justify-center items-center relative"
    >
      <div className="w-full z-40 h-full absolute bg-[#fc7eff] mix-blend-difference hidden top-0 left-0" />
      <h1 className="text-[300px]  leading-tight">MY WORK</h1>
    </div>
  );
};
