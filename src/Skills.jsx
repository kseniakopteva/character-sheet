import { useContext } from "react";
import { AbilityScoreContext, CharacterContext, SkillContext } from "./contexts";
import Card from "./Card";
import CheckboxInput from "./CheckboxInput";

export default function Skills(props) {
	const [skills, setSkills] = useContext(SkillContext);
	const [abilityScores] = useContext(AbilityScoreContext);
	const [characterInfo] = useContext(CharacterContext);

	// TODO: remove repeating onCheckChange

	function onCheckChange(e) {
		setSkills((prev) =>
			prev.map((skill) =>
				skill.index === e.target.name
					? {
							...skill,
							proficiency: e.target.checked,
						}
					: skill,
			),
		);
	}

	// TODO: move modifier in one place/ make it a field in ability score hook

	function modifier(skill) {
		if (skill.proficiency)
			return (
				Math.floor((abilityScores[skill.base.slice(0, 3)] - 10) / 2) +
				characterInfo.characterProficiencyBonus
			);
		return Math.floor((abilityScores[skill.base.slice(0, 3)] - 10) / 2);
	}

	return (
		<Card {...props}>
			<ul className="w-full">
				{skills.map((s) => (
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
