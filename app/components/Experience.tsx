import { data } from "../lib/data";
import { AnimateText } from "./AnimateText";

export const Experience = () => {
	return (
		<div className="h-screen w-screen bg-[#b3eb16] flex flex-col gap-40 items-center justify-center">
			<AnimateText word="EXPERIENCE" position="top 70%" />
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
