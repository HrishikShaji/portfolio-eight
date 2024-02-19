import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

interface FeatureProps {
  item: Record<string, any>;
}

export const Feature: React.FC<FeatureProps> = ({ item }) => {
  const targetRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (targetRef.current) {
      const elements =
        targetRef.current?.getElementsByClassName("text-animate");
      if (elements) {
        gsap.fromTo(
          elements,
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            stagger: 0.05,
            scrollTrigger: {
              trigger: targetRef.current,
              start: "top center",
              end: "top center",
              markers: true,
            },
            ease: "none",
          },
        );
      }
    }
  }, {});

  return (
    <div className="feature gap-4 p-20 bg-[#fc7eff]  text-center w-full  flex flex-col">
      <h1
        className=" font-humane text-[100px] flex overflow-hidden"
        ref={targetRef}
      >
        {Array.from(item.title as string).map((letter, i) => (
          <span className="text-animate   " key={i}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
      <h1 className="text-xl">{item.desc}</h1>
    </div>
  );
};
