import { BottomTab } from "components/BottomTab"
import { Modal } from "components/Modal"
import { AddTrack } from "pages/AddTrack"
import { Home } from "pages/Home"
import { Player } from "pages/Player"
import { Playlists } from "pages/Playlists"
import { HashRouter, Navigate, Route, Routes } from "react-router-dom"

export const Router = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/add-track" element={<AddTrack />} />
				<Route path="/playlists" element={<Playlists />} />
				<Route path="/" element={<Home />}>
					<Route
						path=":trackId"
						element={
							<Modal>
								<Player />
							</Modal>
						}
					/>
				</Route>
				<Route path="/*" element={<Navigate to="/" replace />} />
			</Routes>
			<BottomTab />
		</HashRouter>
	)
}
