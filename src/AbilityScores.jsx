import { useContext, useState } from "react";
import { AbilityScoreContext, SkillContext } from "./contexts";
import Card from "./Card";

export default function AbilityScores() {
	const [totalPoints, setTotalPoints] = useState(27);

	const [abilityScores, setAbilityScores] = useContext(AbilityScoreContext);
	const [skills] = useContext(SkillContext);

	function setSkillValues(value, base) {
		const filteredSkills = skills.filter((elem) => elem.base === base);
		// TODO: move modifier in one place/ make it a field in ability score hook
		const modifier = Math.floor((value - 10) / 2);
		filteredSkills.map((elem) => (elem.value = modifier));
	}

	// TODO: remove the array with the ability score full names, put them inside the hook

	const allAbScores = [
		{
			index: "strength",
		},
		{
			index: "dexterity",
		},
		{
			index: "constitution",
		},
		{
			index: "intelligence",
		},
		{
			index: "wisdom",
		},
		{
			index: "charisma",
		},
	];

	return (
		<div className="flex flex-col text-sm">
			<Card styles="h-[7%]">
				<span>Points: {totalPoints}/27</span>
				<br />
				<button
					className="underline cursor-pointer"
					onClick={() => {
						setTotalPoints(27);
						setAbilityScores({
							str: 8,
							dex: 8,
							con: 8,
							int: 8,
							wis: 8,
							cha: 8,
						});
						setSkillValues(skills.map((elem) => (elem.value = -1)));
					}}
				>
					Reset
				</button>
			</Card>

			{Array.from(allAbScores, (element) => abilityComponent(element.index))}
		</div>
	);

	function abilityComponent(index) {
		const current = abilityScores[index.slice(0, 3)];
		// TODO: move modifier calculation in one place
		const modifier = Math.floor((current - 10) / 2);
		return (
			<Card key={index} styles="h-[15.5%] grid grid-cols-3 gap-1" title={index}>
				<div className="col-span-2 flex items-center justify-center rounded-lg border-slate-300 dark:border-slate-700 border mb-4 gap-1">
					<span className="text-2xl">{current}</span>
					<span className="text-lg">
						({modifier < 1 ? modifier : "+" + modifier})
					</span>
				</div>
				<div className="gap-1 w-full">
					{btn(true, "w-full")}
					{btn(false, "w-full")}
				</div>
			</Card>
		);

		function btn(increase, styles) {
			return (
				<button
					className={
						styles +
						" mb-1 cursor-pointer float-right max-w-8 h-8 p-1 font-black rounded-lg border-slate-300 border bg-slate-200 dark:border-slate-800 dark:bg-slate-700"
					}
					onClick={() => {
						let newVal = increase ? current + 1 : current - 1;
						let newTotal = totalPoints;

						if (newVal >= 8 && newVal <= 13)
							newTotal = increase ? totalPoints - 1 : totalPoints + 1;
						else if (newVal >= 14 && newVal <= 15)
							newTotal = increase ? totalPoints - 2 : totalPoints + 2;

						if (
							(!increase && current > 8) ||
							(increase && current < 15 && newTotal >= 0)
						) {
							setTotalPoints(newTotal);
							setAbilityScores((prev) => ({
								...prev,
								[index.slice(0, 3)]: newVal,
							}));
							setSkillValues(newVal, index);
						}
					}}
				>
					{increase ? "+" : "-"}
				</button>
			);
		}
	}
}
