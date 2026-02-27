import Card from "./Card";

export default function PersonalInfo() {
	return (
		<Card styles={"max-h-[15%] flex gap-1"}>
			<img
				className="h-full max-w-15 border border-slate-400 dark:border-slate-900 rounded-sm"
				src="https://placehold.co/100"
				alt="Character Appearance"
			/>
			<div className="col-span-2">Character Name</div>
		</Card>
	);
}
