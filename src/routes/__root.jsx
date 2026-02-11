import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { CharacterContext } from "../contexts.jsx";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const characterHook = useState({
		characterClass: null,
		characterRace: null,
		characterLevel: null,
		characterBackground: null,
	});
	return (
		<>
			<CharacterContext value={characterHook}>
				<Outlet />
			</CharacterContext>
		</>
	);
}
