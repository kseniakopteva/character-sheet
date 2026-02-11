export default function SavingThrows({ styles }) {
	const savingThrows = [
		{
			index: "strength",
			name: "Strength",
		},
		{
			index: "dexterity",
			name: "Dexterity",
		},
		{
			index: "constitution",
			name: "Constitution",
		},
		{
			index: "intelligence",
			name: "Intelligence",
		},
		{
			index: "wisdom",
			name: "Wisdom",
		},
		{
			index: "charisma",
			name: "Charisma",
		},
	];

	return (
		<div className={styles}>
			<ul>
				{savingThrows.map((s) => (
					<>
						<input
							type="checkbox"
							id={s.index}
							name={s.index}
							value={s.name}
						/>
						<label htmlFor={s.index}> {s.name}</label> <br />
					</>
				))}
			</ul>
		</div>
	);
}
