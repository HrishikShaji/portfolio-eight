"use client";

import gsap from "gsap";
import { useEffect } from "react";

export const VerticalSlider = () => {
	useEffect(() => {
		var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];
		var wrap = gsap.utils.wrap(-100, 400);

		//initially colorize each box and position in a row
		gsap.set(".box", {
			backgroundColor: (i) => colors[i % colors.length],
			y: (i) => i * 50,
		});

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
		<div className="wrapper">
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
