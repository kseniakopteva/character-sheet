import { useContext } from "react";
import { AbilityScoreContext, SkillContext } from "./contexts";
import Card from "./Card";
import CheckboxInput from "./CheckboxInput";
import { calculateModifier } from "./formulas";

export default function Skills({ styles, title }) {
	const [skills, setSkills] = useContext(SkillContext);
	const [abilityScores] = useContext(AbilityScoreContext);

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

	return (
		<Card styles={" flex-1 overflow-y-auto min-h-0 " + styles} title={title}>
			<ul>
				{skills.map((s) => (
					<CheckboxInput
						key={s.index}
						id={s.index}
						name={s.index}
						handleChange={onCheckChange}
					>
						<span className="inline-block w-6 text-center px-1 mr-1 border-b">
							{calculateModifier(
								abilityScores[s.base.slice(0, 3)],
								s.proficiency,
								"string",
							)}
						</span>
						{s.name}
					</CheckboxInput>
				))}
			</ul>
		</Card>
	);
}
