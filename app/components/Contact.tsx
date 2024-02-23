import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Contact = () => {
  const newRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (newRef.current) {
      gsap.to(newRef.current, {
        backgroundColor: "red",
        scrollTrigger: {
          trigger: newRef.current,
          start: "top cennter",
          end: "center center",
          scrub: true,
        },
      });
    }
  }, {});

  return (
    <div
      ref={newRef}
      className="flex bg-[#b3eb16] flex-col items-center h-screen w-full justify-center"
    >
      <form className="flex flex-col gap-5 w-[80%] ">
        <input
          className="border-b-2 bg-transparent placeholder:text-black focus:outline-none w-full border-black p-5"
          placeholder="NAME"
        />
        <input
          className="border-b-2 bg-transparent placeholder:text-black focus:outline-none w-full border-black p-5"
          placeholder="EMAIL"
        />
        <textarea
          className="border-b-2 bg-transparent placeholder:text-black focus:outline-none w-full border-black p-5"
          placeholder="MESSAGE"
        />
        <button className="bg-black text-white p-4 w-full">SEND MESSAGE</button>
      </form>
    </div>
  );
};
