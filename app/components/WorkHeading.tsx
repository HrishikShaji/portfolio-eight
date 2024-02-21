"use client";

import gsap from "gsap";
import { useEffect, useContext, useRef } from "react";
import { ScrollContext } from "./ScrollContext";

export const WorkHeading = () => {
  const refs = useContext(ScrollContext);

  const mainRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (
        mainRef.current &&
        firstRef.current &&
        secondRef.current &&
        refs?.scrollTween
      ) {
        const tl = gsap.timeline();
        tl.to(firstRef.current, {
          scale: 0.8,
          rotation: -5,
          transformOrigin: "center center",
          scrollTrigger: {
            trigger: firstRef.current,
            start: "bottom center",
            end: "bottom 30%",
            scrub: 1,
            markers: true,
          },
        });
      }
    });

    return () => ctx.kill();
  }, [refs]);
  return (
    <div
      ref={mainRef}
      className="flex flex-col w-screen h-full bg-[#fc7eff] overflow-hidden justify-center items-center relative"
    >
      <div
        className="w-full sticky top-0 z-40  bg-green-500  h-screen "
        ref={firstRef}
      />
      <div className="w-full   bg-pink-500  h-screen " ref={secondRef} />
    </div>
  );
};
