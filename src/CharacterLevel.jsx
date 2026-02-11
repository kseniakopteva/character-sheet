import { useContext } from "react";
import { CharacterContext } from "./contexts";

export default function CharacterLevel() {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);

	return (
		<input
			className="h-full w-full border-black border p-2"
			type="text"
			name="level"
			id="level"
			placeholder="Level"
			onChange={(e) =>
				setCharacterInfo({ ...characterInfo, characterLevel: e.target.value })
			}
		/>
	);
}
