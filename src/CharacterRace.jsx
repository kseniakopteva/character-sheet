import { useState, useEffect, useContext } from "react";
import { CharacterContext } from "./contexts";
import Card from "./Card";

export default function CharacterRace({ styles }) {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);

	const [characterRaces, setCharacterRaces] = useState(null);

	useEffect(() => {
		fetchRaces();
	}, []);

	async function fetchRaces() {
		const response = await fetch("https://www.dnd5eapi.co/api/2014/races");
		let { results } = await response.json();
		// setCharacterRaces(results);

		let finalRaces = [];
		for (let i = 0; i < results.length; i++) {
			const res = await fetch(
				"https://www.dnd5eapi.co/api/2014/races/" + results[i].index,
			);
			let charRace = await res.json();
			finalRaces.push(charRace);
		}
		setCharacterRaces(finalRaces);
	}

	if (!characterRaces) {
		return (
			<Card styles={" " + styles}>
				<div className="h-full w-full flex items-center justify-center p-1 border-slate-300 border bg-slate-200 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-500">
					Loading races ...
				</div>
			</Card>
		);
	}

	return (
		<Card styles={" " + styles}>
			<select
				className="h-full w-full p-1 border-slate-300 border dark:border-slate-900"
				onChange={(e) =>
					setCharacterInfo({
						...characterInfo,
						characterRace: characterRaces.find(
							(elem) => elem.name === e.target.value,
						),
					})
				}
				value={characterInfo.characterRace.name}
			>
				<option value="" selected="selected"></option>
				{characterRaces.map((c) => (
					<option key={c.index}>{c.name}</option>
				))}
			</select>
		</Card>
	);
}
