import { useEffect, useContext, useRef } from "react";
import { data } from "../lib/data";
import { useGSAP } from "@gsap/react";
import { ScrollContext } from "./ScrollContext";
import gsap from "gsap";

export const Experience = () => {
  const targetRef = useRef<HTMLHeadingElement>(null);
  const refs = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const sampleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (targetRef.current) {
      if (!refs?.scrollTween) return null;
      const elements =
        targetRef.current?.getElementsByClassName("text-animate");
      console.log(elements);
      if (elements) {
        gsap.fromTo(
          elements,
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            stagger: 0.03,
            ease: "none",
            scrollTrigger: {
              containerAnimation: refs.scrollTween.current,
              trigger: containerRef.current,
              start: "left center",
              markers: true,
              scrub: true,
            },
          },
        );
      }
    }
    gsap.to(sampleRef.current, {
      scale: 4,
      stagger: 0.03,
      ease: "none",
      scrollTrigger: {
        containerAnimation: refs.scrollTween.current,
        trigger: sampleRef.current,
        start: "left 99%",
        end: "left 1%",
        markers: true,
        scrub: true,
      },
    });
  }, [refs]);
  return (
    <div
      ref={containerRef}
      className="h-screen w-screen bg-[#b3eb16] flex flex-col gap-40 items-center justify-center"
    >
      <div className="h-40 w-40 rounded-md bg-white" ref={sampleRef} />
      <h1
        className="custom-clip font-humane text-[100px] flex "
        ref={targetRef}
      >
        {Array.from("EXPERIENCE").map((letter, i) => (
          <span className="text-animate   leading-none" key={i}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
      <div className="grid grid-cols-3 gap-4 w-[80%]">
        {data.experience.data.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <h1 className="text-3xl">{item.company}</h1>
            <h1 className="text-center"> {item.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
