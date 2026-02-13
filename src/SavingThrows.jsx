import { useContext, useState } from "react";
import Card from "./Card";
import CheckboxInput from "./CheckboxInput";
import { AbilityScoreContext, CharacterContext } from "./contexts";

export default function SavingThrows(props) {
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
		<Card {...props}>
			<ul>
				{savingThrows.map((s) => (
					<CheckboxInput
						key={s.index}
						id={s.index}
						name={s.index}
						handleChange={onCheckChange}
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
