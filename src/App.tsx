import { AudioProvider } from "context/AudioProvider"
import { TrackProvider } from "context/TrackProvider"
import { Router } from "routes/Router"

function App() {
	return (
		<TrackProvider>
			<AudioProvider>
				<Router />
			</AudioProvider>
		</TrackProvider>
	)
}

export default App
