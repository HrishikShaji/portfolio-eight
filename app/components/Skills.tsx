import { data } from "../lib/data";
import Marquee from "./Marquee";

export const Skills = () => {
  return (
    <div className="h-screen relative w-full flex bg-[#5546ff]">
      <div className="absolute top-40 -rotate-90">
        <Marquee
          speed={0.2}
          scroll={true}
          initialDirection={-1}
          word="SKILLS *"
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
