import { data } from "../lib/data";
import Marquee from "./Marquee";

export const Skills = () => {
  return (
    <div className="h-screen relative flex overflow-hidden w-screen  bg-[#5546ff]">
      <div className="absolute  -rotate-90 left-0 -translate-x-[43%] bottom-0">
        <Marquee
          speed={0.25}
          scroll={false}
          initialDirection={-1}
          word="SKILLS*SKILLS*SKILLS*"
          size="200px"
        />
      </div>
      <div className="absolute  -rotate-90 right-0 translate-x-[43%] z-40% bottom-0">
        <Marquee
          speed={0.25}
          scroll={false}
          initialDirection={-1}
          word="SKILLS*SKILLS*SKILLS*"
          size="200px"
        />
      </div>
      <div className="absolute left-[200px] overflow-hidden w-[calc(100vw_-_400px)] bg-white h-full">
        <div className="absolute bg-gray-500">
          <Marquee
            speed={0.1}
            scroll={false}
            initialDirection={-1}
            word="HTML*CSS*JAVASCRIPT*HTML*CSS*JAVASCRIPT*"
            size="150px"
          />
          <Marquee
            speed={0.1}
            scroll={false}
            initialDirection={-1}
            word="TYPESCRIPT*REACTJS*NEXTJS*TYPESCRIPT*REACTJS*NEXTJS*"
            size="150px"
          />
          <Marquee
            speed={0.1}
            scroll={false}
            initialDirection={-1}
            word="TAILWINDCSS*FRAMER MOTION*GSAP*TAILWINDCSS*FRAMER MOTION*GSAP*"
            size="150px"
          />
          <Marquee
            speed={0.1}
            scroll={false}
            initialDirection={-1}
            word="EXPRESS JS*NODE JS*PYTHON*EXPRESS JS*NODE JS*PYTHON*"
            size="150px"
          />
          <Marquee
            speed={0.1}
            scroll={false}
            initialDirection={-1}
            word="MONGODB*POSTGRESQL*FIREBASE*MONGODB*POSTGRESQL*FIREBASE*"
            size="150px"
          />
        </div>
      </div>
    </div>
  );
};
