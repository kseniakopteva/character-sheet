import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import {
	CharacterContext,
	AbilityScoreContext,
	SkillContext,
	ChosenEquipmentContext,
} from "../contexts.jsx";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	// TODO: Put hooks somewhere else

	const characterInfoHook = useState({
		characterClass: "",
		characterSubclass: "",
		characterRace: "",
		characterLevel: 1,
		characterBackground: "",
		characterProficiencyBonus: 2,
		allProficiencies: [],
	});
	const abilityScoresHook = useState({
		str: 8,
		dex: 8,
		con: 8,
		int: 8,
		wis: 8,
		cha: 8,
	});
	const skillsHook = useState({
		given: 0,
		chosen: 0,
		skills: [
			{
				index: "acrobatics",
				name: "Acrobatics",
				base: "dexterity",
				proficiency: false,
				chosen: false,
			},
			{
				index: "animal-handling",
				name: "Animal Handling",
				base: "wisdom",
				proficiency: false,
				chosen: false,
			},
			{
				index: "arcana",
				name: "Arcana",
				base: "intelligence",
				proficiency: false,
				chosen: false,
			},
			{
				index: "athletics",
				name: "Athletics",
				base: "strength",
				proficiency: false,
				chosen: false,
			},
			{
				index: "deception",
				name: "Deception",
				base: "charisma",
				proficiency: false,
				chosen: false,
			},
			{
				index: "history",
				name: "History",
				base: "intelligence",
				proficiency: false,
				chosen: false,
			},
			{
				index: "insight",
				name: "Insight",
				base: "wisdom",
				proficiency: false,
				chosen: false,
			},
			{
				index: "intimidation",
				name: "Intimidation",
				base: "charisma",
				proficiency: false,
				chosen: false,
			},
			{
				index: "investigation",
				name: "Investigation",
				base: "intelligence",
				proficiency: false,
				chosen: false,
			},
			{
				index: "medicine",
				name: "Medicine",
				base: "wisdom",
				proficiency: false,
				chosen: false,
			},
			{
				index: "nature",
				name: "Nature",
				base: "intelligence",
				proficiency: false,
				chosen: false,
			},
			{
				index: "perception",
				name: "Perception",
				base: "wisdom",
				proficiency: false,
				chosen: false,
			},
			{
				index: "performance",
				name: "Performance",
				base: "charisma",
				proficiency: false,
				chosen: false,
			},
			{
				index: "persuasion",
				name: "Persuasion",
				base: "charisma",
				proficiency: false,
				chosen: false,
			},
			{
				index: "religion",
				name: "Religion",
				base: "intelligence",
				proficiency: false,
				chosen: false,
			},
			{
				index: "sleight-of-hand",
				name: "Sleight of Hand",
				base: "dexterity",
				proficiency: false,
				chosen: false,
			},
			{
				index: "stealth",
				name: "Stealth",
				base: "dexterity",
				proficiency: false,
				chosen: false,
			},
			{
				index: "survival",
				name: "Survival",
				base: "wisdom",
				proficiency: false,
				chosen: false,
			},
		],
	});
	const chosenEquipmentHook = useState([]);
	return (
		<>
			<CharacterContext value={characterInfoHook}>
				<AbilityScoreContext value={abilityScoresHook}>
					<SkillContext value={skillsHook}>
						<ChosenEquipmentContext value={chosenEquipmentHook}>
							<Outlet />
						</ChosenEquipmentContext>
					</SkillContext>
				</AbilityScoreContext>
			</CharacterContext>
		</>
	);
}
