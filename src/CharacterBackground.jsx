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

		let finalBackgrounds = [];
		for (let i = 0; i < results.length; i++) {
			const res = await fetch(
				"https://www.dnd5eapi.co/api/2014/backgrounds/" + results[i].index,
			);
			let charBackgr = await res.json();
			finalBackgrounds.push(charBackgr);
		}

		setCharacterBackgrounds(finalBackgrounds);
	}

	if (!characterBackgrounds) {
		return (
			<Card>
				<div className="h-full w-full flex items-center justify-center p-1 border-slate-300 border bg-slate-200 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-500">
					Loading backgrounds ...
				</div>
			</Card>
		);
	}

	return (
		<Card className={" h-full w-full" + styles}>
			<select
				className="h-full w-full p-1 border-slate-300 border bg-slate-200 dark:border-slate-900"
				onChange={(e) =>
					setCharacterInfo((prev) => ({
						...prev,
						characterBackground: characterBackgrounds.find(
							(elem) => elem.name === e.target.value,
						),
					}))
				}
				value={characterInfo.characterBackground.name}
			>
				<option value="" selected="selected"></option>
				{characterBackgrounds.map((c) => (
					<option key={c.index}>{c.name}</option>
				))}
			</select>
		</Card>
	);
}
