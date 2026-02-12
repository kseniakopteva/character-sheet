import { useContext } from "react";
import { CharacterContext } from "./contexts";
import Card from "./Card";

export default function CharacterLevel({ styles }) {
	const [characterInfo, setCharacterInfo] = useContext(CharacterContext);

	return (
		<Card className={" h-full w-full" + styles}>
			<input
				className="h-full w-full p-2 border-slate-300 border bg-slate-200"
				type="text"
				name="level"
				id="level"
				placeholder="Level"
				onChange={(e) =>
					setCharacterInfo({ ...characterInfo, characterLevel: e.target.value })
				}
			/>
		</Card>
	);
}
