import { useState, useEffect, useContext } from "react";
import { CharacterContext } from "./contexts";

export default function CharacterClass() {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);

	const [characterClasses, setCharacterClasses] = useState(null);

	useEffect(() => {
		fetchClasses();
	}, []);

	async function fetchClasses() {
		const response = await fetch("https://www.dnd5eapi.co/api/2014/classes");
		let { results } = await response.json();
		setCharacterClasses(results);
	}

	if (!characterClasses) {
		return <p>Loading ...</p>;
	}

	return (
		<select
			className="h-full w-full border-black border p-1"
			onChange={(e) =>
				setCharacterInfo({ ...characterInfo, characterClass: e.target.value })
			}
			value={characterInfo.characterClass}
		>
			{characterClasses.map((c) => (
				<option key={c.index}>{c.name}</option>
			))}
		</select>
	);
}
