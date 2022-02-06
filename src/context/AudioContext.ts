import { Track } from "interfaces/track"
import { createContext, useContext } from "react"

interface AudioContextProps {
	audio: HTMLAudioElement
	duration?: number
	currentTime?: number
	paused?: boolean
	currentTrack?: Track
	trackLoading?: boolean
	setPaused: (value: boolean) => void
	setCurrentTime: (value: number) => void
	setDuration: (value: number) => void
	setCurrentTrack: (track: Track) => void
	setTrackLoading: (value: boolean) => void
}

export const AudioContext = createContext({} as AudioContextProps)

export const useAudio = () => useContext(AudioContext)
