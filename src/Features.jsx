import { useContext, useState } from "react";
import Card from "./Card";
import { CharacterContext } from "./contexts";

export default function Features() {
	const [characterInfo] = useContext(CharacterContext);
	const [activeIndex, setActiveIndex] = useState({});

	// TODO: refactor this file

	return (
		<Card styles=" overflow-y-auto pb-2" title={"Features and traits"}>
			<ul className="h-full">
				{characterInfo.characterSubclass?.subclass_levels?.map((elem) =>
					elem.level <= characterInfo.characterLevel
						? elem.features.map((ele) => {
								return (
									<div
										className="ml-3 mb-1 text-xs/3 italic text-slate-500 dark:text-slate-300 flex gap-1"
										key={ele.index}
									>
										<li key={elem.index}>
											<span className="text-lg italic underline">
												{ele.name}
											</span>
											<br />

											{ele.desc.map((el) => {
												return (
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
																		? "border-t border-x p-1 pb-2 rounded-t-sm border-slate-400 dark:border-slate-800 mr-1 mt-1 bg-slate-300 dark:bg-slate-500 dark:text-slate-100"
																		: "border p-1 rounded-sm border-slate-400 dark:border-slate-800 mr-1 mt-1 "
																}
																onClick={() => {
																	setActiveIndex(
																		(prev) => ({
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
												);
											})}

											<div>
												{!(ele.index in activeIndex) ? (
													""
												) : (
													<>
														<p className="border border-slate-400 dark:border-slate-800 rounded-b-lg p-1">
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
