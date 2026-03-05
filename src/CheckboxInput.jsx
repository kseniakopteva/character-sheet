import { SvgCheck } from "./svg";

export default function CheckboxInput({
	id,
	name,
	handleChange,
	children,
	checked,
	disabled,
}) {
	return (
		<label htmlFor={id} className="block">
			<div className="inline-flex items-center group  has-[input:disabled]:text-slate-500  text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-50">
				<label
					className="flex items-center relative cursor-pointer group-has-[input:disabled]:cursor-not-allowed "
					htmlFor={id}
				>
					<input
						type="checkbox"
						className="peer h-4 w-4 transition-all appearance-none bg-white dark:bg-slate-600 rounded hover:shadow-sm dark:shadow-slate-500 dark:hover:border-slate-500 border border-slate-300 dark:border-slate-700 checked:bg-slate-600 checked:border-slate-600 dark:checked:border-slate-200 dark:checked:bg-slate-200 disabled:bg-slate-300 disabled:border-slate-400 dark:disabled:checked:border-slate-400 dark:disabled:checked:bg-slate-400"
						id={id}
						name={name}
						onChange={handleChange}
						checked={checked}
						disabled={disabled}
					/>
					<span className="absolute text-white dark:text-slate-700 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<SvgCheck />
					</span>
				</label>
				<label
					className="cursor-pointer ml-2 text-sm group-has-[input:disabled]:cursor-not-allowed"
					htmlFor={id}
				>
					{children}
				</label>
			</div>
		</label>
	);
}
