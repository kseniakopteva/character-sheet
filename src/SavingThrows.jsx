import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import CheckboxInput from "./CheckboxInput";
import { AbilityScoreContext, CharacterContext } from "./contexts";

export default function SavingThrows({ styles, title }) {
	const [abilityScores] = useContext(AbilityScoreContext);
	const [characterInfo] = useContext(CharacterContext);

	// TODO: put this somewhere else?

	const [savingThrows, setSavingThrows] = useState([
		{
			index: "strength",
			name: "Strength",
			proficiency: false,
		},
		{
			index: "dexterity",
			name: "Dexterity",
			proficiency: false,
		},
		{
			index: "constitution",
			name: "Constitution",
			proficiency: false,
		},
		{
			index: "intelligence",
			name: "Intelligence",
			proficiency: false,
		},
		{
			index: "wisdom",
			name: "Wisdom",
			proficiency: false,
		},
		{
			index: "charisma",
			name: "Charisma",
			proficiency: false,
		},
	]);

	useEffect(() => {
		const saves = characterInfo.characterClass?.saving_throws;
		const prof = {
			str: saves?.some((e) => e.index === "str"),
			dex: saves?.some((e) => e.index === "dex"),
			con: saves?.some((e) => e.index === "con"),
			int: saves?.some((e) => e.index === "int"),
			wis: saves?.some((e) => e.index === "wis"),
			cha: saves?.some((e) => e.index === "cha"),
		};
		setSavingThrows([
			{
				index: "strength",
				name: "Strength",
				proficiency: prof.str,
				fixed: prof.str,
			},
			{
				index: "dexterity",
				name: "Dexterity",
				proficiency: prof.dex,
				fixed: prof.dex,
			},
			{
				index: "constitution",
				name: "Constitution",
				proficiency: prof.con,
				fixed: prof.con,
			},
			{
				index: "intelligence",
				name: "Intelligence",
				proficiency: prof.int,
				fixed: prof.int,
			},
			{ index: "wisdom", name: "Wisdom", proficiency: prof.wis, fixed: prof.wis },
			{
				index: "charisma",
				name: "Charisma",
				proficiency: prof.cha,
				fixed: prof.cha,
			},
		]);
	}, [characterInfo]);

	// TODO: remove repeating onCheckChange

	function onCheckChange(e) {
		setSavingThrows((prev) =>
			prev.map((savingThrow) =>
				savingThrow.index === e.target.name
					? {
							...savingThrow,
							proficiency: e.target.checked,
						}
					: savingThrow,
			),
		);
	}

	function modifier(savingThrow) {
		if (savingThrow.proficiency)
			return (
				Math.floor((abilityScores[savingThrow.index.slice(0, 3)] - 10) / 2) +
				characterInfo.characterProficiencyBonus
			);
		return Math.floor((abilityScores[savingThrow.index.slice(0, 3)] - 10) / 2);
	}

	return (
		<Card styles={"overflow-y-auto " + styles} title={title}>
			<ul className="h-full">
				{savingThrows.map((s) => (
					<CheckboxInput
						key={s.index}
						id={s.index}
						name={s.index}
						handleChange={onCheckChange}
						checked={s.proficiency}
						disabled={s.fixed}
					>
						<span className="inline-block w-6 text-center px-1 mr-1 border-b">
							{modifier(s) < 1 ? modifier(s) : "+" + modifier(s)}
						</span>
						{s.name}
					</CheckboxInput>
				))}
			</ul>
		</Card>
	);
}
