import { useContext } from "react";
import Card from "./Card";
import { calculateModifier } from "./formulas";
import { AbilityScoreContext, SkillContext } from "./contexts";

export default function PassiveWisdom({ styles }) {
	const [abilityScores] = useContext(AbilityScoreContext);
	const [skills] = useContext(SkillContext);

	const passiveWisdom = calculateModifier(
		abilityScores.wis,
		skills.find((elem) => elem.index === "perception").proficiency,
		"string",
	);

	return (
		<Card styles={styles}>
			Passive wisdom
			<span className=" inline-block px-2 border-b ml-2">{passiveWisdom}</span>
		</Card>
	);
}
