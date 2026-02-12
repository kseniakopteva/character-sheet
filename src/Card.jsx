export default function Card({ styles, title, children }) {
	return (
		<div
			className={
				"relative p-1.5 m-1 border border-solid bg-white border-slate-300 rounded-md " +
				styles
			}
		>
			{children}
			{title ? (
				<h2 className="absolute bottom-0.5 flex justify-center text-center w-full -ml-1.5 uppercase font-bold text-xs/3 mt-auto text-slate-700">
					{title}
				</h2>
			) : (
				""
			)}
		</div>
	);
}
