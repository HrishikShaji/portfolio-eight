"use client";

import gsap from "gsap";
import { useEffect, useContext, useRef } from "react";
import { ScrollContext } from "./ScrollContext";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const WorkHeading = () => {
  const refs = useContext(ScrollContext);

  const mainRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const secondContainerRef = useRef<HTMLDivElement>(null);
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
          transformOrigin: "center center",
          scale: 0.8,
          rotation: -5,
          scrollTrigger: {
            containerAnimation: refs.scrollTween.current,
            trigger: firstRef.current,
            start: "center 60%",
            end: "center center",
            scrub: 1,
            markers: true,
          },
        });
        gsap.set(secondRef.current, {
          transformOrigin: "center center",
          scale: 0.8,
          rotation: -5,
          yPercent: 100,
        });
        gsap.to(secondRef.current, {
          scale: 1,
          rotation: 0,
          yPercent: 0,
          scrollTrigger: {
            containerAnimation: refs.scrollTween.current,
            trigger: secondContainerRef.current,
            start: "center 60%",
            end: "center center",
            scrub: 1,
            markers: true,
          },
        });

        const fakePin = gsap.to(firstRef.current, {
          x: mainRef.current.getBoundingClientRect().width / 2,
          ease: "none",
        });
        ScrollTrigger.create({
          trigger: mainRef.current,
          containerAnimation: refs.scrollTween.current,
          start: "left left",
          end: "+=" + mainRef.current.getBoundingClientRect().width / 2,
          scrub: true,
          animation: fakePin,
        });
      }
    });

    return () => ctx.kill();
  }, [refs]);
  return (
    <div
      ref={mainRef}
      className="w-fit h-screen  overflow-hidden flex relative"
    >
      <div className="h-screen w-screen ">
        <div
          className="w-screen top-0 z-20 absolute  bg-green-500  h-screen "
          ref={firstRef}
        />
      </div>
      <div ref={secondContainerRef} className="h-screen w-screen ">
        <div
          className="w-screen absolute top-0 z-40  bg-pink-500  h-screen "
          ref={secondRef}
        />
      </div>
    </div>
  );
};
