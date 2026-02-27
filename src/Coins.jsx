import Card from "./Card";

export default function Coins() {
	function coinCard(title, size, classes) {
		return (
			<Card styles="h-[20%]" title={title}>
				<div className="h-full flex justify-center items-center">
					<div
						className={`rounded-full border-2 h-${size} w-${size} ${classes} flex items-center justify-center opacity-40 dark:opacity-60`}
					>
						$
					</div>
				</div>
			</Card>
		);
	}

	return (
		<div className="flex flex-col">
			{coinCard(
				"CP",
				4,
				"text-xs bg-orange-100 border-orange-200 text-orange-300 dark:[mix-blend-mode:multiply]",
			)}
			{coinCard(
				"SP",
				5,
				"text-sm bg-slate-200 border-slate-300 text-slate-400 dark:[mix-blend-mode:multiply]",
			)}
			{coinCard(
				"EP",
				6,
				"text-base bg-stone-200 border-stone-300 text-stone-400 dark:[mix-blend-mode:multiply]",
			)}
			{coinCard(
				"GP",
				7,
				"text-lg bg-amber-100 border-amber-200 text-amber-300 dark:[mix-blend-mode:multiply]",
			)}
			{coinCard(
				"PP",
				8,
				"text-xl bg-blue-100 border-blue-200 text-blue-300 dark:[mix-blend-mode:multiply]",
			)}
		</div>
	);
}
