import { data } from "../lib/data";
import Marquee from "./Marquee";
import VerticalMarquee from "./VerticalMarquee";

export const Skills = () => {
  return (
    <div className="h-screen relative flex overflow-hidden w-screen  bg-[#5546ff]">
      <div className="absolute  -rotate-90 right-0">
        <Marquee
          speed={0.2}
          scroll={false}
          initialDirection={-1}
          word="SKILLS * SKILLS * SKILLS *"
          size="200px"
        />
      </div>
      <div className="grid grid-cols-4 w-screen">
        {data.skills.data.map((item, i) => (
          <div
            key={i}
            className=" flex-col gap-4 border-2 border-black flex items-center justify-center"
          >
            <h1 className="text-3xl">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
