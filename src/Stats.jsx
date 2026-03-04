import { useContext } from "react";
import Card from "./Card";
import { AbilityScoreContext, CharacterContext } from "./contexts";
import Insert from "./Insert";
import { calculateModifier } from "./formulas";

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
						{/* License: CC Attribution. Made by seyfdesigner: https://www.figma.com/@seyfdesigner */}
						<svg
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							id="magicoon-Regular"
							xmlns="http://www.w3.org/2000/svg"
							className="w-full h-full fill-slate-200 dark:fill-slate-500 pb-4"
						>
							<defs></defs>
							<title>shield</title>
							<g id="shield-Regular">
								<path
									id="shield-Regular-2"
									data-name="shield-Regular"
									d="M20.237,6.289C17.142,5.256,13.36,3.3,12.55,2.474a.748.748,0,0,0-.529-.224.82.82,0,0,0-.532.216A20.312,20.312,0,0,1,3.8,6.409a.749.749,0,0,0-.546.721c0,8.232,1.279,12.515,8.545,14.591a.746.746,0,0,0,.412,0C19.517,19.632,20.75,15.492,20.75,7A.75.75,0,0,0,20.237,6.289ZM12,20.219c-6-1.777-7.2-4.9-7.249-12.529a22.815,22.815,0,0,0,7.278-3.7,33.74,33.74,0,0,0,7.219,3.545C19.2,15.281,18.012,18.439,12,20.219Z"
								/>
							</g>
						</svg>
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
