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
		</div>
	);
};
