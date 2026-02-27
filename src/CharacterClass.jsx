import { useState, useContext } from "react";
import { CharacterContext, ChosenEquipmentContext } from "./contexts";
import Card from "./Card";
import classes from "./data/classes";

export default function CharacterClass({ styles }) {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);
	const [chosenEquipment, setChosenEquipment] = useContext(ChosenEquipmentContext);

	const [characterClasses] = useState(classes);

	async function selectClass(e) {
		const chosenClass = characterClasses.find((elem) => elem.name === e.target.value);
		const proficiencies = chosenClass.proficiencies?.filter(
			(elem) => elem.index.slice(0, 12) !== "saving-throw",
		);

		setCharacterInfo((prev) => ({
			...prev,
			characterClass: chosenClass,
			characterSubclass: null,
			allProficiencies: proficiencies,
		}));
		setChosenEquipment([]);
	}

	if (!characterClasses) {
		return (
			<Card styles={" " + styles}>
				<div className="h-full w-full flex items-center justify-center p-1 border-slate-300 border bg-slate-200 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-500">
					Loading classes ...
				</div>
			</Card>
		);
	}

	return (
		<Card styles={" " + styles}>
			<div className="h-full w-full relative">
				<select
					className="h-full w-full p-1 pl-2 border-slate-300 border dark:border-slate-900 rounded-xs focus:ring-2 focus:ring-theme-500 focus:outline-none dark:ring-1 dark:ring-white/5 dark:focus:ring-2 dark:focus:ring-theme-500"
					onChange={(e) => selectClass(e)}
					value={characterInfo.characterClass.name}
				>
					<option value="" selected="selected"></option>
					{characterClasses.map((c) => (
						<option key={c.index}>{c.name}</option>
					))}
				</select>
			</div>
		</Card>
	);
}
