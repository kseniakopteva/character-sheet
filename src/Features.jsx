import { useContext, useState } from "react";
import Card from "./Card";
import { CharacterContext } from "./contexts";
import { SvgArrowDown, SvgArrowUp } from "./svg";

export default function Features() {
	const [characterInfo] = useContext(CharacterContext);
	const [activeIndex, setActiveIndex] = useState({});
	const [isSingleOpen, setIsSingleOpen] = useState(true);

	// TODO: refactor this file

	const classLevels = characterInfo.characterClass.class_levels?.filter(
		(elem) => elem.level <= characterInfo.characterLevel,
	);
	const classFeatures = (classLevels ?? []).flatMap((arrElem) => arrElem.features);

	const subClassLevels = characterInfo.characterSubclass?.subclass_levels?.filter(
		(elem) => elem.level <= characterInfo.characterLevel,
	);
	const subClassFeatures = (subClassLevels ?? []).flatMap(
		(arrElem) => arrElem.features,
	);

	return (
		<Card styles="relative overflow-y-auto pb-2" title={"Features and traits"}>
			<div className="absolute top-1 right-1 flex gap-1 border border-slate-300 dark:border-slate-800 p-0.5 rounded-sm">
				<button
					onClick={() => setIsSingleOpen(true)}
					className={`text-xs/3 w-7 p-0.5 rounded-sm cursor-pointer border ${
						isSingleOpen
							? "bg-slate-300 dark:bg-slate-500 border-slate-400 dark:border-slate-700"
							: "bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-800"
					}`}
				>
					one
				</button>
				<button
					onClick={() => setIsSingleOpen(false)}
					className={`text-xs/3 w-7 border p-0.5 rounded-sm cursor-pointer ${
						isSingleOpen
							? "bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-800"
							: "bg-slate-300 dark:bg-slate-500 border-slate-400 dark:border-slate-700"
					}`}
				>
					all
				</button>
			</div>
			<ul className="h-full">
				{classFeatures.map((classFeature) => {
					return featureElement(classFeature, false);
				})}

				{subClassFeatures.map((subClassFeature) => {
					return featureElement(subClassFeature, true);
				})}
			</ul>
		</Card>
	);

	function featureElement(feature, isSubclassFeature) {
		const shouldOpen = isSingleOpen
			? activeIndex.main && activeIndex.main === feature.index
			: true;

		const featureDescSubElement = feature.desc.find((e) =>
			!e.name ? "" : e.index === activeIndex[feature.index],
		);

		return (
			<div
				className="ml-3 mb-1 text-xs/3 italic text-slate-500 dark:text-slate-300 flex gap-1"
				key={feature.index}
			>
				<li key={feature.index}>
					<button
						onClick={() => {
							activeIndex.main && activeIndex.main === feature.index
								? setActiveIndex((prev) => ({
										...prev,
										main: "none",
									}))
								: setActiveIndex((prev) => ({
										...prev,
										main: feature.index,
									}));
						}}
					>
						<div
							className={`flex gap-1 items-center ${isSingleOpen ? "cursor-pointer" : ""}`}
						>
							<div className="flex text-lg italic text-left">
								<div className="flex gap-1 items-center">
									<div
										className={`bg-slate-300 dark:bg-slate-500 p-0.5 mr-1 rounded-sm text-xs ${!isSubclassFeature && "hidden"}`}
									>
										subclass
									</div>

									<p className="underline">{feature.name}</p>
								</div>
							</div>

							{isSingleOpen &&
								(activeIndex.main &&
								activeIndex.main === feature.index ? (
									<SvgArrowUp />
								) : (
									<SvgArrowDown />
								))}
						</div>
					</button>
					<br />
					{isSubclassFeature && shouldOpen && (
						<p className="text-slate-400 mb-1">
							{`[${characterInfo.characterSubclass.subclass_flavor}: ${characterInfo.characterSubclass.name}]`}
						</p>
					)}
					{feature.desc.map((el) => {
						return (
							shouldOpen && (
								<>
									{!el.name ? (
										<p className="mb-1">{el.body}</p>
									) : (
										<button
											className={`cursor-pointer p-1 mr-1 mt-1 border-slate-400 dark:border-slate-400 ${
												activeIndex[feature.index] === el.index
													? "border-t border-x pb-2 rounded-t-sm bg-slate-300 dark:bg-slate-500 text-slate-600 dark:text-slate-100"
													: "border rounded-sm"
											}`}
											onClick={() => {
												activeIndex[feature.index] &&
												activeIndex[feature.index] === el.index
													? setActiveIndex((prev) => ({
															...prev,
															[feature.index]: null,
														}))
													: setActiveIndex((prev) => ({
															...prev,
															[feature.index]: el.index,
														}));
											}}
										>
											{el.index.toUpperCase()}
										</button>
									)}
								</>
							)
						);
					})}

					<div>
						{(feature.index in activeIndex &&
							isSingleOpen &&
							feature.index === activeIndex.main &&
							activeIndex[feature.index]) ||
						(!isSingleOpen && activeIndex[feature.index]) ? (
							<p className="border border-slate-400 dark:border-slate-400 rounded-b-lg p-1">
								<span className="font-bold">
									{featureDescSubElement?.name}
								</span>
								{featureDescSubElement?.body}
							</p>
						) : null}
					</div>
				</li>
			</div>
		);
	}
}
