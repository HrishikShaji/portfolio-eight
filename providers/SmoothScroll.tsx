"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

function SmoothScroll({ children }: { children: ReactNode }) {
	const lenis = useLenis(({ scroll }) => { });

	return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroll;
