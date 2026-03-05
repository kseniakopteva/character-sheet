import { useContext } from "react";
import Card from "./Card";
import { AbilityScoreContext, CharacterContext } from "./contexts";
import Insert from "./Insert";
import { calculateModifier } from "./formulas";
import { SvgShield } from "./svg";

export default function Stats() {
	const [characterInfo] = useContext(CharacterContext);

	const [abilityScores] = useContext(AbilityScoreContext);
	const conMod = calculateModifier(abilityScores.con);
	const initiative = calculateModifier(abilityScores.dex, false, "string");

	return (
		<div className="h-[30%] flex flex-col min-h-0">
			<div className="h-[50%] grid grid-cols-3 min-h-0">
				<Card title={"Armor Class"} styles={" min-h-0"}>
					<div className="w-full h-full">
						<SvgShield />
					</div>
				</Card>
				<Card title={"Initiative"}>
					<Insert title={initiative}></Insert>
				</Card>
				<Card
					styles="flex flex-col justify-center items-center italic"
					title={"Speed"}
				>
					{!characterInfo.characterRace ? (
						""
					) : (
						<Insert
							title={`${characterInfo.characterRace.speed} ft`}
							subtitle={`(${characterInfo.characterRace.speed * 0.3048} m)`}
						></Insert>
					)}
				</Card>
			</div>
			<div className="h-[50%] grid grid-cols-2">
				<Card title={"Hit point maximum"}>
					<Insert
						title={
							!characterInfo.characterClass
								? ""
								: characterInfo.characterLevel === 1
									? characterInfo.characterClass.hit_die + conMod
									: (Math.ceil(
											(characterInfo.characterClass.hit_die + 1) /
												2,
										) +
											conMod) *
											(characterInfo.characterLevel - 1) +
										characterInfo.characterClass.hit_die
						}
					></Insert>
				</Card>
				<Card title={"Total hit dice"}>
					<Insert
						title={
							characterInfo.characterClass
								? `d${characterInfo.characterClass.hit_die}`
								: ""
						}
					></Insert>
				</Card>
			</div>
		</div>
	);
}
