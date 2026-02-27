import Card from "./Card";
import Insert from "./Insert";

export default function Spellcasting() {
	return (
		<div className="h-[40%] grid grid-cols-8">
			<Card styles="col-span-7" title={"Attacks and spellcasting"}></Card>
			<div className="flex flex-col">
				<Card styles="h-[33.3%]" title={"Spell- casting ability"}>
					<Insert></Insert>
				</Card>
				<Card styles="h-[33.3%]" title={"Spell save DC"}></Card>
				<Card styles="h-[33.3%]" title={"Spell atack bonus"}></Card>
			</div>
		</div>
	);
}
