import { BottomTab } from "components/BottomTab"
import { Home } from "pages/Home"
import { Player } from "pages/Player"
import { Playlists } from "pages/Playlists"
import { HashRouter, Navigate, Route, Routes } from "react-router-dom"

export const Router = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/player" element={<Player />} />
				<Route path="/playlists" element={<Playlists />} />
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<Navigate to="/" replace />} />
			</Routes>
			<BottomTab />
		</HashRouter>
	)
}
