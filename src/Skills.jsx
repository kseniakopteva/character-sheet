import { useContext } from "react";
import { SkillContext } from "./contexts";

export default function Skills({ styles }) {
	const [skills] = useContext(SkillContext);

	return (
		<>
			<div className={" " + styles}>
				<ul>
					{skills.map((s) => (
						<>
							<input
								type="checkbox"
								id={s.index}
								name={s.index}
								value={s.name}
							/>
							<label htmlFor={s.index}>
								{" "}
								{s.name} ({s.value})
							</label>{" "}
							<br />
						</>
					))}
				</ul>
			</div>
		</>
	);
}
