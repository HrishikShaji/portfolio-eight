"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

interface MarqueeProps {
  speed: number;
  scroll: boolean;
  initialDirection: number;
  word: string;
  size: string;
}

export default function Marquee({
  speed,
  scroll,
  initialDirection,
  word,
  size,
}: MarqueeProps) {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const requestRef = useRef(0);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let xPercent = 0;
      let direction = initialDirection;

      const animate = () => {
        if (xPercent <= -100) {
          xPercent = 0;
        }
        if (xPercent > 0) {
          xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        if (scroll) {
          gsap.to(slider.current, {
            scrollTrigger: {
              trigger: document.documentElement,
              scrub: 0.25,
              start: 0,
              end: window.innerHeight,
              onUpdate: (e) => (direction = e.direction * -1),
            },
            x: "-500px",
          });
        }
        xPercent += speed * direction;
        requestRef.current = requestAnimationFrame(animate);
      };

      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, slider);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={slider} className="relative whitespace-nowrap">
      <p
        style={{
          fontSize: size,
          lineHeight: size,
        }}
        ref={firstText}
        className="font-bebas relative  text-black "
      >
        {word}
      </p>
      <p
        style={{
          fontSize: size,
          lineHeight: size,
        }}
        ref={secondText}
        className=" font-bebas  text-black absolute  top-0 left-[100%]"
      >
        {word}
      </p>
    </div>
  );
}
