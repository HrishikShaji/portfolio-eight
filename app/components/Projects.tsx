import { data } from "../lib/data";

export const Projects = () => {
	return (
		<div className="w-full h-full flex bg-[#5546ff] flex-col">
			{data.projects.data.map((project, i) => (
				<div className=" border-b-2 border-black w-full p-5" key={i}>
					<h1>{project.title}</h1>
				</div>
			))}
		</div>
	);
};
