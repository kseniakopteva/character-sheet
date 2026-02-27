import { useContext } from "react";
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
import Stats from "../Stats";
import Spellcasting from "../Spellcasting";
import ThemeChanger from "../ThemeChanger";
import Proficiencies from "../Proficiencies";
import Footer from "../Footer";
import PersonalInfo from "../PersonalInfo";

export const Route = createLazyFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const [skills] = useContext(SkillContext);
	const [characterInfo] = useContext(CharacterContext);

	const [abilityScores] = useContext(AbilityScoreContext);

	// TODO: remove modifier calculation from here
	const wisMod = Math.floor((abilityScores.wis - 10) / 2);
	const passiveWisdom = skills.find((elem) => elem.index === "perception").proficiency
		? wisMod + characterInfo.characterProficiencyBonus
		: wisMod;

	return (
		<div className="selection:bg-theme-500 selection:text-white h-full flex flex-col bg-slate-200 dark:bg-slate-800 dark:text-white text-[0.93rem] dark:[scrollbar-color:#475569_#111827] [scrollbar-color:#94a3b8_#e2e8f0] ">
			<div className="grid h-full grid-cols-4 p-8">
				<div className="h-full flex flex-col min-h-0">
					<PersonalInfo />
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
							<Stats />
							<div className="h-[70%] grid grid-cols-5">
								<Equipment styles={"col-span-4"} />
								<Coins />
							</div>
						</div>
						<div className="col-span-3 h-full flex flex-col min-h-0">
							<Spellcasting />
							<div className="h-[60%] grid grid-cols-2 min-h-0">
								<Features />
								<Proficiencies />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<ThemeChanger />
		</div>
	);
}
