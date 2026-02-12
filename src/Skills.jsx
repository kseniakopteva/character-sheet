import { useContext } from "react";
import { SkillContext } from "./contexts";
import Card from "./Card";
import CheckboxInput from "./CheckboxInput";

export default function Skills(props) {
	const [skills] = useContext(SkillContext);

	return (
		<Card {...props}>
			<ul className="w-full">
				{skills.map((s) => (
					<CheckboxInput key={s.index} id={s.index} name={s.index}>
						<span className="inline-block w-5 text-center px-1 border-b">
							{s.value}
						</span>
						{s.name}
					</CheckboxInput>
				))}
			</ul>
		</Card>
	);
}
