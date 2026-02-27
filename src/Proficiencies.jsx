import { useContext } from "react";
import { CharacterContext } from "./contexts";
import Card from "./Card";

export default function Proficiencies() {
	const [characterInfo] = useContext(CharacterContext);

	return (
		<Card styles="" title={"Other proficiencies and languages"}>
			<div className="h-full min-h-0 grid grid-cols-2">
				<div>
					<ul className="list-disc ml-5">
						{characterInfo.characterClass?.proficiencies?.map((elem) => (
							<li className="italic" key={elem.index}>
								{elem.name}
							</li>
						))}
					</ul>
				</div>
				<div className="border border-slate-300 dark:border-slate-500 rounded-md">
					<h3 className="pl-1 italic text-slate-500 dark:text-slate-400">
						Languages
					</h3>
					<ul className="list-disc ml-5">
						{characterInfo.characterRace?.languages?.map((elem) => (
							<li className="italic" key={elem.index}>
								{elem.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Card>
	);
}
