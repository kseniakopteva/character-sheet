import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { CharacterContext } from "./contexts";

export default function CharacterSubclass({ styles }) {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);
	const [currSubclasses, setCurrSubclasses] = useState(null);

	useEffect(() => {
		fetchSubclasses();
	}, [characterInfo]);

	async function fetchSubclasses() {
		const response = await fetch(
			"https://www.dnd5eapi.co/api/2014/classes/" +
				characterInfo.characterClass.index +
				"/subclasses",
		);
		let { results } = await response.json();

		setCurrSubclasses(results);
	}

	async function selectSubclass(e) {
		const chosenSub = currSubclasses.find((elem) => elem.name === e.target.value);

		// fetchSubclass(chosenSubclass);
		const res = await fetch(
			"https://www.dnd5eapi.co/api/2014/subclasses/" + chosenSub.index,
		);
		let sub = await res.json();

		// TODO: in mine make it so levels are already there
		sub.subclass_levels = await (
			await fetch(
				"https://www.dnd5eapi.co/api/2014/subclasses/" +
					chosenSub.index +
					"/levels",
			)
		).json();

		setCharacterInfo((prev) => ({
			...prev,
			characterSubclass: sub,
		}));
	}

	if (!currSubclasses) {
		return (
			<Card styles={" " + styles}>
				<div className="h-full w-full flex items-center justify-center p-1 dark:text-slate-400">
					Pick a class for subclasses to appear
				</div>
			</Card>
		);
	}

	return (
		<Card styles={" " + styles}>
			<div className="h-full w-full relative wrap-break-word">
				<select
					title={characterInfo.characterSubclass?.desc}
					className="h-full w-full p-1 pl-2 border-slate-300 border dark:border-slate-900"
					onChange={(e) => selectSubclass(e)}
					value={characterInfo.characterSubclass?.name}
				>
					<option value="" selected="selected"></option>
					{currSubclasses.map((c) => (
						<option key={c.index}>{c.name}</option>
					))}
				</select>
			</div>
		</Card>
	);
}
