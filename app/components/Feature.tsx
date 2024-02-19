import { AnimateText } from "./AnimateText";

interface FeatureProps {
	item: Record<string, any>;
}

export const Feature: React.FC<FeatureProps> = ({ item }) => {
	return (
		<div className="feature gap-4 p-20 bg-[#fc7eff]  text-center w-full  flex flex-col">
			<AnimateText word={item.title} position="-80% bottom" />
			<h1 className="text-2xl font-inter">{item.desc}</h1>
		</div>
	);
};
