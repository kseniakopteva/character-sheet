import { useState, useEffect, useContext } from "react";
import { CharacterContext } from "./contexts";
import Card from "./Card";

export default function CharacterClass({ styles }) {
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
			<div className="h-full w-full relative">
				<select
					className="h-full w-full p-1 pl-2 border-slate-300 border bg-slate-200"
					onChange={(e) =>
						setCharacterInfo({
							...characterInfo,
							characterClass: e.target.value,
						})
					}
					value={characterInfo.characterClass}
				>
					{characterClasses.map((c) => (
						<option key={c.index}>{c.name}</option>
					))}
				</select>
				{/* <svg
					className="w-4 h-4 ms-1.5 -me-0.5 absolute right-2 top-2.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m19 9-7 7-7-7"
					/>
				</svg> */}
			</div>
		</Card>
	);
}
