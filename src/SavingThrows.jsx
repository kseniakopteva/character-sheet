import Card from "./Card";
import CheckboxInput from "./CheckboxInput";

export default function SavingThrows(props) {
	const savingThrows = [
		{
			index: "strength",
			name: "Strength",
			value: 0,
		},
		{
			index: "dexterity",
			name: "Dexterity",
			value: 0,
		},
		{
			index: "constitution",
			name: "Constitution",
			value: 0,
		},
		{
			index: "intelligence",
			name: "Intelligence",
			value: 0,
		},
		{
			index: "wisdom",
			name: "Wisdom",
			value: 0,
		},
		{
			index: "charisma",
			name: "Charisma",
			value: 0,
		},
	];

	return (
		<Card {...props}>
			<ul>
				{savingThrows.map((s) => (
					<CheckboxInput key={s.index} id={s.index} name={s.index}>
						<span className="inline-block w-5 text-center px-1 border-b">
							{s.value}
						</span>{" "}
						{s.name}
					</CheckboxInput>
				))}
			</ul>
		</Card>
	);
}
