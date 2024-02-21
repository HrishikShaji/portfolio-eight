"use client";

import gsap from "gsap";
import { useEffect } from "react";

export const VerticalSlider = () => {
	useEffect(() => {
		var wrap = gsap.utils.wrap(-100, 400);

		gsap.to(".box", {
			duration: 5,
			ease: "none",
			y: "-=500", //move each box 500px to right
			modifiers: {
				y: gsap.utils.unitize(wrap), //force y value to wrap when it reaches -100
			},
			repeat: -1,
		});
	}, []);

	return (
		<div className="h-[450px] w-[50px] relative m-auto overflow-hidden after:h-[448px] after:w-[48px] after:content-[''] after:absolute after:border-2 after:border-black">
			<div className="boxes">
				<div className="box">1</div>
				<div className="box">2</div>
				<div className="box">3</div>
				<div className="box">4</div>
				<div className="box">5</div>
				<div className="box">6</div>
				<div className="box">7</div>
				<div className="box">8</div>
				<div className="box">9</div>
				<div className="box">10</div>
			</div>
		</div>
	);
};
