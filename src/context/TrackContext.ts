import tracks from "data"
import { Track } from "interfaces/track"
import { createContext, useContext } from "react"

export interface TrackState {
	popularTracks: Track[]
	searchedTracks?: Track[]
}

export const trackInitialState: TrackState = {
	popularTracks: tracks,
}

export interface TrackContextProps {
	trackState: TrackState
	getTracks: (textToSearch: string) => Promise<any>
}

export const TrackContext = createContext({} as TrackContextProps)

export const useTrack = () => useContext(TrackContext)
