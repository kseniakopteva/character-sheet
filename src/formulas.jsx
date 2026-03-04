import { useContext } from "react";
import { CharacterContext } from "./contexts";

export function calculateModifier(abilityScoreValue, isProficient, mode) {
	const [characterInfo] = useContext(CharacterContext);

	let modifierValue = Math.floor((abilityScoreValue - 10) / 2);
	if (isProficient) modifierValue += characterInfo.characterProficiencyBonus;

	const absoluteModifierValue = Math.abs(modifierValue);
	const modifierSign = modifierValue >= 0 ? "+" : "-";

	if (mode === "string") return modifierSign + absoluteModifierValue;
	return modifierValue;
}
