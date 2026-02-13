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

export const Route = createLazyFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const [skills] = useContext(SkillContext);
	const [characterInfo] = useContext(CharacterContext);

	const [abilityScores] = useContext(AbilityScoreContext);
	// TODO: remove modifier calculation from here
	const mod = Math.floor((abilityScores.wis - 10) / 2);
	const passiveWisdom = skills.find((elem) => elem.index === "perception").proficiency
		? mod + characterInfo.characterProficiencyBonus
		: mod;

	return (
		<div className="h-full flex flex-col bg-slate-200 text-[0.93rem]">
			<div className="grid h-full grid-cols-4 p-8">
				<div className="h-full flex flex-col">
					<Card styles={"h-[15%] flex gap-1"}>
						<img
							className="border border-slate-400 rounded-sm"
							src="https://placehold.co/100"
							alt="Character Appearance"
						/>
						<div className="col-span-2">Character Name</div>
					</Card>
					<div className="grid h-[85%] grid-cols-3">
						<AbilityScores />
						<div className="h-full col-span-2 flex flex-col">
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
				<div className="col-span-3 h-full flex flex-col">
					<div className="grid h-[7%] grid-cols-4">
						<CharacterClass />
						<CharacterRace />
						<CharacterLevel />
						<CharacterBackground />
					</div>
					<div className="grid h-[93%] grid-cols-5">
						<div className="col-span-2 h-full flex flex-col">
							<div className="h-[30%] flex flex-col">
								<div className="h-[50%] grid grid-cols-3">
									<Card title={"Armor Class"}></Card>
									<Card title={"Initiative"}></Card>
									<Card title={"Speed"}></Card>
								</div>
								<div className="h-[50%] grid grid-cols-2">
									<Card title={"Hit point maximum"}></Card>
									<Card title={"Total hit dice"}></Card>
								</div>
							</div>
							<div className="h-[70%] grid grid-cols-5">
								<Card styles="col-span-4" title={"Equipment"}></Card>
								<div className="flex flex-col">
									<Card styles="h-[20%]" title={"CP"}></Card>
									<Card styles="h-[20%]" title={"SP"}></Card>
									<Card styles="h-[20%]" title={"EP"}></Card>
									<Card styles="h-[20%]" title={"GP"}></Card>
									<Card styles="h-[20%]" title={"PP"}></Card>
								</div>
							</div>
						</div>
						<div className="col-span-3 h-full flex flex-col">
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
							<div className="h-[60%] grid grid-cols-2">
								<Card title={"Features and traits"}></Card>
								<Card title={"Other proficiencies and languages"}></Card>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center px-2">
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
		</div>
	);
}
