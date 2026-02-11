import { createLazyFileRoute } from "@tanstack/react-router";
import CharacterClass from "../CharacterClass";
import CharacterRace from "../CharacterRace";
import CharacterLevel from "../CharacterLevel";
import CharacterBackground from "../CharacterBackground";

export const Route = createLazyFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-full flex flex-col gap-1">
			<div className="grid gap-1 h-full grid-cols-4">
				<div className="h-full flex flex-col gap-1">
					<div className="info h-[15%] flex gap-1">
						<img src="https://placehold.co/100" alt="Character Appearance" />
						<div className="w-full">Character Name</div>
					</div>
					<div className="grid gap-1 h-[85%] grid-cols-3">
						<div className="flex flex-col gap-1">
							<div className="h-[16.6%]">Strength</div>
							<div className="h-[16.6%]">Dexterity</div>
							<div className="h-[16.6%]">Constitution</div>
							<div className="h-[16.6%]">Intelligence</div>
							<div className="h-[16.6%]">Wisdom</div>
							<div className="h-[16.6%]">Charisma</div>
						</div>
						<div className="h-full col-span-2 flex flex-col gap-1">
							<div className="h-[7%]">Proficiency bonus</div>
							<div className="h-[20%]">Saving throws</div>
							<div className="h-[66%]">Skills</div>
							<div className="h-[7%]">Passive perception</div>
						</div>
					</div>
				</div>
				<div className="col-span-3 h-full flex flex-col gap-1">
					<div className="grid gap-1 h-[7%] grid-cols-4">
						<CharacterClass />
						<CharacterRace />
						<CharacterLevel />
						<CharacterBackground />
					</div>
					<div className="grid gap-1 h-[93%] grid-cols-5">
						<div className="col-span-2 h-full flex flex-col gap-1">
							<div className="h-[30%] flex flex-col gap-1">
								<div className="h-[50%] grid gap-1 grid-cols-3">
									<div>Armor Class</div>
									<div>Initiative</div>
									<div>Speed</div>
								</div>
								<div className="h-[50%] grid gap-1 grid-cols-2">
									<div>Hit point maximum</div>
									<div>Total hit dice</div>
								</div>
							</div>
							<div className="h-[70%] grid grid-cols-5 gap-1">
								<div className="col-span-4">Equipment</div>
								<div className="flex flex-col gap-1">
									<div className="h-[20%]">CP</div>
									<div className="h-[20%]">SP</div>
									<div className="h-[20%]">EP</div>
									<div className="h-[20%]">GP</div>
									<div className="h-[20%]">PP</div>
								</div>
							</div>
						</div>
						<div className="col-span-3 h-full flex flex-col gap-1">
							<div className="h-[40%] grid grid-cols-8 gap-1">
								<div className="col-span-7">Attacks and spellcasting</div>
								<div className="flex flex-col gap-1">
									<div className="h-[33.3%]">
										Spell- casting ability
									</div>
									<div className="h-[33.3%]">Spell save DC</div>
									<div className="h-[33.3%]">Spell atack bonus</div>
								</div>
							</div>
							<div className="h-[60%] grid grid-cols-2 gap-1">
								<div className="">Features and traits</div>
								<div className="">Other proficiencies and languages</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<p className="text-xs">
					"Character Sheet by KK" is unofficial Fan Content permitted under the
					Fan Content Policy. Not approved/endorsed by Wizards. Portions of the
					materials used are property of Wizards of the Coast. ©Wizards of the
					Coast LLC.
				</p>
				<p>
					<a
						className="underline"
						href="https://github.com/kseniakopteva/character-sheet"
					>
						Github
					</a>
				</p>
			</div>
		</div>
	);
}
