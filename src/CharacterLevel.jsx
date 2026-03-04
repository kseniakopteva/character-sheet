import { useContext } from "react";
import { CharacterContext } from "./contexts";
import Card from "./Card";

export default function CharacterLevel({ styles }) {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);

	function calcProfBonus(level) {
		if (level >= 17) return 6;
		if (level >= 13) return 5;
		if (level >= 9) return 4;
		if (level >= 5) return 3;
		return 2;
	}

	return (
		<Card className={" h-full w-full" + styles}>
			<input
				className={
					"h-full w-full p-2 border-slate-300 border bg-slate-200 dark:border-slate-900 dark:bg-slate-800 rounded-xs caret-slate-500 focus:ring-2 focus:ring-slate-500 focus:outline-none dark:ring-1 dark:ring-white/5 dark:focus:ring-2 dark:focus:ring-slate-300"
				}
				type="number"
				max={20}
				min={1}
				name="level"
				id="level"
				placeholder="Level"
				// value={characterInfo.characterLevel}
				onChange={(e) =>
					setCharacterInfo((prev) => ({
						...prev,
						characterLevel: e.target.value,
						characterProficiencyBonus: calcProfBonus(e.target.value),
					}))
				}
			/>
		</Card>
	);
}
