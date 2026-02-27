export default function Insert({ title, subtitle }) {
	return (
		<div className="h-full flex flex-col justify-center items-center">
			<p className="text-3xl italic leading-7">{title}</p>
			<p>{subtitle}</p>
		</div>
	);
}
