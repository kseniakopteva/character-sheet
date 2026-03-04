import { useContext } from "react";
import Card from "./Card";
import { CharacterContext } from "./contexts";

export default function ProficiencyBonus({ styles }) {
	const [characterInfo] = useContext(CharacterContext);

	return (
		<Card styles={styles}>
			<span className=" inline-block px-2 border-b mr-2">
				+{characterInfo.characterProficiencyBonus}
			</span>
			Proficiency bonus
		</Card>
	);
}
