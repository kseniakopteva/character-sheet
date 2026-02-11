import { useState } from "react";

export default function AbilityScores() {
	const [totalPoints, setTotalPoints] = useState(27);

	const [abilityScores, setAbilityScores] = useState({
		str: 8,
		dex: 8,
		con: 8,
		int: 8,
		wis: 8,
		cha: 8,
	});

	function reset() {
		setTotalPoints(27);
		setAbilityScores({
			str: 8,
			dex: 8,
			con: 8,
			int: 8,
			wis: 8,
			cha: 8,
		});
	}

	// TODO: Refactor point buy calculator

	return (
		<div className="flex flex-col gap-1 text-sm">
			<div className="h-[7%]">
				<span>Points: {totalPoints}/27</span>
				<button className="underline" onClick={reset}>
					Reset
				</button>
			</div>
			<div className="h-[15.5%] flex flex-col gap-1 justify-between">
				<span>Strength: {abilityScores.str}</span>
				<span>Modifier: ({Math.floor((abilityScores.str - 10) / 2)})</span>
				<div className="flex gap-1">
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.str - 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints + 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints + 2;
									break;

								default:
									break;
							}

							if (abilityScores.str > 8) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									str: abilityScores.str - 1,
								});
							}
						}}
					>
						-
					</button>
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.str + 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints - 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints - 2;
									break;

								default:
									break;
							}
							if (abilityScores.str < 15 && newTotal >= 0) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									str: abilityScores.str + 1,
								});
							}
						}}
					>
						+
					</button>
				</div>
			</div>
			<div className="h-[15.5%] flex flex-col gap-1 justify-between">
				<span>Dexterity: {abilityScores.dex}</span>
				<span>Modifier: ({Math.floor((abilityScores.dex - 10) / 2)})</span>
				<div className="flex gap-1">
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.dex - 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints + 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints + 2;
									break;

								default:
									break;
							}

							if (abilityScores.dex > 8) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									dex: abilityScores.dex - 1,
								});
							}
						}}
					>
						-
					</button>
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.dex + 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints - 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints - 2;
									break;

								default:
									break;
							}
							if (abilityScores.dex < 15 && newTotal >= 0) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									dex: abilityScores.dex + 1,
								});
							}
						}}
					>
						+
					</button>
				</div>
			</div>
			<div className="h-[15.5%] flex flex-col gap-1 justify-between">
				<span>Constitution: {abilityScores.con}</span>
				<span>Modifier: ({Math.floor((abilityScores.con - 10) / 2)})</span>
				<div className="flex gap-1">
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.con - 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints + 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints + 2;
									break;

								default:
									break;
							}

							if (abilityScores.con > 8) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									con: abilityScores.con - 1,
								});
							}
						}}
					>
						-
					</button>
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.con + 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints - 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints - 2;
									break;

								default:
									break;
							}
							if (abilityScores.con < 15 && newTotal >= 0) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									con: abilityScores.con + 1,
								});
							}
						}}
					>
						+
					</button>
				</div>
			</div>
			<div className="h-[15.5%] flex flex-col gap-1 justify-between">
				<span>Intelligence: {abilityScores.int}</span>
				<span>Modifier: ({Math.floor((abilityScores.int - 10) / 2)})</span>
				<div className="flex gap-1">
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.int - 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints + 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints + 2;
									break;

								default:
									break;
							}

							if (abilityScores.int > 8) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									int: abilityScores.int - 1,
								});
							}
						}}
					>
						-
					</button>
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.int + 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints - 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints - 2;
									break;

								default:
									break;
							}
							if (abilityScores.int < 15 && newTotal >= 0) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									int: abilityScores.int + 1,
								});
							}
						}}
					>
						+
					</button>
				</div>
			</div>
			<div className="h-[15.5%] flex flex-col gap-1 justify-between">
				<span>Wisdom: {abilityScores.wis}</span>
				<span>Modifier: ({Math.floor((abilityScores.wis - 10) / 2)})</span>
				<div className="flex gap-1">
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.wis - 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints + 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints + 2;
									break;

								default:
									break;
							}

							if (abilityScores.wis > 8) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									wis: abilityScores.wis - 1,
								});
							}
						}}
					>
						-
					</button>
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.wis + 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints - 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints - 2;
									break;

								default:
									break;
							}
							if (abilityScores.wis < 15 && newTotal >= 0) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									wis: abilityScores.wis + 1,
								});
							}
						}}
					>
						+
					</button>
				</div>
			</div>
			<div className="h-[15.5%] flex flex-col gap-1 justify-between">
				<span>Charisma: {abilityScores.cha}</span>
				<span>Modifier: ({Math.floor((abilityScores.cha - 10) / 2)})</span>
				<div className="flex gap-1">
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.cha - 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints + 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints + 2;
									break;

								default:
									break;
							}

							if (abilityScores.cha > 8) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									cha: abilityScores.cha - 1,
								});
							}
						}}
					>
						-
					</button>
					<button
						className="w-[50%] border cursor-pointer"
						onClick={() => {
							let newTotal = totalPoints;
							switch (abilityScores.cha + 1) {
								case 8:
								case 9:
								case 10:
								case 11:
								case 12:
								case 13:
									newTotal = totalPoints - 1;
									break;
								case 14:
								case 15:
									newTotal = totalPoints - 2;
									break;

								default:
									break;
							}
							if (abilityScores.cha < 15 && newTotal >= 0) {
								setTotalPoints(newTotal);
								setAbilityScores({
									...abilityScores,
									cha: abilityScores.cha + 1,
								});
							}
						}}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
}
