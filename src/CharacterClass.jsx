import { useState, useEffect, useContext } from "react";
import { CharacterContext } from "./contexts";
import Card from "./Card";

export default function CharacterClass({ styles }) {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);

	const [characterClasses, setCharacterClasses] = useState(null);

	useEffect(() => {
		fetchClasses();
	}, []);

	async function fetchClasses() {
		const response = await fetch("https://www.dnd5eapi.co/api/2014/classes");
		let { results } = await response.json();
		console.log(results);

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
		setCharacterInfo((prev) => ({
			...prev,
			characterClass: characterClasses.find((elem) => elem.name === e.target.value),
		}));
	}

	if (!characterClasses) {
		return (
			<Card>
				<div className="h-full w-full flex items-center justify-center">
					Loading ...
				</div>
			</Card>
		);
	}

	return (
		<Card className={" h-full w-full" + styles}>
			<div className="h-full w-full relative">
				<select
					className="h-full w-full p-1 pl-2 border-slate-300 border bg-slate-200"
					onChange={(e) => selectClass(e)}
					value={characterInfo.characterClass.name}
				>
					{characterClasses.map((c) => (
						<option key={c.index}>{c.name}</option>
					))}
				</select>
			</div>
		</Card>
	);
}
