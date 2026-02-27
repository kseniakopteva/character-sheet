import { useContext } from "react";
import Card from "./Card";
import { AbilityScoreContext, CharacterContext } from "./contexts";
import Insert from "./Insert";

export default function Stats() {
	const [characterInfo] = useContext(CharacterContext);

	const [abilityScores] = useContext(AbilityScoreContext);
	const conMod = Math.floor((abilityScores.con - 10) / 2);
	const dexMod = Math.floor((abilityScores.dex - 10) / 2);

	return (
		<div className="h-[30%] flex flex-col">
			<div className="h-[50%] grid grid-cols-3">
				<Card title={"Armor Class"}></Card>
				<Card title={"Initiative"}>
					<Insert title={dexMod > 0 ? "+" + dexMod : dexMod}></Insert>
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
