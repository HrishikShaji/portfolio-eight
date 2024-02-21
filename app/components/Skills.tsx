import { data } from "../lib/data";
import Marquee from "./Marquee";

const skills = [
	"HTML*CSS*JAVASCRIPT*HTML*CSS*JAVASCRIPT*",
	"TYPESCRIPT*REACTJS*NEXTJS*TYPESCRIPT*REACTJS*NEXTJS*",
	"TAILWINDCSS*FRAMER MOTION*GSAP*TAILWINDCSS*FRAMER MOTION*GSAP*",
	"EXPRESS JS*NODE JS*PYTHON*EXPRESS JS*NODE JS*PYTHON*",
	"MONGODB*POSTGRESQL*FIREBASE*MONGODB*POSTGRESQL*FIREBASE*",
];

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
				<div className="absolute bg-gray-500 ">
					{skills.map((skill, i) => (
						<div className="w-fit" key={i}>
							<Marquee
								key={i}
								speed={0.1}
								scroll={false}
								initialDirection={-1}
								word={skill}
								size="150px"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
