import { useEffect, useState } from "react";
import { SvgMoon, SvgSun } from "./svg";

export default function ThemeChanger() {
	const [theme, setTheme] = useState(null);

	function themeChange(btn) {
		if (btn === "light") {
			localStorage.setItem("theme", "light");
			setTheme("light");
		}
		if (btn === "dark") {
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		}
		if (btn === "os") {
			localStorage.removeItem("theme");
			setTheme(null);
		}
	}

	useEffect(() => {
		setTheme(localStorage.getItem("theme"));
	}, []);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");

		document.documentElement.classList.toggle(
			"dark",
			storedTheme === "dark" ||
				(!storedTheme &&
					window.matchMedia("(prefers-color-scheme: dark)").matches),
		);
	}, [theme]);

	return (
		<div className="fixed top-0 flex gap-1 right-5 p-0.5 h-7 w-21 rounded-b-sm bg-slate-300 dark:bg-slate-500 shadow-sm">
			<button
				className="cursor-pointer rounded-sm bg-slate-300 h-6 w-6 flex justify-center items-center dark:bg-slate-500"
				onClick={() => themeChange("light")}
			>
				<SvgSun />
			</button>
			<button
				className="cursor-pointer rounded-sm bg-slate-300 h-6 w-6 flex justify-center items-center dark:bg-slate-500"
				onClick={() => themeChange("dark")}
			>
				<SvgMoon />
			</button>

			<button
				className="cursor-pointer rounded-sm bg-slate-300 h-6 w-6 flex justify-center items-center dark:bg-slate-500"
				onClick={() => themeChange("os")}
			>
				OS
			</button>
		</div>
	);
}
