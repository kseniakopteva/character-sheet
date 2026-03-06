import { useContext, useEffect } from "react";
import { AbilityScoreContext, CharacterContext, SkillContext } from "./contexts";
import Card from "./Card";
import CheckboxInput from "./CheckboxInput";
import { calculateModifier } from "./formulas";
import { SvgCheck } from "./svg";

export default function Skills({ styles, title }) {
	const [characterInfo] = useContext(CharacterContext);
	const [skillsState, setSkills] = useContext(SkillContext);
	const [abilityScores] = useContext(AbilityScoreContext);

	// TODO: refactor this file

	const skillProfArr =
		characterInfo.characterClass?.proficiency_choices?.filter(
			(elem) => elem.type === "skills",
		) ?? [];

	useEffect(() => {
		setSkills((prev) => ({
			...prev,
			given: skillProfArr.reduce((sum, el) => sum + el.choose, 0),
		}));
	}, [characterInfo]);

	const choosableSkills = Array.from(
		(skillProfArr ?? []).flatMap((ele) => ele.from.options),
	);

	function onCheckChange(e) {
		setSkills((prev) => {
			const updatedSkills = prev.skills.map((skill) =>
				skill.index === e.target.name
					? {
							...skill,
							proficiency: e.target.checked,
							chosen: e.target.checked,
						}
					: skill,
			);
			return {
				...prev,
				chosen: e.target.checked
					? skillsState.chosen + 1
					: skillsState.chosen - 1,
				skills: updatedSkills,
			};
		});
	}
	console.log("skillsState: ", skillsState);
	return (
		<Card styles={" flex-1 overflow-y-auto min-h-0 " + styles} title={title}>
			<ul>
				{skillsState.skills.map((s) => (
					<CheckboxInput
						key={s.index}
						id={s.index}
						name={s.index}
						handleChange={onCheckChange}
						checked={s.proficiency}
						disabled={
							!choosableSkills.some((el) => el.index === s.index) ||
							(skillsState.chosen >= skillsState.given && !s.proficiency) ||
							(s.proficiency && !s.chosen)
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
				{skillProfArr?.map((choice) => (
					<>
						<div className="text-xs w-full border-b border-slate-400 px-1">
							FROM:CLASS
						</div>
						<p className="text-tiny max-w-15 p-1" key={choice.index}>
							{choice.desc}
						</p>
						<span
							className={`flex items-center justify-center italic text-emerald-600 bg-emerald-100 text-xs ${!(skillsState.chosen >= skillsState.given) && "hidden"}`}
						>
							DONE <SvgCheck />
						</span>
					</>
				))}
			</div>
		</Card>
	);
}
