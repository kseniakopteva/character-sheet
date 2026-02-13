import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { CharacterContext, AbilityScoreContext, SkillContext } from "../contexts.jsx";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	// TODO: Put hooks somewhere else

	const characterInfoHook = useState({
		characterClass: "",
		characterRace: "",
		characterLevel: "",
		characterBackground: "",
		characterProficiencyBonus: 2,
	});
	const abilityScoresHook = useState({
		str: 8,
		dex: 8,
		con: 8,
		int: 8,
		wis: 8,
		cha: 8,
	});
	const skillsHook = useState([
		{
			index: "acrobatics",
			name: "Acrobatics",
			base: "dexterity",
			proficiency: false,
		},
		{
			index: "animal-handling",
			name: "Animal Handling",
			base: "wisdom",
			proficiency: false,
		},
		{
			index: "arcana",
			name: "Arcana",
			base: "intelligence",
			proficiency: false,
		},
		{
			index: "athletics",
			name: "Athletics",
			base: "strength",
			proficiency: false,
		},
		{
			index: "deception",
			name: "Deception",
			base: "charisma",
			proficiency: false,
		},
		{
			index: "history",
			name: "History",
			base: "intelligence",
			proficiency: false,
		},
		{
			index: "insight",
			name: "Insight",
			base: "wisdom",
			proficiency: false,
		},
		{
			index: "intimidation",
			name: "Intimidation",
			base: "charisma",
			proficiency: false,
		},
		{
			index: "investigation",
			name: "Investigation",
			base: "intelligence",
			proficiency: false,
		},
		{
			index: "medicine",
			name: "Medicine",
			base: "wisdom",
			proficiency: false,
		},
		{
			index: "nature",
			name: "Nature",
			base: "intelligence",
			proficiency: false,
		},
		{
			index: "perception",
			name: "Perception",
			base: "wisdom",
			proficiency: false,
		},
		{
			index: "performance",
			name: "Performance",
			base: "charisma",
			proficiency: false,
		},
		{
			index: "persuasion",
			name: "Persuasion",
			base: "charisma",
			proficiency: false,
		},
		{
			index: "religion",
			name: "Religion",
			base: "intelligence",
			proficiency: false,
		},
		{
			index: "sleight-of-hand",
			name: "Sleight of Hand",
			base: "dexterity",
			proficiency: false,
		},
		{
			index: "stealth",
			name: "Stealth",
			base: "dexterity",
			proficiency: false,
		},
		{
			index: "survival",
			name: "Survival",
			base: "wisdom",
			proficiency: false,
		},
	]);
	return (
		<>
			<CharacterContext value={characterInfoHook}>
				<AbilityScoreContext value={abilityScoresHook}>
					<SkillContext value={skillsHook}>
						<Outlet />
					</SkillContext>
				</AbilityScoreContext>
			</CharacterContext>
		</>
	);
}
