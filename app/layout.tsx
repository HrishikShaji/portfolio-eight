import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const bebas = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bebas",
	display: "swap",
});

const myFont = localFont({
	src: "../humane-font/Humane-Medium.ttf",
	display: "swap",
	variable: "--font-humane",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${bebas.variable} ${inter.variable} ${myFont.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
