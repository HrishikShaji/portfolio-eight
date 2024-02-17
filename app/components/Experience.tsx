import { data } from "../lib/data";

export const Experience = () => {
  return (
    <div className="h-screen w-screen bg-[#b3eb16] flex gap-10 items-center justify-center">
      {data.experience.data.map((item, i) => (
        <div key={i} className="flex flex-col gap-4">
          <h1 className="text-3xl">{item.company}</h1>
          <h1>{item.description}</h1>
        </div>
      ))}
    </div>
  );
};
