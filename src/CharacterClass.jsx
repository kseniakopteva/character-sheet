import { useState, useEffect, useContext } from "react";
import { CharacterContext, ChosenEquipmentContext } from "./contexts";
import Card from "./Card";

export default function CharacterClass({ styles }) {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);
	const [chosenEquipment, setChosenEquipment] = useContext(ChosenEquipmentContext);

	const [characterClasses, setCharacterClasses] = useState(null);

	useEffect(() => {
		fetchClasses();
	}, []);

	async function fetchClasses() {
		const response = await fetch("https://www.dnd5eapi.co/api/2014/classes");
		let { results } = await response.json();

		let finalClasses = [];
		for (let i = 0; i < results.length; i++) {
			const res = await fetch(
				"https://www.dnd5eapi.co/api/2014/classes/" + results[i].index,
			);
			let charClass = await res.json();
			finalClasses.push(charClass);
		}
		setCharacterClasses(finalClasses);
	}

	async function selectClass(e) {
		const chosenClass = characterClasses.find((elem) => elem.name === e.target.value);
		const proficiencies = chosenClass.proficiencies?.filter(
			(elem) => elem.index.slice(0, 12) !== "saving-throw",
		);

		setCharacterInfo((prev) => ({
			...prev,
			characterClass: chosenClass,
			allProficiencies: proficiencies,
		}));
		setChosenEquipment([]);
	}

	if (!characterClasses) {
		return (
			<Card>
				<div className="h-full w-full flex items-center justify-center p-1 border-slate-300 border bg-slate-200 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-500">
					Loading classes ...
				</div>
			</Card>
		);
	}

	return (
		<Card className={" h-full w-full" + styles}>
			<div className="h-full w-full relative">
				<select
					className="h-full w-full p-1 pl-2 border-slate-300 border dark:border-slate-900"
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
