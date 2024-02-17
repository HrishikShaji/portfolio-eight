import { data } from "../lib/data";

export const Education = () => {
  return (
    <div className="h-screen w-screen bg-[#5546ff] flex gap-10 items-center justify-center">
      {data.education.data.map((item, i) => (
        <div key={i} className="flex flex-col gap-4">
          <h1 className="text-3xl">{item.major}</h1>
          <h1>{item.description}</h1>
        </div>
      ))}
    </div>
  );
};
