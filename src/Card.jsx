export default function Card({ styles, title, children }) {
	// TODO: fix the title moving up while scrolling
	return (
		<div
			className={
				"relative p-1.5 m-1 border border-solid bg-white border-slate-300 dark:bg-slate-600 dark:border-slate-900 rounded-md " +
				styles
			}
		>
			{children}
			{title ? (
				<h2 className="absolute bottom-0.5 flex justify-center text-center w-full -ml-1.5 uppercase font-bold text-xs/3 mt-auto text-slate-700 dark:text-slate-200">
					<span className="bg-white dark:bg-slate-600 rounded-sm px-1 pt-1">
						{title}
					</span>
				</h2>
			) : (
				""
			)}
		</div>
	);
}
