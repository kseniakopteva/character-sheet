import { useState, useEffect, useContext } from "react";
import { CharacterContext } from "./contexts";

export default function CharacterRace() {
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
		return <p>Loading ...</p>;
	}

	return (
		<select
			className="h-full w-full border-black border p-1"
			onChange={(e) =>
				setCharacterInfo({ ...characterInfo, characterRace: e.target.value })
			}
			value={characterInfo.characterRace}
		>
			{characterRaces.map((c) => (
				<option key={c.index}>{c.name}</option>
			))}
		</select>
	);
}
