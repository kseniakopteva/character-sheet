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
		setCharacterRaces(results);
	}

	if (!characterRaces) {
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
			<select
				className="h-full w-full p-1 border-slate-300 border bg-slate-200"
				onChange={(e) =>
					setCharacterInfo({ ...characterInfo, characterRace: e.target.value })
				}
				value={characterInfo.characterRace}
			>
				{characterRaces.map((c) => (
					<option key={c.index}>{c.name}</option>
				))}
			</select>
		</Card>
	);
}
