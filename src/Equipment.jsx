import { useContext } from "react";
import Card from "./Card";
import { CharacterContext } from "./contexts";
import RadioInput from "./RadioInput";

export default function Equipment({ styles }) {
	const [characterInfo] = useContext(CharacterContext);

	/** Convert "(a) item, (b) item, or (c) item" → ["item", "item", "item"] */
	function parseChoices(text) {
		return text
			.replace(/\([a-z]\)\s*/gi, "") // remove (a)(b)(c)
			.replace(/\s*,\s*(?:or|and)\s+/gi, ",") // turn ", or " into ","
			.replace(/\s+(?:or)\s+/gi, ",") // turn " or " into ","
			.split(/\s*,\s*/) // split once on commas
			.map((s) => s.trim())
			.filter(Boolean);
	}

	const startingEquipment = characterInfo?.characterClass?.starting_equipment ?? [];
	const equipmentOptions =
		characterInfo?.characterClass?.starting_equipment_options ?? [];

	return (
		<Card styles={"italic " + styles} title={"Equipment"}>
			{startingEquipment.map((elem) => (
				<p
					key={elem.equipment.index}
					className="bg-slate-200 shadow p-1 pl-3 mb-2 rounded text-slate-800"
				>
					{elem.equipment.name}
				</p>
			))}
			{equipmentOptions.map((elem, ind) => {
				const choices = parseChoices(elem.desc);
				return (
					<div className="bg-slate-200 shadow p-1 mb-2 rounded" key={ind}>
						{choices.map((choice, i) => (
							<RadioInput
								key={ind + "_" + i}
								id={ind + "_" + i}
								name={ind}
								// handleChange={onCheckChange}
							>
								<span className="mr-2">{choice}</span>
							</RadioInput>
						))}
					</div>
				);
			})}
		</Card>
	);
}
