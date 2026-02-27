import { useState, useContext } from "react";
import { CharacterContext } from "./contexts";
import Card from "./Card";
import races from "./data/races";

export default function CharacterRace({ styles }) {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);

	const [characterRaces] = useState(races);

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
				className="h-full w-full p-1 border-slate-300 border dark:border-slate-900 rounded-xs focus:ring-2 focus:ring-theme-500 focus:outline-none dark:ring-1 dark:ring-white/5 dark:focus:ring-2 dark:focus:ring-theme-500"
				onChange={(e) => {
					e.target.value
						? setCharacterInfo({
								...characterInfo,
								characterRace: characterRaces.find(
									(elem) => elem.name === e.target.value,
								),
							})
						: false;
				}}
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
