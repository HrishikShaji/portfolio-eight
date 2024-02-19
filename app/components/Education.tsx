import { data } from "../lib/data";
import { AnimateText } from "./AnimateText";

export const Education = () => {
	return (
		<div className="h-screen w-screen bg-[#5546ff] flex flex-col  gap-40 items-center justify-center">
			<AnimateText word="EDUCATION" position="top 70%" />
			<div className="grid grid-cols-3 gap-10 w-[80%]">
				{data.education.data.map((item, i) => (
					<div key={i} className="flex items-center flex-col gap-4">
						<h1 className="text-3xl">{item.major}</h1>
						<h1 className="text-center">{item.description}</h1>
					</div>
				))}
			</div>
		</div>
	);
};
