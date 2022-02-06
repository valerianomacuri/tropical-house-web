import { AudioProvider } from "context/AudioProvider"
import { Router } from "routes/Router"

function App() {
	return (
		<AudioProvider>
			<Router />
		</AudioProvider>
	)
}

export default App
