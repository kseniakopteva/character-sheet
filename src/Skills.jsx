import { useContext, useState } from "react";
import { AbilityScoreContext, CharacterContext, SkillContext } from "./contexts";
import Card from "./Card";
import CheckboxInput from "./CheckboxInput";
import { calculateModifier } from "./formulas";
import { SvgCheck } from "./svg";

export default function Skills({ styles, title }) {
	const [characterInfo] = useContext(CharacterContext);
	const [skills, setSkills] = useContext(SkillContext);
	const [abilityScores] = useContext(AbilityScoreContext);

	// TODO: remove repeating onCheckChange

	const skillProfArr =
		characterInfo.characterClass?.proficiency_choices?.filter(
			(elem) => elem.type === "skills",
		) ?? [];

	let given = 0;
	skillProfArr.forEach((el) => {
		given += el.choose;
	});

	const [chosen, setChosen] = useState(0);
	const choosableSkills = Array.from(
		(skillProfArr ?? []).flatMap((ele) => ele.from.options),
	);

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
		setChosen(e.target.checked ? chosen + 1 : chosen - 1);
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
						checked={s.proficiency}
						disabled={
							!choosableSkills.some((el) => el.index === s.index) ||
							(chosen >= given && !s.proficiency)
						}
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
			<div className="absolute top-3 right-3 bg-slate-200 border border-slate-400">
				{characterInfo.characterClass?.proficiency_choices?.map((choice) => (
					<>
						<div className="text-xs w-full border-b border-slate-400 px-1">
							FROM:CLASS
						</div>
						<p className="text-tiny max-w-15 p-1" key={choice.index}>
							{choice.desc}
						</p>
						<span
							className={`flex items-center justify-center italic text-emerald-600 bg-emerald-100 text-xs ${!(chosen >= given) && "hidden"}`}
						>
							DONE <SvgCheck />
						</span>
					</>
				))}
			</div>
		</Card>
	);
}
