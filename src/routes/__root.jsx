import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { CharacterContext, AbilityScoreContext, SkillContext } from "../contexts.jsx";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	// TODO: Put hooks somewhere else

	const characterInfoHook = useState({
		characterClass: null,
		characterRace: null,
		characterLevel: null,
		characterBackground: null,
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
			value: -1,
		},
		{
			index: "animal-handling",
			name: "Animal Handling",
			base: "wisdom",
			value: -1,
		},
		{
			index: "arcana",
			name: "Arcana",
			base: "intelligence",
			value: -1,
		},
		{
			index: "athletics",
			name: "Athletics",
			base: "strength",
			value: -1,
		},
		{
			index: "deception",
			name: "Deception",
			base: "charisma",
			value: -1,
		},
		{
			index: "history",
			name: "History",
			base: "intelligence",
			value: -1,
		},
		{
			index: "insight",
			name: "Insight",
			base: "wisdom",
			value: -1,
		},
		{
			index: "intimidation",
			name: "Intimidation",
			base: "charisma",
			value: -1,
		},
		{
			index: "investigation",
			name: "Investigation",
			base: "intelligence",
			value: -1,
		},
		{
			index: "medicine",
			name: "Medicine",
			base: "wisdom",
			value: -1,
		},
		{
			index: "nature",
			name: "Nature",
			base: "intelligence",
			value: -1,
		},
		{
			index: "perception",
			name: "Perception",
			base: "wisdom",
			value: -1,
		},
		{
			index: "performance",
			name: "Performance",
			base: "charisma",
			value: -1,
		},
		{
			index: "persuasion",
			name: "Persuasion",
			base: "charisma",
			value: -1,
		},
		{
			index: "religion",
			name: "Religion",
			base: "intelligence",
			value: -1,
		},
		{
			index: "sleight-of-hand",
			name: "Sleight of Hand",
			base: "dexterity",
			value: -1,
		},
		{
			index: "stealth",
			name: "Stealth",
			base: "dexterity",
			value: -1,
		},
		{
			index: "survival",
			name: "Survival",
			base: "wisdom",
			value: -1,
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
