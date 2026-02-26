import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { CharacterContext } from "./contexts";

export default function CharacterSubclass({ styles }) {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);
	const [currSubclasses, setCurrSubclasses] = useState(null);

	useEffect(() => {
		setCurrSubclasses(characterInfo.characterClass.subclasses);
	}, [characterInfo.characterClass]);

	async function selectSubclass(e) {
		const sub = e.target.value.split(": ")[1];
		setCharacterInfo((prev) => ({
			...prev,
			characterSubclass: currSubclasses.find((elem) => elem.name === sub),
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
					value={
						characterInfo.characterSubclass?.subclass_flavor +
						": " +
						characterInfo.characterSubclass?.name
					}
				>
					<option value="" selected="selected"></option>
					{currSubclasses.map((c) => (
						<option key={c.index}>{c.subclass_flavor + ": " + c.name}</option>
					))}
				</select>
			</div>
		</Card>
	);
}
