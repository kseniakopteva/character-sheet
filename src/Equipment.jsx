import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { CharacterContext, ChosenEquipmentContext } from "./contexts";
import RadioInput from "./RadioInput";

export default function Equipment({ styles }) {
	const [characterInfo] = useContext(CharacterContext);
	const [chosenEquipment, setChosenEquipment] = useContext(ChosenEquipmentContext);
	const [simpleWeaponNameArr, setSimpleWeaponNameArr] = useState(null);

	useEffect(() => {
		fetchSimpleWeapons();
	}, []);

	async function fetchSimpleWeapons() {
		const response = await fetch(
			"https://www.dnd5eapi.co/api/2014/equipment-categories/simple-weapons",
		);
		let results = await response.json();

		// let nameArray = Array.from(results, (e) => e.index);
		console.log(results);
		setSimpleWeaponNameArr(results);
	}

	/** Convert "(a) item, (b) item, or (c) item" → ["item", "item", "item"] */
	function parseChoices(text) {
		return text
			.split(/\([a-z]\)\s*/i)
			.map((s) => s.trim())
			.map((s) => s.replace(/\s+(?:or|and)\s*$/i, "")) // remove trailing "or/and"
			.map((s) => s.replace(/,\s*$/g, "")) // remove trailing comma
			.filter(Boolean);
	}

	function onRadioChange(e, txt) {
		const grId = parseInt(e.target.name);
		const optId = parseInt(e.target.id.split(/\s*_\s*/)[1]);

		let updatedChosenEquipment = [...chosenEquipment];
		let foundElement = updatedChosenEquipment.find((elem) => elem.groupId === grId);
		if (!foundElement) {
			updatedChosenEquipment.push({ groupId: grId, optionId: optId, text: txt });
		} else {
			foundElement.optionId = optId;
			foundElement.text = txt;
		}
		setChosenEquipment(updatedChosenEquipment);
	}

	const startingEquipment = characterInfo?.characterClass?.starting_equipment ?? [];
	const equipmentOptions =
		characterInfo?.characterClass?.starting_equipment_options ?? [];

	return (
		<>
			<Card styles={"italic overflow-y-scroll " + styles} title={"Equipment"}>
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
					// TODO: make my own API, remove choice length check
					return (
						<>
							<div
								className="bg-slate-200 shadow p-1 mb-2 rounded"
								key={ind}
							>
								{choices.length === 1 ? (
									<p
										key={ind}
										className=" pl-3 text-slate-800 first-letter:uppercase"
									>
										{choices}
									</p>
								) : (
									choices.map((choice, i) => (
										<RadioInput
											key={ind + "_" + i}
											id={ind + "_" + i}
											name={ind}
											handleChange={onRadioChange}
											checked={
												chosenEquipment.find(
													(e) => e.groupId === ind,
												)?.optionId === i
													? true
													: false
											}
										>
											{choice}
										</RadioInput>
									))
								)}
							</div>

							{chosenEquipment.find((elem) => elem.groupId === ind) &&
							chosenEquipment.find((elem) => elem.groupId === ind).text ===
								"any simple weapon" ? (
								<p className="ml-3 -m-2 mb-2 mr-3 p-1 text-sm text-slate-600 border border-slate-400 bg-slate-300 border-t-0 rounded-b">
									{chosenEquipment.find((e) => e.groupId === ind).text}:{" "}
									<br />
									<ul>
										{simpleWeaponNameArr.equipment.map((e) => (
											<>
												<li
													className="list-disc ml-5"
													key={e.index}
												>
													{e.index}
												</li>
											</>
										))}
									</ul>
								</p>
							) : (
								""
							)}
						</>
					);
				})}
			</Card>
		</>
	);
}
