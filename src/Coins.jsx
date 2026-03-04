import Card from "./Card";

export default function Coins() {
	function coinCard(title, size, classes) {
		return (
			<Card styles="h-[20%]" title={title}>
				<div className="h-full flex justify-center items-center">
					<div
						className={`rounded-full border-2 h-${size} w-${size} ${classes} flex items-center justify-center opacity-40 dark:opacity-60 select-none dark:mix-blend-multiply`}
					>
						$
					</div>
				</div>
			</Card>
		);
	}

	return (
		<div className="flex flex-col">
			{coinCard("CP", 4, "text-xs bg-slate-200 border-slate-300 text-slate-400")}
			{coinCard("SP", 5, "text-sm bg-slate-200 border-slate-300 text-slate-400")}
			{coinCard("EP", 6, "text-base bg-slate-200 border-slate-300 text-slate-400")}
			{coinCard("GP", 7, "text-lg bg-slate-200 border-slate-300 text-slate-400")}
			{coinCard("PP", 8, "text-xl bg-slate-200 border-slate-300 text-slate-400")}
		</div>
	);
}
