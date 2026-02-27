export default function Footer() {
	return (
		<div className="flex justify-between items-center px-2 -mt-6 text-slate-600 dark:text-slate-400">
			<p className="text-xs italic">
				"Character Sheet by KK" is unofficial Fan Content permitted under the Fan
				Content Policy. Not approved/endorsed by Wizards. Portions of the
				materials used are property of Wizards of the Coast. ©Wizards of the Coast
				LLC.
			</p>
			<p>
				<a
					className="underline after:content-['_↗']"
					href="https://github.com/kseniakopteva/character-sheet"
				>
					Github
				</a>
			</p>
		</div>
	);
}
