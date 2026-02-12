import { useState, useEffect, useContext } from "react";
import { CharacterContext } from "./contexts";
import Card from "./Card";

export default function characterBackground({ styles }) {
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
		</Card>
	);
}
