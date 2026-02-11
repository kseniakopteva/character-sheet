import { useState, useEffect, useContext } from "react";
import { CharacterContext } from "./contexts";

export default function characterBackground() {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);

	const [characterBackgrounds, setCharacterBackgrounds] = useState(null);

	useEffect(() => {
		fetchBackgrounds();
	}, []);

	async function fetchBackgrounds() {
		const response = await fetch("https://www.dnd5eapi.co/api/2014/backgrounds");
		let { results } = await response.json();
		setCharacterBackgrounds(results);
	}

	if (!characterBackgrounds) {
		return <p>Loading ...</p>;
	}

	return (
		<select
			className="h-full w-full border-black border p-1"
			onChange={(e) =>
				setCharacterInfo({
					...characterInfo,
					characterBackground: e.target.value,
				})
			}
			value={characterInfo.characterRace}
		>
			{characterBackgrounds.map((c) => (
				<option key={c.index}>{c.name}</option>
			))}
		</select>
	);
}
