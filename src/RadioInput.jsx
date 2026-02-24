export default function RadioInput({ id, name, handleChange, checked, children }) {
	return (
		<div className="inline-flex items-center" key={id}>
			<label
				className="peer relative flex items-center cursor-pointer"
				htmlFor={id}
			>
				<input
					name={name}
					type="radio"
					className={
						"peer h-4 w-4 cursor-pointer appearance-none rounded-full bg-white border border-slate-300 checked:border-slate-400 dark:checked:border-slate-400 transition-all dark:bg-slate-600 dark:border-slate-700 disabled:cursor-text"
					}
					id={id}
					onChange={(name) => handleChange(name, children)}
					checked={checked}
				/>
				<span className="absolute bg-slate-800 dark:bg-white w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
			</label>
			<label
				className="not-peer-has-checked:text-slate-400 ml-2 text-slate-800 dark:text-slate-200 cursor-pointer text-sm pb-0.5"
				htmlFor={id}
			>
				<span className="mr-2">{children}</span>
			</label>
		</div>
	);
}
