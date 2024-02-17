import { data } from "../lib/data";

export const Skills = () => {
	return (
		<div className="h-screen w-screen bg-[#5546ff] grid grid-cols-4">
			{data.skills.data.map((item, i) => (
				<div
					key={i}
					className=" flex-col gap-4 border-2 border-black flex items-center justify-center"
				>
					<h1 className="text-3xl">{item.name}</h1>
				</div>
			))}
		</div>
	);
};
