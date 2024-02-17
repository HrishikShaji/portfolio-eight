"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const About = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (mainRef.current) {
      gsap.from(mainRef.current, {
        scale: 0.75,
        rotation: 10,
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top bottom",
          end: "top 30%",
          scrub: 1,
          markers: true,
        },
      });
    }
  }, {});
  return (
    <div
      className="h-screen   z-10  w-full bg-[#b3eb16] flex justify-center items-center"
      ref={mainRef}
    >
      <h1 className="text-8xl text-white">ABOUT</h1>
    </div>
  );
};
