import { useContext, useEffect, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import AbilityScores from "../AbilityScores";
import SavingThrows from "../SavingThrows";
import Skills from "../Skills";
import CharacterClass from "../CharacterClass";
import CharacterRace from "../CharacterRace";
import CharacterLevel from "../CharacterLevel";
import CharacterBackground from "../CharacterBackground";
import { AbilityScoreContext, CharacterContext, SkillContext } from "../contexts";
import Card from "../Card";
import Equipment from "../Equipment";
import CharacterSubclass from "../CharacterSubclass";
import Features from "../Features";
import Coins from "../Coins";

export const Route = createLazyFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const [skills] = useContext(SkillContext);
	const [characterInfo] = useContext(CharacterContext);

	const [abilityScores] = useContext(AbilityScoreContext);
	const conMod = Math.floor((abilityScores.con - 10) / 2);

	// TODO: remove modifier calculation from here
	const wisMod = Math.floor((abilityScores.wis - 10) / 2);
	const passiveWisdom = skills.find((elem) => elem.index === "perception").proficiency
		? wisMod + characterInfo.characterProficiencyBonus
		: wisMod;

	// TODO: move theme stuff to another file

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
		<div className="selection:bg-theme-500 selection:text-white h-full flex flex-col bg-slate-200 dark:bg-slate-800 dark:text-white text-[0.93rem] dark:[scrollbar-color:#475569_#111827] [scrollbar-color:#94a3b8_#e2e8f0] ">
			<div className="grid h-full grid-cols-4 p-8">
				<div className="h-full flex flex-col min-h-0">
					<Card styles={"max-h-[15%] flex gap-1"}>
						<img
							className="h-full max-w-15 border border-slate-400 dark:border-slate-900 rounded-sm"
							src="https://placehold.co/100"
							alt="Character Appearance"
						/>
						<div className="col-span-2">Character Name</div>
					</Card>
					<div className="grow grid h-[85%] grid-cols-3 min-h-0">
						<AbilityScores />
						<div className="h-full col-span-2 flex flex-col min-h-0">
							<Card styles={"h-[5%] flex items-center"}>
								<span className=" inline-block px-2 border-b mr-2">
									+{characterInfo.characterProficiencyBonus}
								</span>
								Proficiency bonus
							</Card>
							<SavingThrows styles={"h-[24%]"} title={"Saving Throws"} />
							<Skills styles={"h-[66%]"} title={"Skills"} />
							<Card styles={"h-[5%]"}>
								Passive wisdom
								<span className=" inline-block px-2 border-b ml-2">
									{passiveWisdom < 0
										? passiveWisdom
										: "+" + passiveWisdom}
								</span>
							</Card>
						</div>
					</div>
				</div>
				<div className="col-span-3 h-full flex flex-col min-h-0">
					<div className="grid fmin-h-[5%] fmax-h-[7%] grid-cols-9 ">
						<CharacterClass styles="col-span-2" />
						<CharacterSubclass styles="col-span-2"></CharacterSubclass>
						<CharacterRace styles="col-span-2" />
						<CharacterBackground styles="col-span-2" />
						<CharacterLevel />
					</div>
					<div className="grid h-full grid-cols-5 min-h-0">
						<div className="col-span-2 h-full flex flex-col">
							<div className="h-[30%] flex flex-col">
								<div className="h-[50%] grid grid-cols-3">
									<Card title={"Armor Class"}></Card>
									<Card title={"Initiative"}></Card>
									<Card title={"Speed"}></Card>
								</div>
								<div className="h-[50%] grid grid-cols-2">
									<Card
										styles="text-3xl flex justify-center"
										title={"Hit point maximum"}
									>
										<p className="self-center italic">
											{!characterInfo.characterClass
												? ""
												: characterInfo.characterLevel === 1
													? characterInfo.characterClass
															.hit_die + conMod
													: (Math.ceil(
															(characterInfo.characterClass
																.hit_die +
																1) /
																2,
														) +
															conMod) *
															(characterInfo.characterLevel -
																1) +
														characterInfo.characterClass
															.hit_die}
										</p>
									</Card>
									<Card
										styles="text-3xl flex justify-center"
										title={"Total hit dice"}
									>
										<p className="self-center italic">
											{characterInfo.characterClass ? "d" : ""}
											{characterInfo.characterClass.hit_die}
										</p>
									</Card>
								</div>
							</div>
							<div className="h-[70%] grid grid-cols-5">
								<Equipment styles={"col-span-4"} />
								<Coins />
							</div>
						</div>
						<div className="col-span-3 h-full flex flex-col min-h-0">
							<div className="h-[40%] grid grid-cols-8">
								<Card
									styles="col-span-7"
									title={"Attacks and spellcasting"}
								></Card>
								<div className="flex flex-col">
									<Card
										styles="h-[33.3%]"
										title={"Spell- casting ability"}
									></Card>
									<Card
										styles="h-[33.3%]"
										title={"Spell save DC"}
									></Card>
									<Card
										styles="h-[33.3%]"
										title={"Spell atack bonus"}
									></Card>
								</div>
							</div>
							<div className="h-[60%] grid grid-cols-2 min-h-0">
								<Features />
								<Card
									styles=""
									title={"Other proficiencies and languages"}
								>
									<div className="h-full min-h-0 grid grid-cols-2">
										<div>
											<ul className="list-disc ml-5">
												{characterInfo.characterClass?.proficiencies?.map(
													(elem) => (
														<li
															className="italic"
															key={elem.index}
														>
															{elem.name}
														</li>
													),
												)}
											</ul>
										</div>
										<div className="border border-slate-300 dark:border-slate-500 rounded-md">
											<h3 className="pl-1 italic text-slate-500 dark:text-slate-400">
												Languages
											</h3>
											<ul className="list-disc ml-5">
												{characterInfo.characterRace?.languages?.map(
													(elem) => (
														<li
															className="italic"
															key={elem.index}
														>
															{elem.name}
														</li>
													),
												)}
											</ul>
										</div>
									</div>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center px-2 -mt-6 text-slate-600 dark:text-slate-400">
				<p className="text-xs italic">
					"Character Sheet by KK" is unofficial Fan Content permitted under the
					Fan Content Policy. Not approved/endorsed by Wizards. Portions of the
					materials used are property of Wizards of the Coast. ©Wizards of the
					Coast LLC.
				</p>
				<p>
					<a
						className="underline after:content-['_↗']"
						href="https://github.com/kseniakopteva/character-sheet"
					>
						Github
					</a>
				</p>
			</div>
			<div className="fixed top-0 flex gap-1 right-5 p-0.5 h-7 w-21 rounded-b-sm bg-slate-300 dark:bg-slate-500 shadow-sm">
				<button
					className="cursor-pointer rounded-sm bg-slate-300 h-6 w-6 flex justify-center items-center dark:bg-slate-500"
					onClick={() => themeChange("light")}
				>
					<svg
						className="m-0.5"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
					</svg>
				</button>
				<button
					className="cursor-pointer rounded-sm bg-slate-300 h-6 w-6 flex justify-center items-center dark:bg-slate-500"
					onClick={() => themeChange("dark")}
				>
					<svg
						className="m-1"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
						<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
					</svg>
				</button>

				<button
					className="cursor-pointer rounded-sm bg-slate-300 h-6 w-6 flex justify-center items-center dark:bg-slate-500"
					onClick={() => themeChange("os")}
				>
					OS
				</button>
			</div>
		</div>
	);
}
