import { useContext, useState } from "react";
import Card from "./Card";
import { CharacterContext } from "./contexts";

export default function Features() {
	const [characterInfo] = useContext(CharacterContext);
	const [activeIndex, setActiveIndex] = useState({});
	const [isSingleOpen, setIsSingleOpen] = useState(true);

	// TODO: refactor this file

	return (
		<Card styles="relative overflow-y-auto pb-2" title={"Features and traits"}>
			<div className="absolute top-1 right-1 flex gap-1 border border-slate-300 dark:border-slate-800 p-0.5 rounded-sm">
				<button
					onClick={() => setIsSingleOpen(true)}
					className={
						isSingleOpen
							? "bg-slate-300 dark:bg-slate-500 text-xs/3 w-7 border border-slate-400 dark:border-slate-700 p-0.5 rounded-sm cursor-pointer"
							: "bg-slate-200 dark:bg-slate-700 text-xs/3 w-7 border border-slate-300 dark:border-slate-800 p-0.5 rounded-sm cursor-pointer"
					}
				>
					one
				</button>
				<button
					onClick={() => setIsSingleOpen(false)}
					className={
						isSingleOpen
							? "bg-slate-200 dark:bg-slate-700 text-xs/3 w-7 border border-slate-300 dark:border-slate-800 p-0.5 rounded-sm cursor-pointer"
							: "bg-slate-300 dark:bg-slate-500 text-xs/3 w-7 border border-slate-400 dark:border-slate-700 p-0.5 rounded-sm cursor-pointer"
					}
				>
					all
				</button>
			</div>
			<ul className="h-full">
				{characterInfo.characterClass?.class_levels?.map((elem) =>
					elem.level <= characterInfo.characterLevel
						? elem.features.map((ele) => {
								return (
									<div
										className="ml-3 mb-1 text-xs/3 italic text-slate-500 dark:text-slate-300 flex gap-1"
										key={ele.index}
									>
										<li key={ele.index}>
											<button
												onClick={() => {
													activeIndex.main &&
													activeIndex.main === ele.index
														? setActiveIndex((prev) => ({
																...prev,
																main: "none",
															}))
														: setActiveIndex((prev) => ({
																...prev,
																main: ele.index,
															}));
												}}
											>
												<div
													className={
														isSingleOpen
															? "flex gap-1 items-center cursor-pointer"
															: "lex gap-1 items-center"
													}
												>
													<span className="text-lg italic underline">
														{ele.name}
													</span>

													{isSingleOpen ? (
														activeIndex.main &&
														activeIndex.main === ele.index ? (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																viewBox="0 0 16 16"
															>
																<path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659" />
															</svg>
														) : (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																viewBox="0 0 16 16"
															>
																<path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
															</svg>
														)
													) : (
														""
													)}
												</div>
											</button>
											<br />

											{ele.desc.map((el) => {
												const shouldOpen = isSingleOpen
													? activeIndex.main &&
														activeIndex.main === ele.index
													: true;
												return shouldOpen ? (
													<>
														{!el.name ? (
															<>
																<p className="mb-1">
																	{el.desc}
																</p>
															</>
														) : (
															<button
																className={
																	activeIndex[
																		ele.index
																	] === el.index
																		? "cursor-pointer border-t border-x p-1 pb-2 rounded-t-sm border-slate-400 dark:border-slate-400 mr-1 mt-1 bg-slate-300 dark:bg-slate-500 text-slate-600 dark:text-slate-100"
																		: "cursor-pointer border p-1 rounded-sm border-slate-400 dark:border-slate-400 mr-1 mt-1 "
																}
																onClick={() => {
																	activeIndex[
																		ele.index
																	] &&
																	activeIndex[
																		ele.index
																	] === el.index
																		? setActiveIndex(
																				(
																					prev,
																				) => ({
																					...prev,
																					[ele.index]:
																						null,
																				}),
																			)
																		: setActiveIndex(
																				(
																					prev,
																				) => ({
																					...prev,
																					[ele.index]:
																						el.index,
																				}),
																			);
																}}
															>
																{el.index.toUpperCase()}
															</button>
														)}
													</>
												) : (
													""
												);
											})}

											<div>
												{!(ele.index in activeIndex) ? (
													""
												) : (isSingleOpen &&
														ele.index === activeIndex.main &&
														activeIndex[ele.index]) ||
												  (!isSingleOpen &&
														activeIndex[ele.index]) ? (
													<>
														<p className="border border-slate-400 dark:border-slate-400 rounded-b-lg p-1">
															<span className="font-bold">
																{
																	ele.desc.filter(
																		(e) =>
																			!e.name
																				? ""
																				: e.index ===
																					activeIndex[
																						ele
																							.index
																					],
																	)[0]?.name
																}
															</span>
															{
																ele.desc.filter((e) =>
																	!e.name
																		? ""
																		: e.index ===
																			activeIndex[
																				ele.index
																			],
																)[0]?.desc
															}
														</p>
													</>
												) : (
													""
												)}
											</div>
										</li>
									</div>
								);
							})
						: "",
				)}

				{characterInfo.characterSubclass?.subclass_levels?.map((elem) =>
					elem.level <= characterInfo.characterLevel
						? elem.features.map((ele) => {
								const shouldOpen = isSingleOpen
									? activeIndex.main && activeIndex.main === ele.index
									: true;
								return (
									<div
										className="ml-3 mb-1 text-xs/3 italic text-slate-500 dark:text-slate-300 flex gap-1"
										key={ele.index}
									>
										<li key={ele.index}>
											<button
												onClick={() => {
													activeIndex.main &&
													activeIndex.main === ele.index
														? setActiveIndex((prev) => ({
																...prev,
																main: "none",
															}))
														: setActiveIndex((prev) => ({
																...prev,
																main: ele.index,
															}));
												}}
											>
												<div
													className={
														isSingleOpen
															? "flex gap-1 items-center cursor-pointer"
															: "flex gap-1 items-center"
													}
												>
													<div className="flex text-lg italic text-left">
														{/* <p className="text-slate-400 text-sm border border-slate-400 px-1 py-0.5 mr-1">
															{
																characterInfo
																	.characterSubclass
																	.name
															}
															:{" "}
														</p> */}
														<div className="flex gap-1 items-center">
															<div className="bg-slate-300 dark:bg-slate-500 p-0.5 mr-1 rounded-sm text-xs">
																subclass
															</div>
															<p className="underline">
																{ele.name}
															</p>
														</div>
													</div>

													{isSingleOpen ? (
														activeIndex.main &&
														activeIndex.main === ele.index ? (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																viewBox="0 0 16 16"
															>
																<path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659" />
															</svg>
														) : (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																viewBox="0 0 16 16"
															>
																<path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
															</svg>
														)
													) : (
														""
													)}
												</div>
											</button>
											<br />
											{!shouldOpen ? (
												""
											) : (
												<p className="text-slate-400 mb-1">
													[
													{characterInfo.characterSubclass
														.subclass_flavor +
														": " +
														characterInfo.characterSubclass
															.name}
													]
												</p>
											)}
											{ele.desc.map((el) => {
												return shouldOpen ? (
													<>
														{!el.name ? (
															<>
																<p className="mb-1">
																	{el.desc}
																</p>
															</>
														) : (
															<button
																className={
																	activeIndex[
																		ele.index
																	] === el.index
																		? "cursor-pointer border-t border-x p-1 pb-2 rounded-t-sm border-slate-400 dark:border-slate-400 mr-1 mt-1 bg-slate-300 dark:bg-slate-500 text-slate-600 dark:text-slate-100"
																		: "cursor-pointer border p-1 rounded-sm border-slate-400 dark:border-slate-400 mr-1 mt-1 "
																}
																onClick={() => {
																	activeIndex[
																		ele.index
																	] &&
																	activeIndex[
																		ele.index
																	] === el.index
																		? setActiveIndex(
																				(
																					prev,
																				) => ({
																					...prev,
																					[ele.index]:
																						null,
																				}),
																			)
																		: setActiveIndex(
																				(
																					prev,
																				) => ({
																					...prev,
																					[ele.index]:
																						el.index,
																				}),
																			);
																}}
															>
																{el.index.toUpperCase()}
															</button>
														)}
													</>
												) : (
													""
												);
											})}

											<div>
												{!(ele.index in activeIndex) ? (
													""
												) : (isSingleOpen &&
														ele.index === activeIndex.main &&
														activeIndex[ele.index]) ||
												  (!isSingleOpen &&
														activeIndex[ele.index]) ? (
													<>
														<p className="border border-slate-400 dark:border-slate-400 rounded-b-lg p-1">
															<span className="font-bold">
																{
																	ele.desc.filter(
																		(e) =>
																			!e.name
																				? ""
																				: e.index ===
																					activeIndex[
																						ele
																							.index
																					],
																	)[0]?.name
																}
															</span>

															{
																ele.desc.filter((e) =>
																	!e.name
																		? ""
																		: e.index ===
																			activeIndex[
																				ele.index
																			],
																)[0]?.desc
															}
														</p>
													</>
												) : (
													""
												)}
											</div>
										</li>
									</div>
								);
							})
						: "",
				)}
			</ul>
		</Card>
	);
}
